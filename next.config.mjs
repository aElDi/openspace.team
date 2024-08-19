import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withIntl(nextConfig);
