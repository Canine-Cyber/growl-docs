import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
