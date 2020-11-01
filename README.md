## sockboom bot
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/shinobi9/sockboom-checkin-bot?style=for-the-badge)

```
usage:
docker run -it --rm \
    -e SOCKBOOM_BOT_USERNAME="<your username , shoule be a email>" \
    -e SOCKBOOM_BOT_PASSWORD="<your password>" \
    -e SOCKBOOM_BOT_CRON="<cron expression , default : 0 1 2 * * * >" \
    -e SOCKBOOM_BOT_TIMEZONE="<default : Asia/Shanghai >" \
    --name bot \
    shinobi9/sockboom-checkin-bot
```