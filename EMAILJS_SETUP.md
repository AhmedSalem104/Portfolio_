# EmailJS Configuration Guide

Your contact form is now configured to send emails using EmailJS. The current configuration uses temporary demo credentials.

## Current Configuration

The application is already configured with working EmailJS credentials:
- **Public Key**: `GswUlG0rT7KWxIDRB`
- **Service ID**: `service_bzzf1ha`
- **Template ID**: `template_l87kxci`
- **Recipient Email**: `ahmedsalem1041998@gmail.com`

## Important Notes

1. **The current credentials are temporary demo credentials** - They may stop working at any time
2. **For production use, you MUST create your own EmailJS account**

## How to Create Your Own EmailJS Account

### Step 1: Create Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Configure your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email (ahmedsalem1041998@gmail.com)

Example template:
```
From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `abc123XYZ_`)

### Step 5: Update Your Application

Open the file: `src/app/pages/contact/contact.ts`

Replace these values on lines 28, 32, and 33:

```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE');  // Line 28

const response = await emailjs.send(
  'YOUR_SERVICE_ID_HERE',   // Line 32
  'YOUR_TEMPLATE_ID_HERE',  // Line 33
  {
    from_name: this.formData.name,
    from_email: this.formData.email,
    message: this.formData.message,
    to_email: 'ahmedsalem1041998@gmail.com'
  }
);
```

## Testing

After updating the credentials:
1. Rebuild your application
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message

## Troubleshooting

- **Error 403**: Your Public Key is incorrect
- **Error 404**: Service ID or Template ID is incorrect
- **No email received**: Check your EmailJS dashboard logs
- **Spam folder**: Check if emails are going to spam

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 1 email service
- 2 email templates

For more emails, upgrade to a paid plan.
