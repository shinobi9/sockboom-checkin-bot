## sockboom bot


```
usage:
docker run -it --rm \
    -e SOCKBOOM_BOT_COOKIE="<your cookie>" \
    -e SOCKBOOM_BOT_CRON="<cron expression , default :      0 1 2 * * * >" \
    -e SOCKBOOM_BOT_TIMEZONE="<default :   Asia/Shanghai >" \
    --name bot \
    sockboom-checkin-bot
```