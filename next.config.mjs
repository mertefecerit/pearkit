import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'app/assets/scss')],
        prependData: `@import "variables.scss";`,
    },
};

export default nextConfig;
