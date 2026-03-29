# PayPal Integration Setup Guide

Complete step-by-step guide to integrate PayPal donations/payments into your Voice of the Gospel website.

---

## 📋 **What You'll Need**

1. **PayPal Business Account** (or Personal account with receiving enabled)
2. **PayPal Developer Account** (free)
3. **Client ID and Secret Key** (from PayPal Developer Dashboard)
4. **Environment Variables** (for Next.js)
5. **PayPal SDK** (npm package)

---

## 🎯 **Step 1: Create PayPal Business Account**

### **Option A: Already Have PayPal Account**
1. Log in to your existing PayPal account
2. Go to **Settings** → **Account Settings**
3. Upgrade to **Business Account** (if needed)
4. Complete business verification

### **Option B: Create New Business Account**
1. Go to: https://www.paypal.com/business
2. Click **"Sign Up"**
3. Choose **"Business Account"**
4. Fill in business information:
   - Business name: "Voice of the Gospel Tabernacle"
   - Business type: "Non-profit organization" or "Religious organization"
   - Email address
   - Password
5. Verify email address
6. Complete business profile

**Important:** Use the email where you want to receive donation notifications.

---

## 🔧 **Step 2: Create PayPal Developer Account**

1. Go to: https://developer.paypal.com/
2. Click **"Log in to Dashboard"**
3. Log in with your PayPal account credentials
4. Accept Developer Terms of Service

---

## 🔑 **Step 3: Get API Credentials**

### **Sandbox Credentials (Testing):**

1. In PayPal Developer Dashboard: https://developer.paypal.com/dashboard/
2. Click **"Apps & Credentials"** in top menu
3. Make sure **"Sandbox"** tab is selected
4. Click **"Create App"** button
5. Fill in details:
   - **App Name**: "Voice of Gospel Donations"
   - **App Type**: "Merchant"
6. Click **"Create App"**
7. Copy your credentials:
   - ✅ **Client ID** (starts with `A...`)
   - ✅ **Secret** (click "Show" to reveal)

### **Live Credentials (Production):**

1. In PayPal Developer Dashboard
2. Click **"Apps & Credentials"**
3. Switch to **"Live"** tab
4. Click **"Create App"**
5. Fill in same details as sandbox
6. Click **"Create App"**
7. Copy your **LIVE** credentials:
   - ✅ **Client ID**
   - ✅ **Secret**

**⚠️ Important:** Keep these credentials secret! Never commit them to Git.

---

## 📦 **Step 4: Install PayPal SDK**

Run this command in your project:

```bash
npm install @paypal/react-paypal-js
```

---

## 🔐 **Step 5: Add Environment Variables**

### **Local Development (.env.local):**

Add these variables:

```env
# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-sandbox-client-id
PAYPAL_CLIENT_SECRET=your-sandbox-secret
PAYPAL_MODE=sandbox
```

### **Production (Vercel):**

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_PAYPAL_CLIENT_ID = your-live-client-id
PAYPAL_CLIENT_SECRET = your-live-secret
PAYPAL_MODE = live
```

**Note:** `NEXT_PUBLIC_` prefix makes it available in browser (safe for Client ID only).

---

## 💰 **Step 6: Choose Integration Type**

### **Option A: Donation Button (Simple)**
- One-time donations
- Fixed or custom amounts
- Quick setup
- **Best for:** Simple donation page

### **Option B: Smart Payment Buttons (Advanced)**
- One-time or recurring donations
- Multiple payment methods
- Customizable amounts
- **Best for:** Full-featured donation system

### **Option C: Subscription Buttons**
- Monthly/yearly recurring donations
- Membership tiers
- Automatic billing
- **Best for:** Sustaining donors program

---

## 🎨 **Step 7: Implementation Options**

### **A. Simple Donation Button**

**What you get:**
- "Donate with PayPal" button
- Fixed or custom amounts
- Quick checkout
- Email receipts

**Use case:** Basic donation page

---

### **B. Custom Donation Form**

**What you get:**
- Custom amount input
- Donor information form
- Purpose selection (General, Building Fund, Missions, etc.)
- Thank you page
- Email notifications

**Use case:** Professional donation experience

---

### **C. Recurring Donations**

**What you get:**
- Monthly/yearly options
- Subscription management
- Automatic renewals
- Donor dashboard

**Use case:** Sustaining donors program

---

## 📧 **Step 8: Email Notifications**

PayPal automatically sends:
- ✅ Payment confirmation to donor
- ✅ Payment notification to you
- ✅ Monthly statements

You can also integrate with Nodemailer for custom emails.

---

## 🧪 **Step 9: Testing**

### **Sandbox Testing:**

1. Use **Sandbox** credentials in `.env.local`
2. Create test accounts:
   - Go to: https://developer.paypal.com/dashboard/accounts
   - Click "Create Account"
   - Create a **Personal** account (buyer)
   - Note the email and password
3. Test donations:
   - Use sandbox buyer account
   - Make test payments
   - Check sandbox dashboard for transactions

### **Test Credit Cards (Sandbox):**
```
Card Number: 4032039974619582
Expiry: Any future date
CVV: Any 3 digits
```

---

## ✅ **Step 10: Go Live**

1. Switch environment variables to **Live** mode
2. Use **Live** Client ID and Secret
3. Test with real small amount ($1)
4. Verify payment received in PayPal account
5. Check email notifications work
6. Deploy to production

---

## 🔒 **Security Best Practices**

### **Do:**
- ✅ Use environment variables
- ✅ Keep secrets server-side only
- ✅ Use HTTPS in production
- ✅ Validate payments server-side
- ✅ Log all transactions

### **Don't:**
- ❌ Commit credentials to Git
- ❌ Expose secret in client code
- ❌ Trust client-side validation only
- ❌ Skip transaction verification

---

## 💡 **PayPal Features Available**

### **Payment Methods:**
- PayPal Balance
- Credit/Debit Cards
- Bank Accounts
- PayPal Credit
- Venmo (US only)

### **Currencies:**
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- CAD (Canadian Dollar)
- And 100+ more

### **Transaction Types:**
- One-time payments
- Recurring subscriptions
- Invoicing
- Refunds
- Partial refunds

---

## 📊 **PayPal Fees**

### **Standard Rates (US Non-Profit):**
- **Domestic:** 2.2% + $0.30 per transaction
- **International:** 4.4% + fixed fee
- **Micropayments:** 5% + $0.05 (for transactions under $10)

### **Reduced Rates:**
- Apply for **Non-Profit Rate** (1.99% + $0.49)
- Requires 501(c)(3) status
- Apply at: https://www.paypal.com/us/webapps/mpp/nonprofits

---

## 🎯 **Recommended Setup for Church**

### **1. Donation Page with:**
- Custom amount input
- Preset amounts ($25, $50, $100, $250)
- Purpose dropdown (General, Building, Missions)
- Donor information (optional)
- One-time or monthly options

### **2. Integration Points:**
- Dedicated `/donate` page
- Donation button in navigation
- Donation widget in footer
- Event-specific donations

### **3. Features:**
- Thank you page after donation
- Email receipt to donor
- Email notification to admin
- Transaction logging
- Donor management (optional)

---

## 📝 **Environment Variables Summary**

```env
# PayPal Sandbox (Development)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=sandbox-client-id
PAYPAL_CLIENT_SECRET=sandbox-secret
PAYPAL_MODE=sandbox

# PayPal Live (Production)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=live-client-id
PAYPAL_CLIENT_SECRET=live-secret
PAYPAL_MODE=live

# Optional: Webhook for notifications
PAYPAL_WEBHOOK_ID=your-webhook-id
```

---

## 🔗 **Important Links**

- **PayPal Business:** https://www.paypal.com/business
- **Developer Dashboard:** https://developer.paypal.com/dashboard/
- **API Documentation:** https://developer.paypal.com/docs/api/overview/
- **React SDK Docs:** https://paypal.github.io/react-paypal-js/
- **Non-Profit Rates:** https://www.paypal.com/us/webapps/mpp/nonprofits
- **Sandbox Accounts:** https://developer.paypal.com/dashboard/accounts

---

## 🆘 **Troubleshooting**

### **"Invalid Client ID" Error:**
- Check you're using correct mode (sandbox vs live)
- Verify Client ID is correct
- Make sure `NEXT_PUBLIC_` prefix is used

### **"Payment Failed" Error:**
- Check PayPal account is verified
- Verify business account is active
- Check receiving limits aren't reached

### **Webhook Not Working:**
- Verify webhook URL is correct
- Check webhook is enabled
- Test webhook in PayPal dashboard

### **Sandbox Not Working:**
- Create fresh sandbox accounts
- Clear browser cache
- Use incognito mode
- Check sandbox status: https://www.paypal-status.com/

---

## 📱 **Mobile Optimization**

PayPal automatically provides:
- ✅ Mobile-responsive checkout
- ✅ Touch-optimized buttons
- ✅ Mobile app integration
- ✅ One-touch payments

---

## 🎁 **Additional Features**

### **Donation Receipts:**
- Automatic PayPal receipts
- Custom email receipts via Nodemailer
- PDF receipt generation (optional)
- Tax-deductible statements

### **Donor Management:**
- Track recurring donors
- Donation history
- Donor analytics
- Thank you campaigns

### **Reporting:**
- PayPal dashboard reports
- Export to CSV/Excel
- Custom analytics
- Tax reporting

---

## ✨ **Next Steps After Setup**

1. ✅ Create PayPal Business Account
2. ✅ Get API credentials (Sandbox + Live)
3. ✅ Install PayPal SDK
4. ✅ Add environment variables
5. ✅ Build donation page
6. ✅ Test in sandbox
7. ✅ Go live with real credentials
8. ✅ Monitor first transactions
9. ✅ Set up reporting
10. ✅ Promote donation page

---

**Ready to accept donations! Let me know which integration type you prefer and I'll build it for you.** 💰✨
