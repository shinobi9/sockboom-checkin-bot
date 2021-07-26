## sockboom bot
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/shinobi9/sockboom-checkin-bot?style=for-the-badge)


[docker repository](https://hub.docker.com/r/shinobi9/sockboom-checkin-bot)

##### usage:
```shell
docker run -it --rm \
    -e SOCKBOOM_BOT_TOKEN="<see in https://sockboom.lol/user/edit>" \
    -e SOCKBOOM_BOT_CRON="<cron expression , default : 2 0 * * * >" \
    -e SOCKBOOM_BOT_TIMEZONE="<default : Asia/Shanghai >" \
    --name bot \
    shinobi9/sockboom-checkin-bot
```