import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { Layout, Icon, Menu, Breadcrumb, Button, Table, Popconfirm } from 'ant-design-vue'
import { Input, Pagination } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(ElementUI)

// 按需引入  antd
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Input.name, Input)
Vue.component(Pagination.name, Pagination)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
