## POC for Click-to-Call

This repository is a **proof of concept** (POC) for the SignalWire Click-to-Call widget.

### Overview
The repo consists of:

- A host – Simulates a third-party website.
- An embeddable code – Injected into the host to mimic how an embedded widget behaves on platforms like Google Sites, Tumblr, etc.

### Objective
The purpose of this POC is to analyze why the embeddable code cannot access the user’s microphone and camera unless the host explicitly allows it via Content Security Policy (CSP).

This will help identify potential limitations when integrating a Click-to-Call widget on third-party platforms.

### How to run

1. Start the Host Server
```sh
cd host
npm install
npm run dev
```

This starts the host server on `http://localhost:3000`.

2. Start the Embed Server
In a new terminal window, run:

```sh
cd embed
npm install
npm run dev
```

This starts the embeddable widget on `http://localhost:30001`.

### Testing the Integration
- Open `http://localhost:3000` in your browser.
- The embeddable code from `embed/` should load within the host page.
