# react project erstellen
## 1. edit package.json: Add homepage 
"hompage" : "https://${Github USERNAME}.github.io/${FILENAME}",
_> das ist dann später der link

## 2. install github pages 
npm i gh-pages 

## 3. package.json in "scripts": 2 dinge hinzufügen
"pre-deploy": "npm run build",

 "deploy" : "gh-pages -d dist", (mit vite)
 "deploy" : "gh-pages -d build" (mit create-react-app),


## Terminal
npm run pre-deploy
npm run deploy 

## in github

Repo > Settings > pages:
Branch: gh-pages, SAVE!