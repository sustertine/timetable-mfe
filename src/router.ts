import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/Home.vue";
import Groups from "@/components/Groups.vue";
import TImetablesView from "@/components/timetables/TImetablesView.vue";
import UserDetailsPage from 'timetable-users-mfe/UserDetailsPage';


const routes = [
    {path: '/', component: Home},
    {path: '/groups', component: Groups},
    {path: '/timetables', component: TImetablesView},
    // user details page from route with id
    {path: '/users/:id', component: UserDetailsPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router