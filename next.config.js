/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    // output: 'export'
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/img/**',
          },
        ],
    },
}

module.exports = nextConfig
