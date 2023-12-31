/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname:'img.freepik.com',
        port: '',
        pathname: '/vetores-gratis/**',
      },
      {
        protocol: 'https',
        hostname:'www.youtube.com',
        port: '',
        pathname: '/img/desktop/**',
      }
    ]
  }
  // https://www.youtube.com/img/desktop/yt_1200.png
}

// https://img.freepik.com/vetores-gratis/coworking-eficaz-uniao-de-colegas-colaboracao-dos-trabalhadores-regulamentacao-do-trabalho-em-equipe-aumento-da-eficiencia-do-fluxo-de-trabalho-mecanismo-de-organizacao-dos-membros-da-equipe_335657-1623.jpg?w=2000

module.exports = nextConfig
