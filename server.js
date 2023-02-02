import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

var transporter = createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GOOGLE_MAIL_ACCOUNT_USER, // e.g. sitemailer92833
		pass: process.env.GOOGLE_MAIL_NODEMAILER_PASSWORD, // this is the "app password" that you set up, not the main password for this mail account
	},
});

var mailOptions = {
	from: `Language Community Site <${process.env.GOOGLE_MAIL_ACCOUNT_USER}@gmail.com>`,
	to: 'thereceipient@domain.com', // change this to email you want to received test mails at
	subject: 'Please confirm your registration',
	html: `
<h1>Please confirm your registration</h1>	
<p>Thank you for signing up with us!</p>
<p>Please click here to confirm your registration: https://edwardtanguay.vercel.app/howtos</p>
`,
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
