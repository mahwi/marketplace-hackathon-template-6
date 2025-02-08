/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns : [
      {
        protocol : 'http', 
      hostname:'cdn.sanity.io'}
    ],
  },  
};

export default nextConfig;
