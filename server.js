import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Log every request to help debug image loading
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve everything from the root directory
app.use(express.static(__dirname));

// Also explicitly serve the public folder in case files are stuck there
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for SPA-like behavior (optional but good)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Luxury Dental server running on http://0.0.0.0:${PORT}`);
});
