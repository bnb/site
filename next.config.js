module.exports = {
  webpack(config) {
    if (!config.externals) {
      config.externals = {}
    }

    config.externals.path = 'path'
    return config
  }
}
