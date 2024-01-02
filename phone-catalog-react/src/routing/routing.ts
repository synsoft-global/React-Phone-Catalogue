/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import AllPhone from '../components/pages/AllPhone';
import AddEditPhone from '../components/pages/addEditPhone';
import PhoneDetailComponent from '../components/pages/PhoneDetail';
import  Login from "../components/pages/login";

export const routing = [
  {
    title: 'login', path: '/login', component: Login,
  },{
  title: 'defualt', path: '/', component: AllPhone,
},
{
  title: 'home', path: '/home', component: AllPhone,
}, {
  title: 'addPhone', path: '/addPhone', component: AddEditPhone,
}, {
  title: 'phone-detail', path: '/phone-detail', component: PhoneDetailComponent,
}];