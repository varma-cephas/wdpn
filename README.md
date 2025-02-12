# WDPN

### Introduction
wdpn is a tool that is used to easily generate boilerplates for simple web developement project, integrating TailwindCSS Cli and Vite. 

### Depencies
- NPM
- NodeJS
- TailwindCSS Cli
- Vite

### Installation guide
You can install wdpn via npm or clone the github repository and installing it from there.
To install via npm:

- ensure npm is installed and you are running node v20.11.1 or later with `node --v`
- install wdpn package with command `npm install -g wdpn` , which will install the package globally.
- after installation, close and reopen your terminal, and type the command `wdpn` to ensure that the package was installed correctly.

### How to use
There are already instructions that is printed to your terminal when you're running the command, but here's a summary of them:

- the first thing you need to be done when generating a boilerplate for your project using `wdpn` is to type the package name: `wdpn folderName` where folderName refers to the name of the folder in which you want to store the boilerplate code that will be generated
- after running the above command `wdpn folderName` you'll notice that the cursor in your terminal is going to start blinking, this means that both TailwindCLI and Vite npm packages is being installed, **please do not close your terminal until the process is done**
- after the TailwindCSS and Vite packages are installed, you'll notice that your terminal is going to return back to the normal state.
- the next thing you want to do is to open another tab in your terminal and navigate to your project directory, when in your project directory, copy and paste the command to generate the TailwindCSS output file, which is given in the instructions when you use the command.
    - please keep this tab open as TailwindCSS is going to need to be rebuilt as you write more classes. there's no need to worry about rebuilding manually because it is already in the command that we copy and pasted, the rebuild will happen automatically, whenever we make a change.
- if you have VS Code installed, you can open the project with `code .` and run `npm run dev` to start the Vite server.

 
## Feedback and Questions
- if there are any feedback, questions, or tips for improvements, I will be most delighted to hear them. Please open an issue or send me an email at varmac231@gmail.com. Thank you.
