#! /usr/bin/env node

import child_process from "child_process";
import fs from "fs"
import os from "os"

let directoryName= process.argv[2] !== undefined?process.argv[2]:"";
const getOs = os.platform();

if(directoryName===""){
    console.log("Please enter the name of your project as a cli argument")
    process.exit(1)
}else{
    let dirNameArr=directoryName.split("");
    dirNameArr[0]=dirNameArr[0].toUpperCase();
    directoryName=dirNameArr.join("")
}

const currentWorkingPath=process.cwd();
const newProjectPath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}`:`${currentWorkingPath}/${directoryName}`;
const newHTMLBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\index.html`:`${currentWorkingPath}/${directoryName}/index.html`;
const newCSSTailwindBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\css\\input.css`:`${currentWorkingPath}/${directoryName}/css/input.css`;
const newJSBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\js\\main.js`:`${currentWorkingPath}/${directoryName}/js/main.js`;
const newFaviconBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\assets\\favicon.svg`:`${currentWorkingPath}/${directoryName}/assets/favicon.svg`;
const newtailwindConfigBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\tailwind.config.js`:`${currentWorkingPath}/${directoryName}/tailwind.config.js`;
const newJSONConfigBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\package.json`:`${currentWorkingPath}/${directoryName}/package.json`;
const newGitIgnoreBoilerPlateFilePath= getOs==="win32"?`${currentWorkingPath}\\${directoryName.toLowerCase()}\\.gitIgnore`:`${currentWorkingPath}/${directoryName}/.gitignore`;


const htmlBoilerPlate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${directoryName}</title>

    <link rel="icon" type="image/svg" href="./assets/favicon.svg">
    <link rel="stylesheet" href="./css/output.css">

    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!-- google font -->

    <!-- font awesome -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"> -->
    <!-- font awesome -->

</head>
<body>
    <h1 class="text-3xl font-bold underline">Hello World</h1>

    <script src="./js/app.js"></script>
</body>
</html>
`;

const inputCSSTailwindBoilerPlate=`@import "tailwindcss"`;

const tailwindConfigBoilerPlate=`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

const jsonConfigViteBoilerPlate=`{
  "name": "${directoryName.toLowerCase()}",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
     "dev": "vite"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
`;

const gitIgnoreBoilerPlate=`node_modules`

const defaultBrowserIcon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/></svg>`;

try{
    console.log("\nPlease wait a couple second while your code is being generated\n");
    fs.mkdirSync(newProjectPath);
    process.chdir(newProjectPath);
    fs.mkdirSync("css");
    fs.mkdirSync("js");
    fs.mkdirSync("assets")

    fs.writeFileSync(newHTMLBoilerPlateFilePath, htmlBoilerPlate);
    fs.writeFileSync(newCSSTailwindBoilerPlateFilePath,inputCSSTailwindBoilerPlate);
    fs.writeFileSync(newJSBoilerPlateFilePath, "");
    fs.writeFileSync(newFaviconBoilerPlateFilePath, defaultBrowserIcon);
    fs.writeFileSync(newtailwindConfigBoilerPlateFilePath, tailwindConfigBoilerPlate);
    fs.writeFileSync(newJSONConfigBoilerPlateFilePath, jsonConfigViteBoilerPlate);
    fs.writeFileSync(newGitIgnoreBoilerPlateFilePath, gitIgnoreBoilerPlate);

    console.log("Done generating\n");
    console.log("Your code was generated successfully, please wait now as we set up your boilerplate tailwind project\n");

    child_process.exec("npm init -y");
    child_process.exec("npm install -D  tailwindcss vite");

    console.log("\nTailwindCSS Cli and Vite is installing. PLEASE, DO NOT CLOSE YOUR TERMINAL WINDOW UNTIL THE PROCESS IS DONE!\n");
    console.log(`\n1.When done. please cd into ${directoryName.toLowerCase()}\n`);
    console.log(`\n2. Please open a seperate tab in your terminal, make sure that you are in the same project directory and run the mentioned below to generate the output.css file and start using tailwind \n npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch \n`);

    console.log("Please wait as the packages is install.");
    console.log("\nRun npm run dev to start the vite server\n");
}catch(error){
    console.log("\nThe directory mentioned for you project name already exist, please try another one.\n")
}

