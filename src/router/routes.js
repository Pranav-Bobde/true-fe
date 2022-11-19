const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },

      {
        path: "/order",
        name: "order",
        component: () => import("pages/OrderPage.vue"),
      },

      {
        path: "/feedback",
        name: "feedback",
        component: () => import("pages/FeedbackPage.vue"),
      },

      {
        path: "/thankyou",
        name: "thankyou",
        component: () => import("pages/ThankYouPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
