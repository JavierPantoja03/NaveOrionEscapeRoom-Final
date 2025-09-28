
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/escape-room",
    "route": "/Program%20Files/Git"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/escape-room"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/que-es-pensamiento-computacional"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/introduccion-chikos-net"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/actividad-1"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/actividad-2"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/actividad-3"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/actividad-4"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/actividad-5"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/descubriste-la-palabra"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/escape-room",
    "route": "/Program%20Files/Git/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10145, hash: '6b324c78607e9c75724565b9fd8ce5ddececa9809f8512584dbee6dd29ccb179', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: '557a82714f4c9242e5725610a3121d14d85044450b3d15ba0d751a5f0ddb500d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ESWVA7V4.css': {size: 240094, hash: 'LVsWGCcXeJQ', text: () => import('./assets-chunks/styles-ESWVA7V4_css.mjs').then(m => m.default)}
  },
};
