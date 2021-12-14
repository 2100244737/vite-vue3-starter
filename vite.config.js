/*
 * @Author: your name
 * @Date: 2021-12-13 10:10:51
 * @LastEditTime: 2021-12-13 11:42:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-starter\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
export default defineConfig({
  base: "./",
  alias: {
    '@': resolve('src')
  },
  css: {
    //css预处理 路径最后要加上;不然会报错
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";',
      },
    },
  },
  plugins: [vue()],
  // 配置需要使用的插件列表，这里将vue添加进去
  // 配置文件别名 vite1.0是/@/  2.0改为/@
  // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件

  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios'],
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  // 本地运行配置，及反向代理配置
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        target: 'http://192.168.99.223:3000',   //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
