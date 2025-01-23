import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Alliance',
  description: 'Find your perfect health plan today with $0 premium options available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          id="retreaver-init"
          strategy="beforeInteractive"
        >
          {`
            (function() {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = 'https://dist.routingapi.com/jsapi/v1/retreaver.min.js';
              script.onload = function() {
                Retreaver.configure({
                  host: "api.routingapi.com",
                  prefix: "https"
                });
              };
              document.head.appendChild(script);
            })();
          `}
        </Script>
        <Script 
          src="https://trackdrive.com/assets/trackdrive-optimizer.js"
          strategy="beforeInteractive"
          id="trackdrive-optimizer"
        />
        <Script id="retreaver" strategy="beforeInteractive">
          {`
            function getUrlParam(name) {
              const urlParams = new URLSearchParams(window.location.search);
              return urlParams.get(name);
            }

            function hoistRetreaverNumber(number) {
              console.log('Retreaver number:', number);
              if (number && number.add_tags && number.get) {
                number.add_tags({
                  'redtrack_click_id': window.rtkClickID || '',
                  'caller_zip': localStorage.getItem("caller_zip") || '',
                  'publisher_id': getUrlParam("affid") || ''
                });

                console.log('Number details:', number.get());
                let numberPool = document.getElementById("numberpool");
                let retreaver_number = document.getElementById("retreaver-number");
                
                if (numberPool && retreaver_number && number.get && number.get().number) {
                  numberPool.href = \`tel:\${number.get().number}\`;
                  retreaver_number.textContent = number.get().formatted_number;
                } else {
                  console.error("Element with id 'numberpool' or 'retreaver-number' not found");
                }
              } else {
                console.error("Invalid number object or missing add_tags function");
              }
            }

            function requestRetreaverNumber() {
              if (typeof Retreaver !== 'undefined' && typeof Retreaver.Campaign !== 'undefined') {
                new Retreaver.Campaign({ 
                  campaign_key: 'bd376b8fa8c3c1efae7dfc8e19bb179e' 
                }).request_number({}, hoistRetreaverNumber);
              } else {
                console.error("Retreaver or Retreaver.Campaign is not defined");
              }
            }

            // Make function globally available
            window.requestRetreaverNumber = requestRetreaverNumber;
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(a,t,c,l,o,u,d){a['_genesysJourneySdk']=o;a[o]=a[o]||function(){
            (a[o].q=a[o].q||[]).push(arguments)},a[o].l=1*new Date();u=t.createElement(c),
            d=t.getElementsByTagName(c)[0];u.async=1;u.src=l;u.charset='utf-8';d.parentNode.insertBefore(u,d)
            })(window, document, 'script', 'https://apps.usw2.pure.cloud/journey/sdk/js/web/v1/ac.js', 'ac');
            ac('init', '4887627e-b8fc-46b5-bc61-67fd778d7c9a', { region: 'usw2' });
            ac('pageview');
          `
        }} />
        <Script id="redtrack" strategy="beforeInteractive">
          {`
            let src = 'https://qltw6.ttrk.io/track.js';
            let query = new URLSearchParams(window.location.search);
            
            let cmpid = query.get('rtkcmpid') || query.get('cmpid');
            
            if (cmpid) {
                let script = document.createElement('script');
                script.src = \`\${src}?rtkcmpid=\${cmpid}\`;
                document.body.appendChild(script);
            }
          `}
        </Script>

        {children}

        <Script id="trackdrive" strategy="afterInteractive">
          {`
            function waitForRtkClickID(callback, timeout = 3000, interval = 100) {
              const startTime = Date.now();
              
              const checkCondition = () => {
                const query = new URLSearchParams(window.location.search);
                if (window.rtkClickID || query.get("redtrack_click_id")) {
                    callback();
                } else if (Date.now() - startTime < timeout) {
                    setTimeout(checkCondition, interval);
                } else {
                    console.log("Timeout waiting for rtkClickID");
                    callback(); // Call the callback even if rtkClickID isn't set after the timeout
                }
              };
              
              checkCondition();
            }
            
            function executeTrackdrive() {
              var query = new URLSearchParams(window.location.search);
              var tokens = {
                call_type: "lander",
                redtrack_click_id: window.rtkClickID || query.get("redtrack_click_id"),
                sub10: "low_cost_health_insurance",
                lander: window.location.href.split('//')[1]
              };

              // First number replacement
              window.Trackdrive.Optimizer.replace_all({
                offer_token: "754a9936801e8ff256925b58a748521e", 
                tokens: tokens
              }, [
                ['(844) 934 0565', 'human_number'],
                ['+18449340565', 'plain_number']
              ]);

              // Second number replacement with same tracking data
              window.Trackdrive.Optimizer.replace_all({
                offer_token: "754a9936801e8ff256925b58a748521e", 
                tokens: tokens
              }, [
                ['(844) 934 0565', 'human_number'],
                ['+18449340565', 'plain_number']
              ]);
            }
            
            // Execute once both numbers are in the DOM
            waitForRtkClickID(executeTrackdrive);
          `}
        </Script>
      </body>
    </html>
  )
}

