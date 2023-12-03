import type { PwaOptions } from '@vite-pwa/vitepress'

export const pwa: Partial<PwaOptions> = {
  outDir: '.vitepress/dist',
  registerType: 'prompt',
  includeManifestIcons: false,
  manifest: {
    id: '/',
    name: 'Vue3 BaiduMap GL',
    short_name: 'Vue3-BaiduMap-GL',
    description:
      '基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件/hooks 库。',
    theme_color: '#ffffff',
    start_url: '/',
    lang: 'zh-CN',
    dir: 'ltr',
    orientation: 'natural',
    display: 'standalone',
    display_override: ['window-controls-overlay'],
    categories: ['development', 'developer tools'],
    icons: [
      {
        src: 'icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: 'screenshots/home.jpg',
        sizes: '1200x630',
        type: 'image/jpg',
        label: '基于百度地图 JavaScript GL 版 API 封装设计的 Vue3 组件/hooks 库。'
      }
    ],
    handle_links: 'preferred',
    launch_handler: {
      client_mode: ['navigate-existing', 'auto']
    },
    edge_side_panel: {
      preferred_width: 480
    }
  },
  experimental: {
    includeAllowlist: true
  },
  workbox: {
    cacheId: 'bundle-prefetch',
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2,json}'],
    globIgnores: ['*.cdr', '*.glb'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/raw\.githubusercontent\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'animated-images-cache',
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/img\.shields\.io\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'dynamic-images-cache',
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 60 * 60 * 24 // <== 1 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'jsdelivr-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7 // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/api\.github\.com\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'github-api-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 1 // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /\.glb$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: '3d-model-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}
