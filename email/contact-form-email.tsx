import React from 'react'
import {Html, Body, Head, Heading, Hr, Container, Preview, Section, Text} from '@react-email/components'
import {Tailwind} from '@react-email/tailwind'

type ContactEmailProps={
  message: string,
  senderEmail: string,
}
export default function ContactFormEmail({message, senderEmail}: ContactEmailProps) {
  return (
     <Html>
        <Head />
        <Preview>New message from portfolio site</Preview>
        <Tailwind>
         <Body className='bg-gray-200'>

            <Container>
                <Section className='bg-white my-10 px-10 py-4 rounded-md border-black/10'>
                    <Heading className='leading-tight'>
                        You Recieve the following Message 
                    </Heading>
                    <Text>{message}</Text>
                    <Hr />
                    <Text>The sender Email Is :  {senderEmail}</Text>
                </Section>
            </Container>

         </Body>
        </Tailwind>
     
     </Html>
  )
}
