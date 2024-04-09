/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['images.pexels.com'],
    },
    //experimental: { serverAction: true, }
    output: "export"
}

module.exports = nextConfig

//or
//remotePatterns :[
//        { images:
//                {
//                    protocol: 'https',
//                    hostname: 'images.pexels.com',
//                }
//        }
//    ]
//}
