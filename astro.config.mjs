import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
    cookieconsent({
      // ...
      gui_options: {
        consent_modal: {
          layout: "box",
          position: "top center",
          transition: "slide",
        },
        settings_modal: {
          layout: "box",
          position: "left",
          transition: "right",
        },
      },

      onAccept: function (cookie) {
        //console.log("onAccept fired ...");
        if (cc.allowedCategory("analytics_cookies")) {
          cc.loadScript(
            "https://www.google-analytics.com/analytics.js",
            function () {
              ga("create", "", "auto");
              ga("send", "pageview");
              //console.log("analytics.js loaded");
            }
          );
        }
      },

      onChange: function (cookie) {
        //console.log("onChange fired ...");
        // do something ...
      },

      languages: {
        en: {
          consent_modal: {
            title: "Cookies & Privacy Policy",
            description: `Enabling cookies allows you to use our website to its full extent and to personalize your experience on our sites. They tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches and give us insights into user behavior so we can improve our communications with you. <a aria-label="Cookies Policy-Privacy Policy"  href="/cookies/">Cookies Policy-Privacy Policy</a>`,
            primary_btn: {
              text: "Accept all Cookies",
              role: "accept_all", //'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: "Customise Cookies",
              role: "accept-custom", //'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: "<div>Cookie settings</div>",
            save_settings_btn: "Save settings",
            accept_all_btn: "Accept all",
            cookie_table_headers: [
              { col1: "Name" },
              { col2: "Domain" },
              { col3: "Expiration" },
              { col4: "Description" },
              { col5: "Privacy policy" },
            ],
            blocks: [
              {
                title: "Cookie usage",
                description:
                  'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details about cookies and how we use them, read the full <a href="../privacy-policy.html" class="cc-link">cookie policy</a>.',
              },
              {
                title: "Strictly necessary cookies",
                description:
                  "These cookies are essential for the proper functioning of our website. Without these cookies, the website would not work properly.",
                toggle: {
                  value: "necessary_cookies",
                  enabled: true,
                  readonly: true, //cookie categories with readonly=true are all treated as "necessary cookies"
                },
              },
              {
                title: "Preferences cookies",
                description:
                  "These cookies allow the website to remember the choices you have made in the past.",
                toggle: {
                  value: "preferences_cookies", //there are no default categories => you specify them
                  enabled: true,
                  readonly: false,
                },
              },
              {
                title: "Analytics cookies",
                description:
                  "These cookies cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.",
                toggle: {
                  value: "analytics_cookies",
                  enabled: false,
                  readonly: false,
                },
                cookie_table: [
                  {
                    col1: "_ga",
                    col2: "google.com",
                    col3: "2 years",
                    col4: "Permanent cookie used to distinguish users.",
                    col5: '<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>',
                  },
                  {
                    col1: "_gat",
                    col2: "google.com",
                    col3: "1 minute",
                    col4: "Permant Cookie used to throttle request rate. If Google Analytics is deployed via Google Tag Manager, this cookie will be named _dc_gtm_<property- id>.",
                    col5: '<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>',
                  },
                  {
                    col1: "_gid",
                    col2: "google.com",
                    col3: "1 day",
                    col4: "Permanent Cookie used to distinguish users.",
                    col5: '<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>',
                  },
                ],
              },
              {
                title: "More information",
                description:
                  'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="mailto:privacy@skylands.io">contact me</a>.',
              },
            ],
          },
        },
      },
    }),
  ],
  styles: `
    consent_modal {
  width: 100% !important;
}
  `,
});
