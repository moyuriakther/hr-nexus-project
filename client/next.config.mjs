/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                pathname:"/**"
            }
        ]
    }
};

export default nextConfig;
