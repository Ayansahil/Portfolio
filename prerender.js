import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';
import chromium from '@sparticuz/chromium';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/about',
  '/experience',
  '/projects',
  '/portfolio',
  '/services',
  '/services/web-development',
  '/services/ui-ux-design',
  '/services/backend-development',
  '/services/performance',
  '/contact',
  '/blog',
];

async function prerender() {
  console.log('Starting prerender server...');
  const app = express();
  
  // Serve static files from the dist directory
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Fallback for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  const server = app.listen(4000, async () => {
    console.log('Prerender server running on port 4000');
    
    console.log('Launching puppeteer...');
    
    // Vercel build environment check
    const isVercel = process.env.VERCEL === '1';

    const browser = await puppeteer.launch({
      args: isVercel ? chromium.args : [],
      executablePath: isVercel ? await chromium.executablePath() : undefined,
      headless: true,
    });
    const page = await browser.newPage();
    
    // Set a consistent viewport
    await page.setViewport({ width: 1280, height: 720 });

    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      const url = `http://localhost:4000${route}`;
      
      // Go to the page and wait for it to be fully loaded
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // Wait an extra second for Framer Motion / GSAP animations to settle
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get the full HTML
      const html = await page.content();
      
      // Determine the output path
      let outDir = path.join(__dirname, 'dist');
      if (route !== '/') {
        outDir = path.join(__dirname, 'dist', route);
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      const outFile = path.join(outDir, 'index.html');
      fs.writeFileSync(outFile, html);
      console.log(`Saved: ${outFile}`);
    }
    
    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
