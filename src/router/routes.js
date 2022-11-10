const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children:
      [
        { path: "", component: () => import("pages/IndexPage.vue") },
        { path: "/menu", component: () => import("pages/MenuPage.vue") },
        { path: "/order", component: () => import("pages/OrderPage.vue") },
        { path: "/feedback", component: () => import("pages/FeedbackPage.vue") },
        { path: "/thankyou", component: () => import("pages/ThankYouPage.vue") }
      ]

    // children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    // children: [{ path: "/menu", component: () => import("pages/MenuPage.vue") }],
    // children: [{ path: "/order", component: () => import("pages/OrderPage.vue") }],
    // children: [{ path: "/feedback", component: () => import("pages/FeedbackPage.vue") }],
    // children: [{ path: "/thankyou", component: () => import("pages/ThankYouPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
