package main

import (
	"github.com/robfig/cron/v3"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"
)

const defaultCron = "2 0 * * *"
const defaultTimezone = "Asia/Shanghai"

func main() {
	token, hasToken := os.LookupEnv("SOCKBOOM_BOT_TOKEN")
	cronExpression, hasCron := os.LookupEnv("SOCKBOOM_BOT_CRON")
	timezone, hasTimezone := os.LookupEnv("SOCKBOOM_BOT_TIMEZONE")
	if !hasToken {
		token = ""
	}
	if !hasCron {
		cronExpression = defaultCron
	}
	if !hasTimezone {
		timezone = defaultTimezone
	}

	log.Printf("cron     => %s\n", cronExpression)
	log.Printf("timezone => %s\n", timezone)

	loc, _ := time.LoadLocation(timezone)

	c := cron.New(cron.WithLocation(loc))
	_, userCronError := c.AddFunc(cronExpression, func() {
		checkin(token)
	})
	if userCronError != nil {
		log.Printf("error use cron '%s', fall back to default cron '%s'\n", cronExpression, defaultCron)
		_, err := c.AddFunc(defaultCron, func() {
			checkin(token)
		})
		handleError(err)
	}

	c.Start()
	//var exit string
	//_, err := fmt.Scan(&exit)
	//handleError(err)
	ch := make(chan int)
	<-ch
}

func handleError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func checkin(token string) {
	resp, err := http.Get("https://api.sockboom.click/client/checkin?token=" + token)
	handleError(err)
	defer func(Body io.ReadCloser) {
		handleError(Body.Close())
	}(resp.Body)
	b, err := ioutil.ReadAll(resp.Body)
	handleError(err)
	log.Println(string(b))
}
