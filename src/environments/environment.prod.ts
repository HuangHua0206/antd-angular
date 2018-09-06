import path from 'path'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
export const environment = {
  production: true,
  alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      // 添加路径简写配置
      'api': resolve('src/api'),
      'assets': resolve('src/api'),
      'components': resolve('src/components'),
      'config': resolve('src/config'),
      'directive': resolve('src/directive'),
      'filters': resolve('src/filters'),
      'icons': resolve('src/icons'),
      'lang': resolve('src/lang'),
      'mock': resolve('src/mock'),
      'router': resolve('src/router'),
      'store': resolve('src/store'),
      'styles': resolve('src/styles'),
      'utils': resolve('src/utils'),
      'views': resolve('src/views'),
      'static': resolve('src/static'),
    }
};
