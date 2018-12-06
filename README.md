# Caption_it Website 

## Pre Conditions

In Order to instantiate the Caption_it website, we need to make sure our local machine has Node.js and Grunt.js as dependencies.
If you don't have those, you can use a command line in linux/Mac OS to install them, or download Node from their website and its package manager (npm).

Before you try to install node, please verify whether you have it installed yet by executing the following test command:

```sh
$ node -v
```

The version should be higher than v0.10.32.

__For Windows Users & MacOS Users__ 
Download latest stable version from https://nodejs.org/en/.

__For Linux Users__ Please execute the following command on your terminal window:

```sh
$ sudo apt-get install nodejs npm
```
Once you have node and npm installed, you need to make sure you have grunt as well, please execute the command to install it in your local machine

```sh
$ sudo npm install grunt-cli -g
```

## Installation

First of all we need to use the npm to download all dependencies specified in `package.json`.  To do that please execute the command on the project root directory.
```sh
$ sudo npm install
```

## Run the Node Server

The Gorilla Interview Excercise is built on the top of the assemble architecture.  Assemble provides with a grunt shortcut to initiate our node server on port 8094.  Please view `Gruntfile.js` on line 23 if you wish to change that port.
The grunt task to run the server is `server`, so you only need to execute the command:

```sh
$ grunt server
```
And voilà...

## CSS Preprocessor

`Gruntfile.js` has been configured to compile LESS into CSS.  A Grunt watch task is executed when running the Node Server with the above mentioned command.  If you wish to use a different CSS preprocessor you may edit the `Gruntfile.js` and `package.json` and install the required Grunt dependancies.

## Git

Please do not include the /build and the /node_modules folders to the GIT repository, those are already included in the `.gitignore` file to avoid flooding the repository with generated code.

# Adding Changes

Please add changes to branches and do not include the nodemodules file created when installing grunt. Use the airbnb styling guide as reference and BEM.

# Resources

https://css-tricks.com/bem-101/
https://github.com/airbnb/javascript/blob/master/README.md#comparison-operators--equality


