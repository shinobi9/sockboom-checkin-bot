const request = require('request')
const CronJob = require('cron').CronJob;
const BOT_COOKIE = process.env.SOCKBOOM_BOT_COOKIE || ''
const BOT_CRON_EXPRESS = process.env.SOCKBOOM_BOT_CRON || '0 1 2 * * *'
const BOT_TIME_ZONE = process.env.SOCKBOOM_BOT_TIMEZONE || 'Asia/Shanghai'

const job = new CronJob(cronTime = BOT_CRON_EXPRESS, onTick = () => {
    checkin()
    const date = new Date();
    console.log(`checkin at: ${date}`)
}, timeZone = BOT_TIME_ZONE);

function checkin() {
    request.post({
        url: 'https://sockboom.art/user/checkin',
        headers: {
            'cookie': BOT_COOKIE
        },
        encoding: 'utf8'
    }, (_error, response, _body) => {
        if (response.statusCode == 200) {
            console.log(JSON.parse(response.body).msg);
        } else {
            console.log(`${response.statusCode} : ${response.body}`);
        }
    })
}

console.log('bot init..')
job.start()
console.log('bot working..')