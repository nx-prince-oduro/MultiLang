module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["default", "en-US", "en-gb", "es", "fr-fr", "de-de"],
    defaultLocale: "en-US",
    localeDetection: true,
    domains: [
      {
        domain: "exampleigus.com",
        defaultLocale: "en-US",
      },
      {
        domain: "exampleigus.de",
        defaultLocale: "de-de",
      },
      {
        domain: "exampleigus.fr",
        defaultLocale: "fr-fr",
      },
    ],
  },
  trailingSlash: true,
};
