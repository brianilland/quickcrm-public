This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

This app uses Microsoft Authentication Library (MSAL) in the browser to acquire an Azure AD access token. After a user signs in, MSAL caches tokens locally and attaches them to outgoing requests so the app can call protected APIs on the user's behalf. To configure MSAL, set the following variables:

- `NEXT_PUBLIC_MSAL_CLIENT_ID`: The Azure AD app (client) ID registered for this front-end.
- `NEXT_PUBLIC_MSAL_TENANT_ID`: The Azure AD tenant (directory) ID that issues tokens for the app.

To extend Dataverse access in the future, add additional scopes to the MSAL request configuration (for example, the Dataverse API scope for your environment) and wire the new scopes into your token acquisition flow. Keep the scopes centralized so new API permissions can be added without changing each call site.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
