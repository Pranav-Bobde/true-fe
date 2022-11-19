import { boot, route } from "quasar/wrappers";
import { useUserStore } from "src/stores/user-store";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router, store }) => {
  const userStore = useUserStore(store);
  // console.log("store: ", userStore);
  // console.log("id: ", userStore.user.id)
  const id = window.localStorage.getItem("id");
  router.beforeEach((to, from, next) => {
    // console.log("from: ", from);
    // console.log("to: ", to);
    if (id) {
      next()
    } else {
      if (to.path === "/") {
        next();
      } else {
        next("/");
      }
    }
  });
});
