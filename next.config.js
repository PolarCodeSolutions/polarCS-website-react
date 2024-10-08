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
                hostname: "polarcode.solutions", //www.polarcode.solutions
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
    output: 'export', // Legg til denne linjen for statisk eksport
};

module.exports = nextConfig;