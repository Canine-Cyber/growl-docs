import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export", // <=== enables static exports
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
