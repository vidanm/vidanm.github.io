/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // distDir: 'build',
    webpack: (config) => {
        config.resolve.fallback = { fs: false,v8:false,module:false,perf_hooks:false };
        return config;  
    },
}

module.exports = nextConfig