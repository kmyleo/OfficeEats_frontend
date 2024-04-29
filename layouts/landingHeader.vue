<template>
  <v-app>
    <div class="hero-section">
      <Header :class="toggleNavClass()"/>
      <div id="navbar-hero">
        <v-container>
          <div class="d-flex align-center mt-6 mb-10  navbar-container">

            <nuxt-link to="/">
              <v-avatar tile size="200">
                <img src="~/assets/images/logo_top.png" alt=""/>
              </v-avatar>
            </nuxt-link>

            <v-spacer></v-spacer>

            <div v-if="getMe.username!==undefined">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" text dark class="d-flex align-center">
                    <v-icon color="white" class="me-0 me-sm-3">mdi-account-circle-outline</v-icon>
                    <span class="d-none d-sm-block">{{ getMe.username }}</span>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item to="/order/OrderList">
                    <v-list-item-title>Order History</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/group/GroupList" v-if="!getMe.is_partner">
                    <v-list-item-title>View Groups</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/mygroup/MyGroupList" v-if="!getMe.is_partner">
                    <v-list-item-title>My Groups</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/dashboard/Review" v-if="getMe.is_partner">
                    <v-list-item-title>Reviews</v-list-item-title>
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
              v-if="getMe.username===undefined"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn

                  dark
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


            <v-btn @click="shoppingCartDrawer = true" dark text tile class="me-2">
              <v-icon color="white" small>mdi-cart-outline</v-icon>
              ({{ foodItemsLength }})
            </v-btn>
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
                  <v-btn class="text-capitalize mb-3" block color="primary" @click="checkout"
                         :disabled="totalPrice===0">
                    Checkout Now ($ {{ totalPrice }})
                  </v-btn>
                  <!--                  <v-btn class="text-cappitalise" outlined block color="primary">-->
                  <!--                    View Cart-->
                  <!--                  </v-btn>-->
                </div>
              </template>
            </v-navigation-drawer>
            <!-- <v-app-bar-nav-icon
              class="rounded"
              tile
              dark
              @click="drawer = true"
            ></v-app-bar-nav-icon>
            <v-navigation-drawer
              width="320"
              v-model="drawer"
              fixed
              temporary -->

            >

              <!-- <NavbarList>
                <template v-slot:userDrawerCloseButton>
                  <v-btn icon color @click.stop="drawer = !drawer">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
              </NavbarList> -->
            <!-- </v-navigation-drawer> -->
          </div>
        </v-container>
      </div>
      <v-container>
        <div class="mt-15">
          <v-row>
            <v-col cols="12" xl="5" class="mx-auto">
              <h1 class="white--text text-center display-2 font-weight-regular mb-4">Discover the best office catering
                services in
                <span class="font-weight-bold">London</span></h1>
              <h4 class="text-h6 white--text text-center font-weight-light mb-5">The meals you love, delivered with
                care</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="7" class="mx-auto mb-15">
              <div class="form-location d-flex white rounded flex-wrap">
                <div class=" d-flex align-center ps-5">
                  <v-icon left>mdi-map-marker</v-icon>
                  <span class="grey--text text--darken-1 me-10">London</span>
                </div>
                <!-- <v-btn x-large text class="text-capitalize rounded-0 btn-location"> -->
                  <!-- <v-icon left>mdi-crosshairs-gps</v-icon> -->
                  <!-- <span class="grey--text text--darken-4 font-weight-regular">Locate me</span> -->
                <!-- </v-btn> -->
                <input v-model="searchQuery" class="white flex-1 ps-5" type="text"
                       placeholder="Search for restaurant " @input="resturantFilterChanged"/>
                <!--              <v-btn to="/resturant/ResturantTwoColumn"  x-large color="primary" class="rounded-l-0 text-capitalize">-->
                <v-btn :to="`/resturant/ResturantTwoColumn/${searchQuery}`" x-large color="primary"
                       class="rounded-l-0 text-capitalize">
                  <!-- <v-btn @click="submitSearch" x-large color="primary" class="rounded-l-0 text-capitalize"> -->
                  Search
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>

    </div>
    <Nuxt class="content"/>
    <GoToBtn/>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    active: false,
    dialog: false,
    shoppingCartDrawer: false,
    searchQuery: '',
  }),
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
    getOrderType() {
      return this.$store.state.modules.cartItem.orderType
    },
  },
  methods: {
    toggleNavClass() {
      if (this.active == false) {
        return 'nav'
      } else {
        return 'sticky-nav'
      }

    },
    checkout() {
      this.cardInformationError = {}
      console.log(this.$store.state.modules.userInfo.userInfo)
      console.log(this.$store.state.modules.userInfo.userInfo.username)
      if (this.$store.state.modules.userInfo.userInfo.email === undefined) {
        this.dialog = true;
      } else {
        let foodItems = this.$store.state.modules.cartItem.foodItems
        let cartItems = {}
        cartItems['customer'] = this.$store.state.modules.userInfo.userInfo.id
        cartItems['total_amount'] = this.$store.state.modules.cartItem.totalPrice
        cartItems['food_items'] = foodItems
        if (this.getOrderType === 'single') {
          this.$api.post("singleorder/", cartItems).then(response => {
            this.$store.commit('modules/cartItem/setResetCart', {})
            this.orderCreatedDialog = true
            console.log(response.data.payment_redirect_url)
            window.location.replace(response.data.payment_redirect_url)

          }).catch(error => {
            this.cardInformationError = error.response.data.card_information
          })
        } else if (this.getOrderType === 'group') {
          cartItems['team'] = this.$store.state.modules.cartItem.team.team
          cartItems['meal_type'] = this.$store.state.modules.cartItem.mealType.type
          cartItems['food_history_id'] = this.$store.state.modules.cartItem.mealType.id
          if (this.$store.state.modules.cartItem.mealType.type === 'Breakfast') {
            cartItems['allowed_budget'] = this.$store.state.modules.cartItem.mealType.team_rule_detail.breakfast_budget
          } else if (this.$store.state.modules.cartItem.mealType.type === 'Lunch') {
            cartItems['allowed_budget'] = this.$store.state.modules.cartItem.mealType.team_rule_detail.breakfast_budget
          } else if (this.$store.state.modules.cartItem.mealType.type === 'Dinner') {
            cartItems['allowed_budget'] = this.$store.state.modules.cartItem.mealType.team_rule_detail.breakfast_budget
          }
          this.$api.post("grouporder/", cartItems).then(response => {
            this.$store.commit('modules/cartItem/setResetCart', {})
            this.orderCreatedDialog = true
            window.location.replace(response.data.payment_redirect_url)

          })
        } else if (this.getOrderType === 'catering') {
          cartItems['no_of_peoples'] = this.$store.state.modules.cartItem.noOfPeoples
          this.$api.post("cateringorder/", cartItems).then(response => {
            this.$store.commit('modules/cartItem/setResetCart', {})
            this.orderCreatedDialog = true
            window.location.replace(response.data.payment_redirect_url)

          })
        }

      }

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
    resturantFilterChanged() {
      this.$nuxt.$emit('resturant-filter-changed', this.searchQuery)
    },
  },
  mounted() {
    window.document.onscroll = () => {

      if (window.scrollY > 400) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
}
</script>
<style lang="scss">

.hero-section {
  background-image: url('../assets/images/header_background.jpg');
  background-size: cover;

  .nav {
    display: none;
  }

}


</style>

