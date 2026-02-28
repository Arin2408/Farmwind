import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const data = req.body;
        const { name, firstName, lastName, email, subject: customSubject } = data;

        // Determine a name if it's split into firstName/lastName
        const displayName = name || `${firstName || ''} ${lastName || ''}`.trim() || 'Unknown User';

        // Email validation (simple regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Format all other fields for the email body
        const excludedFields = ['subject', '_to'];
        const formattedFields = Object.entries(data)
            .filter(([key]) => !excludedFields.includes(key))
            .map(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                return `<p><strong>${label}:</strong> ${value}</p>`;
            })
            .join('');

        await transporter.sendMail({
            from: `"Website Form" <${process.env.SMTP_USER}>`,
            to: 'info@farmwind.de',
            subject: customSubject || `New Message from ${displayName}`,
            html: `
        <h2>New Submission</h2>
        ${formattedFields}
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Email error details:', error);
        return res.status(500).json({
            success: false,
            message: `Email failed to send: ${error.message || 'Unknown error'}`,
        });
    }
}
