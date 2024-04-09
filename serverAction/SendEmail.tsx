"use server"
 import React from 'react'
import {Resend} from 'resend'
import{getErrorMessage, validateString }from './utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail =  async(formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

   //simple server side validation
   if(!validateString(message, 500)){
      return{ error: "Invalid Message"};
   }
    if(!validateString(senderEmail, 5000)){
      return{error: "invalid  sender Email"}
   }
   
   let data;

   //onboarding@resend.dev is server email
   try{
     data = await resend.emails.send({
        from: 'Norana PortFolio Contact form <onboarding@resend.dev>',
        to: 'noranalisha@gmail.com',
        subject: 'Hello World',
        reply_to: senderEmail as string,
        //text: message as string,
        react: React.createElement(ContactFormEmail,{
         message : message as string,
         senderEmail: senderEmail as string
        })
        // react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
      });
   }
   catch(error: unknown){
    return {
        error: getErrorMessage(error)
       }
   }

   return { data };//will get data or catch error
}
  
