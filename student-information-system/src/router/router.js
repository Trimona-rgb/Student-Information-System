import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import LayoutPage from '../components/LayoutPage.vue'
import StudentList from '../views/StudentList.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "sign-in",
    component: SignIn
  },
  {
    path: '/home',
    name: "home",
    component: Home
  },
  {
    path: '/layout',
    name: "layout",
    component: LayoutPage
  },
  {
    path: '/student-list',
    name: "student-list",
    component: StudentList
  }


];

const router = new VueRouter({
  routes
});

export default router
