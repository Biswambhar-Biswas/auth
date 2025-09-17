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

const sendMail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"BISWAMBHAR.DEV" <${process.env.NODE_MAILER_EMAIL}>`,
      to: to,
      subject: `Verify Your Account`,
      text:`your otp is ${otp}`, // plain‑text body
      html: `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <title>{{APP_NAME}} – Your OTP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Preheader (hidden preview text) -->
  <style>
    .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }
    /* Mobile tweaks */
    @media only screen and (max-width: 600px){
      .container{ width:100% !important; }
      .p-24{ padding:20px !important; }
      .h1{ font-size:22px !important; line-height:28px !important; }
      .otp{ font-size:24px !important; letter-spacing:6px !important; }
      .btn{ padding:12px 16px !important; display:block !important; }
    }
    /* Dark mode hint (supported by some clients) */
    @media (prefers-color-scheme: dark) {
      body, .wrapper { background:#0b0c10 !important; }
      .card { background:#15171c !important; border-color:#22252b !important; }
      .text, .muted, .h1 { color:#e6e7eb !important; }
      .otp { background:#0b0c10 !important; color:#ffffff !important; border-color:#333741 !important; }
      .btn { background:#4c8bf5 !important; color:#ffffff !important; }
      .footer { color:#9aa0a6 !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background:#f4f5f7;">
  <span class="preheader">Your {{APP_NAME}} OTP is {{OTP}}. It expires in 5 minutes.</span>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f4f5f7;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container wrapper" style="width:600px; max-width:600px;">
          <!-- Brand header -->
          <tr>
            <td align="left" class="p-24" style="padding:24px 24px 0 24px;">
              <table role="presentation" width="100%">
                <tr>
                  <td align="left">
                    <!-- Use text logo for deliverability; replace with hosted logo URL if you want -->
                    <div style="font:600 18px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#111;">
                      {{BONY'S APP}}
                    </div>
                  </td>
                  <td align="right" style="font:500 12px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#6b7280;">
                    Verification Code
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td class="p-24" style="padding:16px 24px 24px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="card" style="background:#ffffff; border:1px solid #e5e7eb; border-radius:12px;">
                <tr>
                  <td style="padding:28px;">
                    <h1 class="h1" style="margin:0 0 12px 0; font:700 24px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#111827;">
                      Verify your email
                    </h1>
                    <p class="text" style="margin:0 0 16px 0; font:400 14px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#374151;">
                      Use the one-time password (OTP) below to finish signing in to <strong>{{BONY'S APP}}</strong>.
                      This code expires in <strong>5 minutes</strong>.
                    </p>

                    <!-- OTP box -->
                    <div class="otp" style="margin:18px 0; padding:14px 20px; border:1px dashed #d1d5db; border-radius:10px; background:#f9fafb; font:700 28px/1.2 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; letter-spacing:10px; text-align:center; color:#111827;">
                      {{${otp}}}
                    </div>

                   

                    <p class="muted" style="margin:16px 0 0 0; font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#6b7280;">
                      Didn’t request this? You can safely ignore this email. For help, contact
                      <a href="mailto:{{SUPPORT_EMAIL}}" style="color:#2563eb; text-decoration:none;">{{SUPPORT_EMAIL}}</a>.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <table role="presentation" width="100%" style="margin-top:16px;">
                <tr>
                  <td class="footer" align="center" style="font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#9ca3af; padding:8px 0;">
                    © {{2025}} {{BONY'S APP}} • This is an automated message. Please don’t reply.
                  </td>
                </tr>
              </table>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
` 
// HTML body

    });
    console.log("SENT");    
    console.log("Message sent:", info.messageId);
    return "ok"
  } catch (error) {
    console.error("Error sending mail:", error);
  //   res.status(500).json({ error: "Failed to send mail. Please try again later." });
  }
  throw error
};





export {sendMail}