import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: `${process.env.NODE_MAILER_EMAIL}`,
        pass: `${process.env.NODE_MAILER_EMAIL_PASSWORD}`,
    },
});

const recivedNotification = async (to, reciveReciveData) => {
    try {
        const {category, weight, coin, name,totalCoin} = reciveReciveData
        const info = await transporter.sendMail({
            from: `"BISWAMBHAR.DEV" <${process.env.NODE_MAILER_EMAIL}>`,
            to: to,
            subject: `WASTE RECEIVE CONFIRMATION`,
            // text: `your otp is ${otp}`, 
            // plain‑text body
            html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f9f4; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; border: 1px solid #d4e5d4;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://cdn-icons-png.flaticon.com/512/744/744466.png" alt="Thank You" width="70" style="margin-bottom: 10px;">
      <h2 style="color: #2e8b57;">Thank You ${name} for Contributing to a Greener Planet! 🌍</h2>
      <p style="color: #555;">We truly appreciate your effort in helping us manage waste responsibly.</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <h3 style="color: #2e8b57; border-bottom: 2px solid #2e8b57; display: inline-block; padding-bottom: 5px;">Your Contribution Details</h3>
      <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #333;"><strong>♻️ Waste Type:</strong></td>
          <td style="padding: 8px 0; color: #555;">${category}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #333;"><strong>📦 Amount:</strong></td>
          <td style="padding: 8px 0; color: #555;">${weight} kg</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #333;"><strong>🏅 Points Earned:</strong></td>
          <td style="padding: 8px 0; color: #555;">
            <img src="https://cdn-icons-png.flaticon.com/512/138/138281.png" alt="Coin" width="20" style="vertical-align: middle; margin-right: 5px;">
            <strong>+${coin} EcoCoins</strong>
          </td>
        </tr>
      </table>
    </div>

    <div style="text-align: center; margin-top: 25px;">
      <p style="font-size: 18px; color: #333;">💰 <strong>Your Total Balance:</strong></p>
      <p style="font-size: 24px; color: #2e8b57; font-weight: bold;">
        <img src="https://cdn-icons-png.flaticon.com/512/138/138281.png" alt="Coin" width="30" style="vertical-align: middle; margin-right: 8px;">
        ${totalCoin} EcoCoins
      </p>
    </div>

    <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #666;">
      <p>Keep contributing and earn more rewards while saving the Earth! 🌱</p>
      <a href="http://localhost:3000/user" style="background-color: #2e8b57; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">View Dashboard</a>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;">
    <p style="text-align: center; font-size: 12px; color: #aaa;">© 2025 EcoCycle | Together for a sustainable future ♻️</p>
  </div>
  `

            // HTML body

        });
        return "ok"
    } catch (error) {
        console.error("Error sending mail:", error);
        //   res.status(500).json({ error: "Failed to send mail. Please try again later." });
    }
    throw error
};





export { recivedNotification }