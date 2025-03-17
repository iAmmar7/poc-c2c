const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Middleware to set headers for the host page
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Node.js');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://app.signalwire.com; " +
      "connect-src 'self' https://iammar7.signalwire.com https://fabric.signalwire.com wss://puc.signalwire.com; " +
      "style-src 'self' 'unsafe-inline' https://app.signalwire.com https://fonts.googleapis.com; " +
      'frame-src http://localhost:3000 https://1407-2a02-908-1b13-ffa0-ac8b-8cbb-90a5-aa06.ngrok-free.app',
  );
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Host page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
