import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage.vue';
import TermsPage from '@/pages/TermsPage.vue';
import SuccessPage from '@/pages/SuccessPage.vue';
import DashboardPage from '@/pages/DashboardPage.vue';
import IntroductionPage from '@/pages/IntroductionPage.vue';
import ModulePage from '@/pages/ModulePage.vue';
import UsagePage from '@/pages/UsagePage.vue';
import DeviceMenuPage from '@/pages/DeviceMenuPage.vue';
import DeviceDetailPage from '@/pages/DeviceDetailPage.vue';
import CommunicationStrategiesPage from '@/pages/CommunicationStrategiesPage.vue';
import CommunicationMenuPage from '@/pages/CommunicationMenuPage.vue';
import CommunicationDetailPage from '@/pages/CommunicationDetailPage.vue';
import FaqPage from '@/pages/FaqPage.vue';
import FaqDetailPage from '@/pages/FaqDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/forgot-password',
    name: 'forgot',
    component: ForgotPasswordPage
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage
  },
  {
    path: '/succesmessage',
    name: 'succes',
    component: SuccessPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: IntroductionPage
  },
  {
    path: '/introduction/module:moduleNumber',
    name: 'ModulePage',
    component: ModulePage,
    props: true
  },
  {
    path: '/usage',
    name: 'UsagePage',
    component: UsagePage
  },
  {
    path: '/usage/:deviceName',
    name: 'DeviceMenuPage',
    component: DeviceMenuPage,
    props: true
  },
  {
    path: '/usage/:deviceName/:optionName',
    name: 'DeviceDetailPage',
    component: DeviceDetailPage,
    props: true
  },
  {
    path: '/communication',
    name: 'CommunicationStrategiesPage',
    component: CommunicationStrategiesPage
  },
  {
    path: '/communication/:role',
    name: 'CommunicationMenuPage',
    component: CommunicationMenuPage,
    props: true
  },
  {
    path: '/communication/:role/:option',
    name: 'CommunicationDetailPage',
    component: CommunicationDetailPage,
    props: true
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: FaqPage
  },
  {
    path: '/faq/detail',
    name: 'FaqDetailPage',
    component: FaqDetailPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;