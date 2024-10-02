const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    env: {
        REACT_APP_API_URL: isProd ? 'igorpaslauski.github.io/portifolio' :  'http://localhost:3000',
    },
    basePath: isProd ? '/portifolio' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig