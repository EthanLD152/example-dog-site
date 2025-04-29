'use server'

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Use formData in the function
    console.log('Processing form submission:', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}

// Either use the data parameter or remove the function if not needed
export async function sendEmail(data: FormData) {
  const formEntries = Object.fromEntries(data.entries());
  console.log('Processing email with data:', formEntries);
  // Add your email sending logic here
} 