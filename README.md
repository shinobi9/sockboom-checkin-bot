## sockboom bot
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/shinobi9/sockboom-checkin-bot?style=for-the-badge)


[docker repository](https://hub.docker.com/r/shinobi9/sockboom-checkin-bot)

##### usage:
```shell
docker run -it --rm \
    -e SOCKBOOM_BOT_TOKEN="<see in https://sockboom.art/user/edit>" \
    -e SOCKBOOM_BOT_CRON="<cron expression , default : 0 1 2 * * * >" \
    -e SOCKBOOM_BOT_TIMEZONE="<default : Asia/Shanghai >" \
    --name bot \
    shinobi9/sockboom-checkin-bot
```


##### logs:
```plain
(node:1) ExperimentalWarning: The ESM module loader is experimental.
bot init..
bot working..
{"success":1,"traffic":680075739}
checkin at: 11/15/2020, 12:02:01 AM
{"success":1,"traffic":238737380}
checkin at: 11/16/2020, 12:02:01 AM
{"success":1,"traffic":241567305}
checkin at: 11/17/2020, 12:02:01 AM
{"success":1,"traffic":597007334}
checkin at: 11/18/2020, 12:02:01 AM
```