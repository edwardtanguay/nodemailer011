# nodemailer test

This code uses **Node** and **nodemailer** to send mails for free.

## Setup

- `npm i`
- create file in root called `.env` with this content:

``` text
GOOGLE_MAIL_ACCOUNT_USER = googleaccountusername
GOOGLE_MAIL_NODEMAILER_PASSWORD = apppasswordfornodemailer
```

Note that the password is not the main password for your Google account, but the special **app password** that you set up for NodeMailer

## Execution

`node server.js`

## More info

[HOWTO: How to set up a Gmail account and use nodemailer to send emails from Node using TypeScript/ES6-modules](https://edwardtanguay.vercel.app/howtos?id=682) 