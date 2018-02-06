v-card
  v-card-media.white--text(height="400px" src="/assets/images/pingado.jpg")
    v-container(fill-height fluid)
      v-layout(fill-height)
        v-flex(xs16 align-end flexbox)
          span.headline= __('GETTING_STARTED')
              
  v-card-title(primary-title)
    div
      br
      h3= __('THIS_GUIDE_COVERS_GETTING_UP_AND_RUNNING_WITH_PINGADO')  
      br
      span= __('AFTER_READING_THIS_GUIDE_YOU_KNOW')+': '
      br
      span= '    a) '+__('HOW_TO_INSTALL_PINGADO')
      br
      span= '    b) '+__('CREATE_A_NEW_PINGADO_APPLICATION')
      br
      span= '    c) '+__('AND_CONNECT_YOUR_APPLICATION_TO_A_DATABASE')
      br
      span= '    d) '+__('THE_GENERAL_LAYOUT_OF_A_PINGADO_APPLICATION')
      br
      span= '    e) '+__('THE_BASIC_PRINCIPLES_OF_MVC_(MODEL_VIEW_CONTROLLER)_AND_RESTFUL_DESIGN_IN_PINGADO')
      br
      span= '    f) '+__('HOW_TO_QUICKLY_GENERATE_THE_STARTING_PIECES_OF_A_PINGADO_APPLICATION')
      br
      br
      router-link(:to='{name:"assumptions"}')
        v-btn(color="primary")= __('NEXT')