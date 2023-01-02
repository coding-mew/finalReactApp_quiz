# react project erstellen
## 1. edit package.json: Add homepage 
"hompage" : "https://${Github USERNAME}.github.io/${FILENAME}",
_> das ist dann später der link

## 2. install github pages 
npm i gh-pages 

## 3. package.json in "scripts": 2 dinge hinzufügen
"pre-deploy": "npm run build",
 "deploy" : "gh-pages -d build" (mit create-react-app),


## Terminal
npm run pre-deploy
npm run deploy 

## in github

Repo > Settings > pages:
Branch: gh-pages, SAVE!

____________
# VITE

## 1. edit package.json: Add homepage 
"hompage" : "https://${Github USERNAME}.github.io/${FILENAME}",
-> das ist dann später der link

## 2. in viteconfig.js: base: '</REPO/>'
export default defineConfig({
  base: "/REPONAME/",
  plugins: [react()],
});

## 2. install github pages 
npm i gh-pages --save-dev

## 3. package-json:
 "scripts": {
    "pre-deploy": "vite build",
    "deploy" : "gh-pages -d dist",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },

## 4. npm run deploy 
