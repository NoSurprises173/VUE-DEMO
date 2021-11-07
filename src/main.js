import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select,Link,Container,Aside,Header,Main,Menu,Submenu,MenuItem,
  MenuItemGroup,Dropdown,DropdownItem, DropdownMenu,Row,Card, Col,Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag} from 'element-ui';
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Link.name, Link);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Header.name,Header);
Vue.component(Main.name,Main);
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.prototype.$http=http
if(process.env.NODE_ENV==='development') require('@/api/mock')

//Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
