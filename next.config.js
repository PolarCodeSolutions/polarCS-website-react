/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.polarcode.solutions",
                port: "",
                pathname: "/images/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/images/**",
            },
        ],
    },
};

module.exports = nextConfig;