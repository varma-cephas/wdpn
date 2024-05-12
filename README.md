## WDPN
wdpn is a tool that is used to easily generate boilerplates for simple web developement project. Imagine you have a concept to test out with html, css or javascript, instead of manually creating each file and adding your starter code to starting working, you can simply run the command `wdpn folderName` to generate the boiler plate. WDPN simply mean **web developer pen** btw

## Installation guide
You can install wdpn via npm or clone the github repository and installing it from there.
To install via npm:
    - ensure npm is installed and you are running node v20.11.1 or later
    - install wdpn package with command `npm install -g wdpn`
        - the command will install wdpn globally
    - it's possible that you might run into an error that says boilerplate not found, to fix this:
        - find the node parent directory which is usually in the home directory
        - look into the lib/node_modules folder, this is where npm usually installs the source code.
        - configure the pathname to the boilerplate in the main.mjs to fix this problem
To install via github:
    - clone the github repository
    - change the pathname in the main.mjs file to match the path of the boilerplate in your file system
    - run the command `npm install -g` in the cloned directory to install the wdpn package globally
