
// 开发环境地址
const config: Record<string, string> = {
  nextjs11: 'http://localhost:4002',
  nuxtjs2: 'http://localhost:4003',
  react16: 'http://localhost:4004',
  react17: 'http://localhost:4005',
  sidebar: 'http://localhost:4006',
  vite: 'http://localhost:4007',
  vue2: 'http://localhost:4008',
  vue3: 'http://localhost:4009',
  webpack5: 'http://localhost:4010'
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin
  })

  // 在部署后，nextjs11和nuxtjs2依然和开发环境保持一致，绑定5005和6005端口，这里单独处理
  const { protocol, hostname } = window.location
  config.nextjs11 = `${protocol}//${hostname}:5005`
  config.nuxtjs2 = `${protocol}//${hostname}:6005`
}

export default config
