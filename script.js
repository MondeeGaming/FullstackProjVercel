import { Resend } from 'resend';

const resend = new Resend('re_AmEZYLKk_4Dbrev2ByUj1hHjj3AzorbpW');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'm7144427@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});