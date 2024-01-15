import AllPhone from '../components/pages/AllPhone';
import AddEditPhone from '../components/pages/addEditPhone';
import PhoneDetailComponent from '../components/pages/PhoneDetail';

export const routing = [
  {
    title: 'defualt', path: '/', component: AllPhone,
  },
  {
    title: 'home', path: '/home', component: AllPhone,
  }, {
    title: 'addPhone', path: '/addPhone', component: AddEditPhone,
  }, {
    title: 'phone-detail', path: '/phone-detail', component: PhoneDetailComponent,
  }];
