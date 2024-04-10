<template>
  <div>
    <v-app-bar
      fixed
      color="white"
      elevate-on-scroll
      width="100%"
    >
      <v-container class="d-flex align-center">
        <nuxt-link to="/">
          <v-avatar class="me-10" tile size="90">
            <img src="~/assets/images/logo_new.png" alt=""/>
          </v-avatar>
        </nuxt-link>

        <div class="form-location flex-grow-1 d-none d-md-flex border rounded ">
          <div class=" d-flex align-center ps-5">
            <v-icon small left>mdi-map-marker</v-icon>
            <span class="grey--text text--darken-1 me-3">London</span>
          </div>
          <v-btn icon tile large text class="text-capitalize rounded-0">
            <v-icon small>mdi-crosshairs-gps</v-icon>
          </v-btn>
          <input class="white flex-grow-1  ps-5" type="text" v-model="resturantFilterValue"
                 placeholder="Search for restaurant "
                 @input="resturantFilterChanged"/>
          <v-btn icon large tile class="rounded-l-0 text-capitalize">
            <v-icon small>mdi-magnify</v-icon>
          </v-btn>
        </div>
        <v-spacer></v-spacer>

        <div v-if="getMe.username">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text class="d-flex align-center">
                <v-icon class="me-2">mdi-account-circle-outline</v-icon>
                <span class="d-none d-sm-block">{{ getMe.username }}</span>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="gotoProfile">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
              <v-list-item @click="gotoSettings">
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item>
              <!-- Additional menu items here -->
              <v-list-item @click="logout">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-dialog
          v-model="dialog"
          width="500"
          v-else
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              light
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="me-0 me-sm-3">mdi-account-circle-outline</v-icon>
              <span class="d-none d-sm-block">Account</span>
            </v-btn>
          </template>

          <SignIn/>
        </v-dialog>


        <v-btn @click="shoppingCartDrawer = true" light text tile class="me-2">
          <v-icon small>mdi-cart-outline</v-icon>
          ({{ foodItemsLength }})
        </v-btn>

        <v-app-bar-nav-icon text light @click="drawer = true"></v-app-bar-nav-icon>

      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      width="320"
      v-model="shoppingCartDrawer"
      fixed
      temporary
      right
    >

      <ShoppingCart>
        <template v-slot:userDrawerCloseButton>
          <v-btn icon color @click.stop="shoppingCartDrawer = !shoppingCartDrawer">
            <v-icon color="primary">mdi-close</v-icon>
          </v-btn>
        </template>

      </ShoppingCart>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="text-capitalize mb-3" block color="primary" @click="checkout">
            Checkout Now ($ {{ totalPrice }})
          </v-btn>
          <v-btn class="text-cappitalise" outlined block color="primary">
            View Cart
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer
      width="320"
      v-model="drawer"
      fixed
      temporary

    >

      <NavbarList>
        <template v-slot:userDrawerCloseButton>
          <v-btn icon color @click.stop="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </NavbarList>
    </v-navigation-drawer>

    <v-row justify="center">
      <v-dialog
        v-model="orderCreatedDialog"
        persistent
        max-width="350"
      >

        <v-card>
          <v-card-title class="text-h5">
            Yours Order is Successfully Placed
          </v-card-title>
          <v-card-text>You can Track your order from your Profile
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!--            <v-btn-->
            <!--              color="green darken-1"-->
            <!--              text-->
            <!--              @click="orderCreatedDialog = false"-->
            <!--            >-->
            <!--              Disagree-->
            <!--            </v-btn>-->
            <v-btn
              color="green darken-1"
              text
              @click="gotoOrderHistory"
            >
              Goto Profile
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


  </div>


</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      dialog: false,
      group: null,
      dialog: false,
      shoppingCartDrawer: false,
      resturantFilterValue: "",
      items: [
        {
          action: 'mdi-view-dashboard-variant-outline',
          active: true,
          items: [
            {
              title: 'Review',
              link: '/dashboard/Review',
            },
            {
              title: 'Photos',
              link: '/dashboard/Photos',
            },
            {
              title: 'Order List',
              link: '/dashboard/OrderList',
            },
            {
              title: 'Order History',
              link: '/dashboard/OrderHistory',
            },
            {
              title: 'Followers',
              link: '/dashboard/Followers',
            },
            {
              title: 'Bookmarks',
              link: '/dashboard/Bookmarks',
            },
          ],
          title: 'Dashboards',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: false,
          items: [
            {title: 'Breakfast & brunch'},
            {title: 'New American'},
            {title: 'Sushi'},
          ],
          title: 'Dining',
        },

      ],
      orderCreatedDialog: false
      // totalPrice: 0
    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.modules.cartItem.totalPrice
    },
    foodItemsLength() {
      if (this.$store.state.modules.cartItem.foodItems) {
        return this.$store.state.modules.cartItem.foodItems.length
      }
      return 0
    },
    getMe() {
      return this.$store.state.modules.userInfo ? this.$store.state.modules.userInfo.userInfo : {}
    },
  },
  methods: {
    resturantFilterChanged() {
      this.$nuxt.$emit('resturant-filter-changed', this.resturantFilterValue)
    },
    checkout() {
      console.log(this.$store.state.modules.userInfo.userInfo)
      console.log(this.$store.state.modules.userInfo.userInfo.name)
      if (this.$store.state.modules.userInfo.userInfo.email === undefined) {
        this.dialog = true;
      } else {
        let foodItems = this.$store.state.modules.cartItem.foodItems
        let cartItems = {}
        cartItems['customer'] = this.$store.state.modules.userInfo.userInfo.id
        cartItems['total_amount'] = this.$store.state.modules.cartItem.totalPrice
        cartItems['food_items'] = foodItems

        this.$api.post("singleorder/", cartItems).then(response => {
          this.$store.commit('modules/cartItem/setResetCart', {})
          this.orderCreatedDialog = true

        })
      }

    },
    gotoOrderHistory() {
      this.orderCreatedDialog = false
      this.$router.push('/dashboard/OrderHistory')
    },
    logout() {
    this.$store.dispatch('modules/userInfo/logout').then(() => {
      this.$router.push('/').then(() => {
        this.dialog = true;
      })
    }).catch(error => {
      console.error("Error during logout:", error);
    });
  },
  },

}
</script>
<style scoped>

</style>
