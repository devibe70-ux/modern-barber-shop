import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Handle malformed JSON body errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('[BAD JSON PAYLOAD]', err.message);
    return res.status(400).json({ success: false, message: 'Invalid JSON payload provided.' });
  }
  next();
});

// Endpoint: /api/appointments
app.post('/api/appointments', (req, res) => {
  const { id, service, barber, date, time, customer } = req.body;
  console.log(`[APPOINTMENT RESERVED] ID: ${id} | Customer: ${customer?.name} (${customer?.phone}) | Service: ${service?.name} | Barber: ${barber?.name} | Date/Time: ${date} at ${time}`);
  
  res.status(201).json({
    success: true,
    message: 'Appointment reserved successfully.',
    bookingId: id
  });
});

// Healthcheck endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'The Modern Barber Shop API', timestamp: new Date().toISOString() });
});

// Endpoint: /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, barberPreference, message } = req.body;

  // Input Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Validation error: Name, email, phone, and message are required fields.'
    });
  }

  console.log(`[INQUIRY RECEIVED] From: ${name} (${email}, ${phone}) | Service: ${service} | Barber: ${barberPreference}`);

  try {
    // Configure Nodemailer transporter (Uses Ethereal / Test SMTP fallback if process.env.SMTP_HOST is not set)
    let transporter;
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Ethereal test account simulation
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: '"Modern Barber Shop Concierge" <no-reply@modernbarbershop.com>',
      to: process.env.OWNER_EMAIL || 'concierge@modernbarbershop.com',
      subject: `💈 New Client Inquiry: ${name} (${service})`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #121212; color: #f3f4f6; padding: 24px; border-radius: 8px;">
          <h2 style="color: #D4AF37; margin-top: 0;">New Barber Shop Client Inquiry</h2>
          <hr style="border-color: #2A2A2A;" />
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested:</strong> ${service}</p>
          <p><strong>Preferred Barber:</strong> ${barberPreference}</p>
          <p><strong>Message / Notes:</strong></p>
          <blockquote style="background: #1e1e1e; padding: 12px; border-left: 4px solid #D4AF37; color: #d1d5db;">
            ${message}
          </blockquote>
          <hr style="border-color: #2A2A2A;" />
          <p style="font-size: 12px; color: #9ca3af;">Sent automatically via The Modern Barber Shop API.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);

    console.log(`[EMAIL SENT] MessageId: ${info.messageId}`);
    if (previewUrl) {
      console.log(`[TEST EMAIL PREVIEW] ${previewUrl}`);
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully! The shop concierge will follow up promptly.',
      inquiryId: info.messageId,
      previewUrl: previewUrl || null
    });

  } catch (error) {
    console.error('[NODEMAILER ERROR]', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing inquiry notification.',
      error: error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`💈 The Modern Barber Shop API server listening on port ${PORT}`);
});
