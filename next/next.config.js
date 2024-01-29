/** @type {import('next').NextConfig} */
const fs = require('fs')
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    webpack: (config) => {
        config.resolve.symlinks = false
        if (fs.existsSync('./yalc.lock')) {
            // eslint-disable-next-line no-param-reassign
            config.cache.buildDependencies.frontends = ['./yalc.lock']
        }

        return config
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['localhost', 'svirina.education'],
    },
}

module.exports = nextConfig