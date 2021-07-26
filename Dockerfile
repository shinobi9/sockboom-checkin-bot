FROM golang:1.16-alpine AS build

ADD . /app

WORKDIR /app

RUN go env -w GOPROXY=https://goproxy.cn,direct

RUN CGO_ENABLED=0 GOOS=linux go build -o sockboom-check-bot

FROM alpine as final

ADD . /app

WORKDIR /app

COPY --from=build /app/sockboom-check-bot /app

CMD ["/app/sockboom-check-bot"]