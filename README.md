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

### Update 
To update `wdpn` you'll have to uninstall it globally with `npm uninstall -g wdpn` and proceed to install it globally with `npm install -g wdpn` to get the latest version. 
I'm current looking for a better way to implement dates, please make suggestions or open issues if you're aware of any!

### How to use
There are already instructions that is printed to your terminal when you're running the command, but here's a summary of them:

- the first thing you need to be done when generating a boilerplate for your project using `wdpn` is to type the package name: `wdpn folderName` where folderName refers to the name of the folder in which you want to store the boilerplate code that will be generated
- after running the above command `wdpn folderName` you'll notice that the cursor in your terminal is going to start blinking, this means that both TailwindCLI and Vite npm packages is being installed, **please do not close your terminal until the process is done**
- after the TailwindCSS and Vite packages are installed, you'll notice that your terminal is going to return back to the normal state.
- the next thing you want to do is to open another tab in your terminal and navigate to your project directory, when in your project directory, copy and paste the command to generate the TailwindCSS output file, which is given in the instructions when you use the command.
    - please keep this tab open as TailwindCSS is going to need to be rebuilt as you write more classes. there's no need to worry about rebuilding manually because it is already in the command that we copy and pasted, the rebuild will happen automatically, whenever we make a change.
- if you have VS Code installed, you can open the project with `code .` and run `npm run dev` to start the Vite server.

### React Tailwind 
Please ensure you have installed the npm package or cloned the script locally before running this!
To quickly create a react and tailwind project, use `wdpn --react-ts [project_name]`

### Important for windows user!
The code is open, please take your time and go through it if there are any doubts. 
There might be some persmission issues in terms of running the npm package, please ensure you run `wdpn` as in powershell as admin to solve any freezes that might happen while tyring to run the command.
 
## Feedback and Questions
- if there are any feedback, questions, or tips for improvements, I will be most delighted to hear them. Please open an issue or send me an email at varmac231@gmail.com. Thank you.
