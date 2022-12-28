## Bitcoin Block Height Chrome Extension

See what the current block height is. "Tick tock, next block."

## Publish Extension
- [How to publish in the chrome store](https://developer.chrome.com/docs/webstore/publish/)
- [How to submit a firefox add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Helpful Tips for Starting a Next.js Chrome Extension](https://css-tricks.com/nextjs-chrome-extension-starter/)

## Rendering
- Using [client-side data rendering](https://nextjs.org/docs/basic-features/data-fetching/client-side)
- Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently
- The bitcoin block height needs to update frequently

### Updating at the component level
- When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes
- Note that using client-side data fetching can affect the performance of your application and the load speed of your pages. This is because the data fetching is done at the time of the component or pages mount, and the data is not cached.

## Data Fetching
- [Using SWR hook for data fetching](https://swr.vercel.app/)

## Framework
- [NextJS](https://nextjs.org/learn/foundations/from-javascript-to-react)

## How it works
When a user visits a web page, the server returns an HTML file to the browser. The browser then reads the HTML and constructs the DOM

- React is declarative programming – telling the computer what we want rather than giving it step-by-step instructions (imperative)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
