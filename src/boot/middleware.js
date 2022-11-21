import { boot } from "quasar/wrappers";
import { useUserStore } from "src/stores/user-store";

export default boot(async ({ router, store }) => {
  const userStore = useUserStore(store);
  
  router.beforeEach((to, from, next) => {
    const user_id = userStore.user.id || window.localStorage.getItem("id") || null;
    const ls_user_status = window.localStorage.getItem("user_status");

    if(!user_id){
      console.log("first")
      if (to.path === "/") {
        next();
      } else {
        next("/");
      }

    }else {

      console.log("Second")
      console.log(ls_user_status) 
      console.log(process.env.STATUS_USER_CONFIRMED)

      if(ls_user_status == process.env.STATUS_USER_CONFIRMED){
        console.log("USER CONFIRMED")
        if (to.path === "/order") {
          next();
        } else {
          router.push("/order");
        }

      }else if (ls_user_status == process.env.STATUS_FEEDBACK_LEFT) {
        console.log("FEEDBACK LEFT")
        if (to.path === "/feedback") {
          next();
        } else {
          router.push("/feedback");
        }

      } else if (ls_user_status == process.env.STATUS_FEEDBACK_COMPLETE) {
        console.log("FEEDBACK COMPLETE")
        if (to.path === "/thankyou") {
          next();
        } else {
          router.push("/thankyou");
        }
      }

    }
  });
});
