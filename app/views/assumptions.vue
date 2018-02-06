v-card
  v-card-media.white--text(height="200px" src="/assets/images/pingado.jpg")
    v-container(fill-height fluid)
      v-layout(fill-height)
        v-flex(xs16 align-end flexbox)
          span.headline= __('GUIDE_ASSUMPTIONS')
              
  v-card-title(primary-title)
    div
      br
      br
      h3= '*** '+ __('THIS_GUIDE_IS_A_COLLAGE_FROM_RAILS_GUIDE_AND_ITS_DESIGNED_FOR_WHO_WANT_TO_GET_STARTED_WITH_A_PINGADO_FROM_SCRATCH_IT_DOES_NOT_ASSUME_THAT_YOU_HAVE_ANY_PRIOR_EXPERIENCE')+__(' ***')
      br
      br
      span= __('PINGADO_IS')+':'
      br
      br
      span= '   a) '+ __('A_WEB_APPLICATION_FRAMEWORK')
      br
      span= '   b) '+ __('RUNNING_ON_THE_NODE_JS_ENVIRONMENT')
      br
      span= '   c) '+ __('WROTE_IN_JAVASCRIPT_PROGRAMMING_LANGUAGE')
      br
      span= '   d) '+ __('ASYNCHRONOUS_APPROACH_WITH_BLUEBIRD_PROMISES')
      br
      span= '   e) '+ __('TESTED_WITH_MOCHA')
      br
      span= '   f) '+ __('AND_REPORTED_WITH_INSTANBUL_AND_MOCHAWESOME')
      br
      br
      div
        router-link(:to='{name:"dashboard"}')
          v-btn(color="primary")= __('PREVIOUS')
        router-link(:to='{name:"whois"}')
          v-btn(color="primary")= __('NEXT')