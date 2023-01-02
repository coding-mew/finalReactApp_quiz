# react project erstellen
## 1. edit package.json: Add homepage 
"hompage" : "https://github.com/${USERNAME}.github.io/${FILENAME}",

## 2. install github pages 
npm i gh-pages 

## 3. package.json in "scripts": 2 dinge hinzufügen
"pre-deploy": "npm run build",
 "deploy" : "gh-pages -d build",

## Terminal

npm run pre-deploy
