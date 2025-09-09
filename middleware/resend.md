import { Resend } from 'resend';

const resend = new Resend('re_WkkaLdzJ_NzzeW57xppokUdoHhfCoJbvQ');

const sendMail = async function (to, otp) {
    try {
        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: to,
            subject: 'OTP VERIFICATION',
            html: `<p>Your Otp is ${otp}</p>`
        });
        console.log(result.data,resend.get)
        console.log("OTP SENT")
    } catch (error) {
        console.log();
        
    }

}


export { sendMail }