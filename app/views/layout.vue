v-app
  v-navigation-drawer(app fixed v-model="drawer")
    v-list(dense)
      v-list-tile(@click="")
        v-list-tile-action
          v-icon dashboard
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"dashboard"}') Getting started
      v-list-tile(@click="")
        v-list-tile-action
          v-icon dashboard
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"assumptions"}') Guide Assumptions
      v-list-tile(@click="")
        v-list-tile-action
          v-icon bookmark
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"whois"}') What is Pingado?
      v-list-tile(@click="")
        v-list-tile-action
          v-icon bookmark
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"creating"}') Creating a New Pingado Project
      v-list-tile(@click="")
        v-list-tile-action
          v-icon contact_mail
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"contact"}') Contact
          
  v-toolbar(app dark fixed color="indigo")
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title Pingado

  v-content
    v-container(fluid fill-height)
      v-layout(justify-center align-center)
        router-view

  v-footer(app)
    span.white--text &copy; 2018