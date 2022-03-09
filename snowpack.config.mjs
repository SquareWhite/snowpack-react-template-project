/** @type {import("snowpack").SnowpackUserConfig } */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isTest = process.env.NODE_ENV === 'test';

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  alias: {
    "@": "./src/"
  },
  plugins: [
    [
      'snowpack-plugin-copy',
      {
        patterns: [
          {
            source: path.join(__dirname, 'node_modules/leaflet/dist/images/*.png'),
            destination: path.join(__dirname, 'build/_snowpack/pkg/leaflet/dist/images'),
            options: {},
          }
        ],
      },
    ],
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          loadPath: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src/assets')
          ]
        }
      },
    ],
    '@snowpack/plugin-dotenv',
    ['@snowpack/plugin-webpack',
      {
        extendConfig(webpackConfig) {
          webpackConfig.target = ['es5', 'web'];
          return webpackConfig;
        }
      }
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { "match": "routes", "src": ".*", "dest": "/index.html" },
  ],
  optimize: {
    // bundle: true,
    // target: 'es6',
    // minify: true,
    // manifest: true,
    // treeshake: true,
    // splitting: true,
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {
    port: isTest ? 8001 : 8000,
    open: 'none',
  },
  buildOptions: { },
};
