import nextra from "nextra";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/growl-docs/" : "",
  basePath: isProd ? "/growl-docs" : "",
  output: "export", // <=== enables static exports
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  staticImage: true,
});

export default withNextra(nextConfig);
