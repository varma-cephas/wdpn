#! /usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';

const dirName = process.argv[2];

try{
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
    }
} catch (err){
    console.log(err)
}

fs.cp('/home/varmac/Documents/001AP/002/wdpn/theBoilerPlate', dirName, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      console.log('The following error occured because the path to the boilerplate is faulty, please check the README file for tips on how to fix this.')
    }
  });
  
console.log(chalk.whiteBright(boxen(`take a deep breath and cd into ${dirName}`, {padding: 2})))

