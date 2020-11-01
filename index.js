import request from 'request';
import cron from 'cron';

const BOT_USERNAME = process.env.SOCKBOOM_BOT_USERNAME || ''
const BOT_PASSWORD = process.env.SOCKBOOM_BOT_PASSWORD || ''
const BOT_CRON_EXPRESS = process.env.SOCKBOOM_BOT_CRON || '0 1 2 * * *'
const BOT_TIME_ZONE = process.env.SOCKBOOM_BOT_TIMEZONE || 'Asia/Shanghai'

const statusRequest = request.defaults({ jar: true })

const humanResponse = (_error, response, _body) => {
    if (response.statusCode == 200) {
        console.log(JSON.parse(response.body).msg);
    } else {
        console.log(`${response.statusCode} : ${response.body}`);
    }
}

function login(block) {
    statusRequest.post({
        url: 'https://sockboom.art/auth/login',
        form: {
            email: BOT_USERNAME,
            passwd: BOT_PASSWORD
        }
    }, (_error, response, _body) => {
        humanResponse(_error, response, _body)
        block()
    })
}

function checkin(block) {
    statusRequest.post({
        url: 'https://sockboom.art/user/checkin',
    }, (_error, response, _body) => {
        humanResponse(_error, response, _body)
        block()
    })
}

const job = new cron.CronJob({
    cronTime: BOT_CRON_EXPRESS,
    onTick: () => {
        login(() => {
            checkin(() => {
                console.log(`checkin at: ${new Date().toLocaleString()}`)
            })
        })
    },
    timeZone: BOT_TIME_ZONE
})


console.log('bot init..')
job.start()
console.log('bot working..')