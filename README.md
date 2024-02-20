# nodemailer test

This code uses **Node** and **nodemailer** to send mails for free.

## Setup

- `npm i`
- create file in root called `.env` with this content:

``` text
GOOGLE_MAIL_ACCOUNT_USER = googleaccountusername
GOOGLE_MAIL_NODEMAILER_PASSWORD = apppasswordfornodemailer
```

- note:
  - the **GOOGLE_MAIL_ACCOUNT_USER** is the E-mail address you set up from which mails will be sent
  - the **GOOGLE_MAIL_NODEMAILER_PASSWORD** is the app password that was created when you set up this Google mail account to be used from an app

- for example:

```
GOOGLE_MAIL_ACCOUNT_USER = berlinreadingclub@gmail.com 
GOOGLE_MAIL_NODEMAILER_PASSWORD = ihwiwjksjdgxyeub 
```

## Execution

`node server.js`

## More info

[HOWTO: How to set up a Gmail account and use nodemailer to send emails from Node using TypeScript/ES6-modules](https://edwardtanguay.vercel.app/howtos?id=682) 
