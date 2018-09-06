// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import path from 'path'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
export const environment = {
  production: false,
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

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
