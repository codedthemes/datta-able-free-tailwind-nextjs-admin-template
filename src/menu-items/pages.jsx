// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'login',
      title: 'Login',
      type: 'item',
      icon: 'ph ph-lock-key',
      url: '/login',
      target: true
    },
    {
      id: 'register',
      title: 'Register',
      type: 'item',
      icon: 'ph ph-user-circle-plus',
      url: '/register',
      target: true
    }
  ]
};

export default pages;
