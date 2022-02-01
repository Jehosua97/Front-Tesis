
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/dashboard.vue') },
      { path: '/dashboard_v2', component: () => import('pages/dashboard_v2.vue') },
      { path: '/dashboard_v3', component: () => import('pages/dashboard_v3.vue') },
      { path: '/my_profile', component: () => import('pages/my_profile.vue') },
      { path: '/transactions', component: () => import('pages/transactions.vue') },
      { path: '/calendar', component: () => import('pages/calendar.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
