import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import dotenv from 'dotenv'
import fs from 'fs'

// Load .env.local for the local API handler
if (fs.existsSync('.env.local')) {
  const envConfig = dotenv.parse(fs.readFileSync('.env.local'))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    inspectAttr(),
    react(),
    {
      name: 'api-handler',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/contact' && req.method === 'POST') {
            try {
              // Read the body
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                const { default: handler } = await import('./api/contact.js');
                const mockRes = {
                  status: (code: number) => ({
                    json: (data: any) => {
                      res.statusCode = code;
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                    }
                  })
                };
                const mockReq = {
                  method: 'POST',
                  body: JSON.parse(body)
                };
                await handler(mockReq as any, mockRes as any);
              });
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
