v-card
  v-card-media.white--text(height="200px" src="/assets/images/pingado.jpg")
    v-container(fill-height fluid)
      v-layout(fill-height)
        v-flex(xs16 align-end flexbox)
          span.headline= __('CREATING_A_NEW_PINGADO_PROJECT')

  v-card-title(primary-title)
    div
      br
      span= __('THE_BEST_WAY_TO_READ_THIS_GUIDE_IS_TO_FOLLOW_IT_STEP_BY_STEP_ALL_STEPS_ARE_ESSENTIAL_TO_RUN_THIS_EXAMPLE_APPLICATION_AND_NO_ADDITIONAL_CODE_OR_STEPS_ARE_NEEDED')
      br
      span= __('BY_FOLLOWING_ALONG_WITH_THIS_GUIDE_YOULL_CREATE_A_PINGADO_PROJECT_CALLED_BLOG_A_(VERY)_SIMPLE_WEBLOG_BEFORE_YOU_CAN_START_BUILDING_THE_APPLICATION_YOU_NEED_TO_MAKE_SURE_THAT_YOU_HAVE_PINGADO_ITSELF_INSTALLED')
      br
      h3= __('INSTALLING_PINGADO')
      br
      span= __('IF_YOU_DONT_HAVE_NODE_INSTALLED_AND_IS_USING_A_UNIX_SYSTEM_WE_SUGGEST_YOU_TO_USE_THE_NODE_VERSION_MANAGER')
      br
      br
      :marked
        ```bash
        $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
        ```
      br
      h3= __('ADD_THE_SOURCE_LINE_TO_YOUR_PROFILE')
      br
      span= __('PROFILES_ARE_SCRITPS_THAT_SETUP_ENVIRONMENT_VARIABLES_GENERALLY_THESE_FILES_ARE_LOCATED_AT_YOUR_HOME_FOLDER_AS_HIDDEN_FILE_WE_NEED_TO_LOAD_ENVIRONMENT_VARIABLES_NEEDED_BY_NVM')+':'
      br
      br
      :marked
          
        ```bash
        # ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc
        export NVM_DIR="$HOME/.nvm"
	  
        # This loads nvm
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
        ```
      br
      span= __('NOW_UPDATE_THE_ENVIRONMENT_IN_TERMINAL')+':'
      br
      br
      :marked
        ```bash
        $ source ~/.bashrc
        ```
        
      br
      span= __('AND_INSTALL_SOME_NODE-VERSION_(WE_DEVELOPED_WITH_850)')+':'
      br
      br
      :marked
        ```bash
        $ nvm install 8.5.0
        $ nvm use 8.5.0
        ```
      br
      span= __('NOW_YOU_CAN_ADD_THE_LAST_COMMAND_IN_YOUR_PROFILE_TO_LOAD_NODE_IN_EVERY_SESSION')
      br
      br
      :marked
        ```bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm use 8.5.0
        ```
      br
      br
      h3= __('CHECK')
      br
      span= __('NOW_YOU_CAN_CHECK_YOUR_NODE_BINARY_AND_NODE_PACKAGE_VERSION_BINARY')
      br
      br
      :marked
        ```bash
        $ node --version
        $ npm --version
        ```
      br
      h3= __('DATABASE') 
      br
      span= __('MANY_POPULAR_UNIX-LIKE_OSES_SHIP_WITH_AN_ACCEPTABLE_VERSION_OF_MONGODB_MONGOOSE._ON_WINDOWS_IF_YOU_INSTALLED_PINGADO_THROUGH_NPM_INSTALL_YOU_ALREADY_HAVE_INSTALLED_OTHERS_CAN_FIND_INSTALLATION_INSTRUCTIONS_AT_THE_MONGOOSE_WEBSITE_VERIFY_THAT_IT_IS_CORRECTLY_INSTALLED_AND_IN_YOUR_PATH')
      br
      br
      :marked
        ```bash
        $ mongo --version
        ```
      br
      span= __('THE_PROGRAM_SHOULD_REPORT_ITS_VERSION')+'.'
      br
      br
      h3= __('INSTALL')
      br
      span= __('TO_INSTALL_PINGADO_YOU_CAN_INSTALL_FROM_NODE_PACKAGE_MANAGE_INSTALL_FROM_SOURCE')
      br
      br
      h3= __('FROM_NODE_PACKAGE_MANAGER')
      br
      br
      :marked
        ```bash
        $ npm install pingado-cli
        ```
      br
      br
      h3= __('FROM_THE_SOURCE')
      :marked
        ```bash
        $ git clone https://www.github.com/lunhg/pingado-cli.git
        $ npm install
        $ npm test
        ```
      br
      br
      h3= __('CHECK')
      br
      br
      span= __('TO_VERIFY_THAT_YOU_HAVE_EVERYTHING_INSTALLED_CORRECTLY_YOU_SHOULD_BE_ABLE_TO_RUN_THE_FOLLOWING')
      br
      br
      :marked
        ```bash
        $ pingado --version
        ```
      br
      span= __('IF_IT_SAYS_SOMETHING_LIKE_002_YOU_ARE_READY_TO_CONTINUE')

