v-app
  v-navigation-drawer(app fixed v-model="drawer")
    v-list(dense)
      - for(var e in list)
        v-list-tile(@click="")
          v-list-tile-action
            v-icon= list[e].icon
        v-list-tile-content
          v-list-tile-title
            router-link(:to='{name:"'+list[e].path+'"}')= list[e].title
          
  v-toolbar(app dark fixed color="indigo")
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title= title

  v-content
    v-container(fluid fill-height)
      v-layout(justify-center align-center)
        router-view

  v-footer(app)
    span.white--text= footer