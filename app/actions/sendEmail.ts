
'use server';

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // 1. Extract the data from the form
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const topic = formData.get('topic');
  const message = formData.get('message');

  try {
    // 2. Send the email using Resend
    const data = await resend.emails.send({
      // For testing, Resend requires you to use this specific 'from' address
      // Once you verify your actual domain in Resend later, you can change this.
      from: 'Doshinkai Dojo <onboarding@resend.dev>', 
      to: 'david.herascu@gmail.com', // Where you want to receive the email
      subject: `New Dojo Inquiry: ${topic}`,
      replyTo: email as string, // This lets you easily hit "Reply" to answer them!
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email' };
  }
}