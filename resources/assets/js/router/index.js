import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from '../store/store';
import Flash from '../helpers/flash';
import {routerHistory, writeHistory} from 'vue-router-back-button'
import Home from '../views/HomePage.vue';
import Login from '../views/auth/Login.vue';
import NotFound from '../views/NotFound.vue';
import DSA from '../views/DSA/index.vue';
import DSAHome from '../views/DSA/HomePage.vue';
import DSAReport from '../views/DSA/report/report.vue';
import CustomerList from '../views/DSA/list/list.vue';
import CustomerUpdate from '../views/DSA/update/update.vue';
import CustomerRegister from '../views/DSA/registration/Register.vue';
import DVA from '../views/DVA/index.vue';
import DVAHome from '../views/DVA/HomePage.vue';
import DVAVerification from '../views/DVA/verification/verification.vue';
import Profile from '../views/profile/Index.vue';
import ProfileEdit from '../views/profile/Edit.vue';
import ProfileHome from '../views/profile/HomePage.vue';
import HRM from '../views/HRM/index.vue';
import HRMHome from '../views/HRM/HomePage.vue';
import EmployeeManager from '../views/HRM/employee/Manager.vue';
import EmployeeRegister from '../views/HRM/employee/Register.vue';
import FSL from '../views/FSL/index.vue';
import FSLHome from '../views/FSL/HomePage.vue';
import Inventory from '../views/FSL/inventory/view.vue';

Vue.use(VueRouter);
Vue.use(routerHistory);
const router = new VueRouter({
    routes: [
        {path: '/', redirect: {name: 'home'}},
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {role: localStorage.getItem("role_id")},
            alias: '/welcome-home'
        },
        {path: '/login', component: Login, name: 'login'},
        {
            path: '/user', component: Profile,
            children: [
                {path: 'profile', component: ProfileHome},
                {path: 'profile/edit', component: ProfileEdit},
            ]
        },
        {
            path: '/dsa', component: DSA, meta: {DSA: true},
            children: [
                {path: '/', redirect: {name: 'DSAHome'}},
                {path: 'home', component: DSAHome, name: 'DSAHome', alias: '/dsa-home'},
                {
                    path: 'report',
                    component: DSAReport,
                    name: 'DSAReport',
                    alias: '/dsa-report'
                }, {
                    path: 'customer/register',
                    component: CustomerRegister,
                    name: 'customerRegister',
                    alias: '/register-customer'
                },{
                    path: 'customer/update',
                    component: CustomerUpdate,
                    name: 'customerUpdate',
                    alias: '/update-customer'
                }, {
                    path: 'customer/list',
                    component: CustomerList,
                    name: 'customerList',
                    alias: '/register-list'
                }
            ]
        },
        {
            path: '/dva', component: DVA, meta: {DVA: true},
            children: [
                {path: '/', redirect: {name: 'DVAHome'}},
                {path: 'home', component: DVAHome, name: 'DVAHome', alias: '/dva-home'},
                {path: 'verification', component: DVAVerification, name: 'DVAVerification', alias: '/dva-verification'},
            ]
        },
        {
            path: '/hrm', component: HRM, meta: {HRM: true},
            children: [
                {path: '/', redirect: {name: 'HRMHome'}},
                {path: 'home', component: HRMHome, name: 'HRMHome', alias: '/hrm-home'},
                {
                    path: 'employee/register',
                    component: EmployeeRegister,
                    name: 'employeeRegister',
                    alias: '/register-employee'
                },
                {
                    path: 'employee/manager',
                    component: EmployeeManager,
                    name: 'employeeManager',
                    alias: '/manage-employee'
                },
            ]
        },
        {
            path: '/fsl', component: FSL, meta: {FSL: true},
            children: [
                {path: 'home', component: FSLHome, name: 'FSLHome', alias: '/fsl-home'},
                {path: 'inventory', component: Inventory, name: 'inventory', alias: '/inventory'},
            ]
        },
        {path: '/not-found', component: NotFound},
        {path: '*', component: NotFound},
    ]
});

router.afterEach(writeHistory);
router.beforeEach((to, from, next) => {
    let home = (((to.path).split("/")).filter(Boolean)[0]).toUpperCase();
    if (to.matched.some(m => m.meta[home])) {
        if (store.getters['verify' + home + 'Access']) return next();
        Flash.setError("You do not have access to that page!");
        return next({name: 'home'});
    }
    next();


    //check if the path user is going to is our param path
    // if(from.meta.role == 11 || from.meta.role == 1){
    // if( to.path != '/dsa' ||  to.path != '/customer/register' ||  to.path != '/dsa/home' ){
    //     //check if the user item is already set
    //         //move to the route
    // 		next('/home');
    // 		 //prompt for username
    // 		 Flash.setError("DSAs are not allowed on this route");
    //         }else{
    //        //prompt for username
    // 		 Flash.setSuccess("Welcome to the Admin");
    //         //return, do not move to the route
    // 	//	return;
    // 		next();
    // 		}
    // }
});
export default router