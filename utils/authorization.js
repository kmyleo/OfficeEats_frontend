export function checkRouteAuthorization(currentRoute, thisReactive, routeReactive) {
  console.log(currentRoute.name)
  console.log(thisReactive.$store.state.modules.userInfo.userInfo.is_partner)
  if (thisReactive.$store.state.modules.userInfo.userInfo.is_partner) {
    if (currentRoute.name === 'index') {
      routeReactive.push({path: '/dashboard/OrderList'})
    } else if (currentRoute.name === 'resturant-ResturantTwoColumn-ResturantTwoColumn') {
      routeReactive.push({path: `/resturant/FoodMenu/${thisReactive.$store.state.modules.userInfo.userInfo.restaurant_id}`})
    }

  }
}
