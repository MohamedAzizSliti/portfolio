export function createContactEmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #3b82f6;
          padding: 20px;
          text-align: center;
          color: white;
        }
        .content {
          padding: 20px;
          background-color: #f9fafb;
        }
        .footer {
          background-color: #f3f4f6;
          padding: 15px;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .info-table td {
          padding: 10px;
          border-bottom: 1px solid #e5e7eb;
        }
        .info-table td:first-child {
          font-weight: bold;
          width: 100px;
        }
        .message-box {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 5px;
          padding: 15px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>New Portfolio Contact</h2>
      </div>
      <div class="content">
        <p>You've received a new message from your portfolio contact form.</p>
        
        <table class="info-table">
          <tr>
            <td>Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td>Subject:</td>
            <td>${subject}</td>
          </tr>
        </table>
        
        <div class="message-box">
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
      <div class="footer">
        <p>This email was sent from your portfolio website contact form.</p>
        <p>© ${new Date().getFullYear()} Mohamed Aziz Sliti</p>
      </div>
    </body>
    </html>
  `
}

export function createAutoReplyTemplate({
  name,
}: {
  name: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for your message</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #3b82f6;
          padding: 20px;
          text-align: center;
          color: white;
        }
        .content {
          padding: 20px;
          background-color: #f9fafb;
        }
        .footer {
          background-color: #f3f4f6;
          padding: 15px;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
        }
        .social-links {
          text-align: center;
          margin-top: 20px;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #3b82f6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>Thank You for Your Message</h2>
      </div>
      <div class="content">
        <p>Hello ${name},</p>
        
        <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
        
        <p>In the meantime, feel free to check out my social profiles or browse through more of my projects on GitHub.</p>
        
        <div class="social-links">
          <a href="https://github.com/MohamedAzizSliti">GitHub</a> | 
          <a href="https://www.linkedin.com/in/mohamedazizsliti/">LinkedIn</a>
        </div>
      </div>
      <div class="footer">
        <p>This is an automated response. Please do not reply to this email.</p>
        <p>© ${new Date().getFullYear()} Mohamed Aziz Sliti</p>
      </div>
    </body>
    </html>
  `
}
