import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Bstokens - MarketPlace</title>
          {/* Other head elements can be added here */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
          />
         <script src="https://cdn.userway.org/widget.js" data-account="fadSb1CsEX"></script>
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
