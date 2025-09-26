# Google Analytics Setup Instructions

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account for your website
5. Set up a property for your website (www.azanmovers.com)
6. Choose "Web" as your platform

## Step 2: Get Your Measurement ID

1. In your Google Analytics property, go to "Admin" (gear icon)
2. Under "Property", click on "Data Streams"
3. Click on your web stream
4. Copy your "Measurement ID" (it looks like G-XXXXXXXXXX)

## Step 3: Add Environment Variable

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## Step 4: Deploy

The Google Analytics component is already integrated into your layout. Once you add the environment variable and deploy, analytics will start tracking.

## Features Included

- ✅ Google Analytics 4 (GA4) integration
- ✅ Automatic page view tracking
- ✅ Enhanced ecommerce ready
- ✅ Privacy-compliant implementation
- ✅ Works alongside Vercel Analytics

## Verification

After deployment, you can verify analytics is working by:
1. Visiting your website
2. Checking Google Analytics Real-time reports
3. Looking for your visits in the dashboard

## Privacy Note

This implementation respects user privacy and follows GDPR guidelines. The analytics script only loads after the page is interactive.
