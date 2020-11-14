import request from 'request';
import cron from 'cron';

const BOT_TOKEN = process.env.BOT_TOKEN || ''
const BOT_CRON_EXPRESS = process.env.SOCKBOOM_BOT_CRON || '0 1 2 * * *'
const BOT_TIME_ZONE = process.env.SOCKBOOM_BOT_TIMEZONE || 'Asia/Shanghai'


const humanResponse = (_error, response, _body) => {
    if (response.statusCode == 200) {
        console.log(response.body);
    } else {
        console.log(response.statusCode);
    }
}

function checkin(block) {
    request.get({
        url: `https://api.sockboom.cc/client/checkin?token=${BOT_TOKEN}`,
    }, (_error, response, _body) => {
        humanResponse(_error, response, _body)
        block()
    })
}

const job = new cron.CronJob({
    cronTime: BOT_CRON_EXPRESS,
    onTick: () => {
        checkin(() => {
            console.log(`checkin at: ${new Date().toLocaleString()}`)
        })
    },
    timeZone: BOT_TIME_ZONE
})


console.log('bot init..')
job.start()
console.log('bot working..')
