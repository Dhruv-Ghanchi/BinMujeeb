# Environment Variables Setup Instructions

## Where to Create the .env File

Create a file named `.env` in the **root directory** of your project (same folder where `package.json` is located).

**Location:** `C:\Users\Ghanchi\Desktop\BinMujeeb\.env`

## What to Add Inside the .env File

Copy and paste the following into your `.env` file, then replace the placeholder values with your actual Gmail credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

### Example:
```env
EMAIL_USER=dhruvghanchi.1@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

## How to Get Your Gmail App Password

**Important:** You cannot use your regular Gmail password. You need to generate an "App Password" from Google.

### Step-by-Step Instructions:

1. **Go to your Google Account**
   - Visit: https://myaccount.google.com/
   - Sign in with your Gmail account

2. **Enable 2-Step Verification** (if not already enabled)
   - Go to: Security → 2-Step Verification
   - Follow the prompts to enable it
   - This is required to generate App Passwords

3. **Generate an App Password**
   - Go to: Security → 2-Step Verification
   - Scroll down and click on "App passwords"
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter a name like "Bin Mujeeb Website"
   - Click "Generate"
   - Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)

4. **Copy the App Password**
   - Copy the 16-character password (you can include or remove spaces - both work)
   - Paste it as the value for `EMAIL_PASSWORD` in your `.env` file

## Final .env File Example

After setup, your `.env` file should look like this:

```env
EMAIL_USER=dhruvghanchi.1@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

## Important Notes

- ⚠️ **Never commit the `.env` file to Git** - it's already in `.gitignore`
- ✅ The `.env` file is for local development
- ✅ For production, you'll need to set these environment variables in your hosting platform (Vercel, Netlify, etc.)
- ✅ After creating the `.env` file, **restart your development server** for changes to take effect

## Testing

After setting up the `.env` file:
1. Restart your dev server: Stop it (Ctrl+C) and run `npm run dev` again
2. Go to the contact page
3. Fill out and submit the enquiry form
4. Check your email inbox (dhruvghanchi.1@gmail.com) for the enquiry

