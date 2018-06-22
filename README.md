# next-analytics

Next.js HOC to integrate analytics tools (GA and FBQ).

## Usage

Install it

```bash
yarn add next-analytics
```

Import it inside your `pages/_app.js`;

```js
import withAnalytics from "next-analytics";
```

Wrap your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E) with it

```js
// pass an object with your Google Analytics and/or Facebook Pixel code as first argument
export default withAnalytics({ ga: "UA-xxxxxxxxx-1", fbq: "139xxxxxxxxx3" })(MyApp);
```

That's it, now when the user access a page it will log a pageview to Google Analytics and/or Facebook Pixel, each page change after that will also trigger a pageview on GA and/or FBQ.

> **Note**: This module only applies the HOC next-ga or next-fbq if the code is sent when instancing

## Credits

Thanks to [@joecohens](https://github.com/joecohens) for creating [next-fbq](https://github.com/joecohens/next-fbq).
