const sgMail=require('@sendgrid/mail')

//const sendgridAPIKey="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"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to:'sejkhilari2002@gmail.com',
//     from: 'sejkhilari2002@gmail.com',
//     subject: 'This is my first creation',
//     text:'I hope this one actually gets to you.'
// })

const sendWelcomeEmail=(email,name)=>{
        sgMail.send({
            to:email,
            from:'sejkhilari2002@gmail.com',
            subject:'Thanks for joining in!',
            text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
        })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sejkhilari2002@gmail.com',
        subject:'Sorry to see you go!',
        text:`Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}
