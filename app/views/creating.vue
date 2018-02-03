div
  :marked
    # Creating a New Pingado Project
    
    The best way to read this guide is to follow it step by step. All steps are essential to run this example application and no additional code or steps are needed.

    By following along with this guide, you'll create a Pingado project called blog, a (very) simple weblog. Before you can start building the application, you need to make sure that you have Pingado itself installed.

    ## Installing Pingado

    If you dont have node installed, and is using a UNIX system, we suggest you to use the Node Version Manager, or `nvm`:

        $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash


    ### Add the source line to your profile 

    Profiles are scritps that setup environment variables. Generally, these files are located at your home folder as hidden file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`). We need to load environment variables needed by nvm:

        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
	
    Now update the environment in terminal:

        $ source ~/.bashrc

    and install some node-version (we developed with 8.5.0):

        $ nvm install 8.5.0
        
        $ nvm use 8.5.0

    Now you can add the last command in your Profile to load node in every session

        export NVM_DIR="$HOME/.nvm"
        
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
        
        nvm use 8.5.0

    ### Check

    Now, you can check your node binary and node package version binary:

        $ node --version
        $ npm --version

    ## Database
    
    Many popular UNIX-like OSes ship with an acceptable version of MongoDB/Mongoose. On Windows, if you installed Pingado through `npm install`, you already have installed. Others can find installation instructions at the Mongoose website. Verify that it is correctly installed and in your PATH:

        $ mongo --version

    The program should report its version.

    
    ### Install 

    To install Pingado, you can install from [node package manager](https://www.npmjs.org) or install from source:


    #### From node package-manager

        $ npm install pingado-cli

    #### From the source,

        $ git clone https://www.github.com/lunhg/pingado-cli.git
        
        $ npm install
        
        $ npm test

    ### Check

    To verify that you have everything installed correctly, you should be able to run the following:

        $ pingado --version

    If it says something like "0.0.2", you are ready to continue.

