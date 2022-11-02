/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://localhost:55864" },
          {key:'Access-Control-Allow-Methods', value: 'POST'},
        ],
      },
    ]
  },
}
