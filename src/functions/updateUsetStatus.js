export const updateUserStatus = async (id, status) => {
  if (id && status) {
    try {
      let res = await fetch(process.env.USER_API, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.KEY,
        },
        body: JSON.stringify({
          id: id,
          user_status: status,
        }),
      });

      res = await res.json();
      window.localStorage.setItem("user_status", status);
      return res;
    } catch (error) {
      console.log("PatchError: ", error);
    }
  }
};
