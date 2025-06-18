import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
 server: {
  proxy: {
    '/api': {
      target: 'http://localhost/progetti/scuolaribelle',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/backend/api'),
      configure: (proxy) => {
        proxy.on('proxyReq', (proxyReq, req) => {
          const auth = req.headers['authorization'];
          if (auth) {
            proxyReq.setHeader('Authorization', auth);
          }
        });
      },
    },
  },
}

});
