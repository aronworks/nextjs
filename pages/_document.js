import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q2W4FS39HX" />

          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q2W4FS39HX');
            `,
            }}
          />

          <Script
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho = $zoho || {};
                $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "2c0df8d00ad4b1f384a18fad43a284d9974be180e82b8b6600b3863c340d9ccbf036c7fbb3e2ecd5d6845f394185c368",
                values: {},
                ready: function() {}
                };
                var d = document;
                s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zoho.com/widget";
                t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
                d.write("<div id='zsiqwidget'></div>");

                $zoho.salesiq.ready = function(embedinfo) {
                $zoho.salesiq.floatwindow.fields({
                    "online": "",
                    "offline": "email,contactnumber"
                });
                $zoho.salesiq.chat.offline(function() {
                    $zoho.salesiq.customfield.add({
                    "name": "_default.email",
                    "hint": "Email Address",
                    "required": "true"
                    });
                });
                }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
