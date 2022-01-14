import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q2W4FS39HX" />

      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q2W4FS39HX');
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
