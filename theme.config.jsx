export default {
    head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>growl docs</title>
          <meta
          name="description"
          content="Online safety through programmatic vigilance. Automatically flags and neutralizes suspicious webpages, helping protect users from phishing, fraud, and other digital scams. When a webpage is flagged as potentially suspicious, users must 'opt in' in order to interact in certain ways with the site, like inputting credit-card data, personal information, or otherwise sensitive content." 
          />
          <meta property="og:title" content="growl docs" />
          <meta property="og:description" content="Documentation for the Chrome browser extension growl." />
          {/* Favicon */}
          <link rel="shortcut icon" href="growl-logo-favicon-16.png"/>
        </>
      ),
    logo: (
        <>
          <img width="48" height="48" src="growl-logo-favicon-48.png"/>
          <span style={{ marginLeft: '.6em', fontWeight: 800 }}>
            growl docs
          </span>
        </>
      ),
    project: {
      link: 'https://github.com/Canine-Cyber/growl-docs'
    },
    docsRepositoryBase: 'https://github.com/Canine-Cyber/growl-docs',
    footer: {
        content: (
          <span>
            ©{' '}
            {new Date().getFullYear()} {' '}
            <a href="https://canine-cyber.com" target="_blank">
              Canine Cyber
            </a>
          </span>
        )
      }
    // ... other theme options
  }