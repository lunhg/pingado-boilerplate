v-app
  v-navigation-drawer(app fixed v-model="drawer")
    v-list(dense)
      - for(var e in list)
        v-list-tile(@click="")
          v-list-tile-action
            v-icon= list[e].icon
          v-list-tile-content
            v-list-tile-title
              -var _to_='{name: \''+list[e].name+'\'}'
              router-link(:to=''+_to_)= list[e].title

      v-list-tile(@click="")
        v-list-tile-action
          v-icon public
        v-list-tile-content
          v-list-tile-title
             - for(var e in __list__ = ['en', 'pt-br', 'es'])
               a(href='/?lang='+__list__[e])= __list__[e] + (__list__[e] === 'es' ? '' : ', ')

  v-toolbar(app dark fixed color="indigo")
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title= title

  v-content
    v-container(fluid fill-height)
      v-layout(justify-center align-center)
        router-view

  v-footer(app)
    span.white--text= footer