# Gmail App Password Setup for Contact Form

This guide will help you set up Gmail App Password for the Nodemailer contact form.

## Prerequisites

- A Gmail account
- 2-Step Verification enabled on your Google account

---

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification
5. You may need to verify with your phone number

---

## Step 2: Generate App Password

1. After enabling 2-Step Verification, go back to **Security**
2. Under "Signing in to Google", click **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled
3. You may need to sign in again
4. At the bottom, select:
   - **Select app**: Choose "Mail" or "Other (Custom name)"
   - If "Other", enter: "Voice of Gospel Contact Form"
   - **Select device**: Choose your device or "Other"
5. Click **Generate**
6. Google will show you a **16-character password** (e.g., `abcd efgh ijkl mnop`)
7. **Copy this password** - you won't be able to see it again!

---

## Step 3: Add to Environment Variables

### Local Development (.env.local)

Add these variables to your `.env.local` file:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL_TO=admin@voiceofgospel.com
```

**Important:**
- `GMAIL_USER`: Your Gmail address (the one you generated the app password for)
- `GMAIL_APP_PASSWORD`: The 16-character password (remove spaces)
- `CONTACT_EMAIL_TO`: Email address where contact form submissions will be sent

### Production (Vercel)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables:
   - `GMAIL_USER` = your-email@gmail.com
   - `GMAIL_APP_PASSWORD` = your-16-char-password
   - `CONTACT_EMAIL_TO` = admin@voiceofgospel.com
4. Click **Save**
5. Redeploy your application

---

## Step 4: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact page: http://localhost:3000/contact
3. Fill out the form and submit
4. Check both:
   - User's email (confirmation email)
   - Admin email (notification email)

---

## Email Templates

### User Confirmation Email
- **Subject**: "Thank you for contacting Voice of the Gospel"
- **Content**: Confirms receipt of their message
- **From**: Your Gmail address

### Admin Notification Email
- **Subject**: "New Contact Form Submission"
- **Content**: Contains user's name, email, and message
- **From**: Your Gmail address
- **Reply-To**: User's email address

---

## Security Notes

⚠️ **Important Security Tips:**

1. **Never commit** `.env.local` to Git (it's already in `.gitignore`)
2. **Never share** your app password publicly
3. **Use different passwords** for different apps
4. **Revoke unused passwords** in Google Account settings
5. **Keep app passwords secure** like regular passwords

---

## Troubleshooting

### "Invalid login" error
- Make sure 2-Step Verification is enabled
- Regenerate the app password
- Remove spaces from the password in .env

### "Less secure app access" error
- This is outdated - use App Passwords instead
- App Passwords work with 2-Step Verification

### Emails not sending
- Check your Gmail account isn't blocked
- Verify environment variables are set correctly
- Check Vercel logs for errors
- Make sure you're using the correct Gmail address

### Emails going to spam
- Add a proper "From" name
- Verify your domain (advanced)
- Ask recipients to whitelist your email

---

## Gmail Sending Limits

**Free Gmail Account:**
- 500 emails per day
- 100-150 emails per hour
- Sufficient for most contact forms

**Google Workspace:**
- 2,000 emails per day
- Higher limits available

---

## Alternative Email Services

If you need higher limits or better deliverability:

1. **SendGrid** (Free tier: 100 emails/day)
2. **Mailgun** (Free tier: 5,000 emails/month)
3. **AWS SES** (Pay as you go)
4. **Resend** (Free tier: 3,000 emails/month)

---

## Support

If you encounter issues:
1. Check the Vercel logs
2. Verify environment variables
3. Test with a different Gmail account
4. Check Google Account security settings

---

**Your contact form is now ready to send emails!** 📧
