export default function ({app, redirect}) {
  if (JSON.parse(window.localStorage.getItem('me')) !== null) {
    if (JSON.parse(window.localStorage.getItem('me')).modules.userInfo.userInfo.is_partner) {
      console.log(app.router)
      if (app.router.history.current.name === 'index') {
        window.location.replace("/order/OrderList")
      } else if (app.router.history.current.name === 'resturant-ResturantTwoColumn-ResturantTwoColumn') {
        window.location.replace("/order/OrderList")
      } else if (app.router.history.current.name === "mygroup-MyGroupList") {
        window.location.replace("/order/OrderList")
      } else if (app.router.history.current.name === 'group-GroupList') {
        window.location.replace("/order/OrderList")
      } else if (app.router.history.current.name === "group-GroupDetail-GroupDetail") {
        window.location.replace("/order/OrderList")
      }

    }
  }
}
