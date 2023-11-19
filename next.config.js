/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
