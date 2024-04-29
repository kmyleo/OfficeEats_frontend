<template>
  <div>
    <!-- <v-app-bar-nav-icon tile dark @click="drawer = true"></v-app-bar-nav-icon> -->
    <div class="d-flex justify-space-between align-center ps-4 pe-3 mt-3 mb-2">
      <div class="d-flex align-center">
        <v-icon class="me-1">mdi-shopping-outline</v-icon>
        <h4 class="mb-0 grey--text text--darken-1 f-600">1 Item</h4>
      </div>
      <slot name="userDrawerCloseButton"></slot>
    </div>
    <v-divider></v-divider>
    <div class="navbar-scroll">
      <div
        v-for="(item, index) in foodItems"
        :key="index"
      >
        <div class="d-flex align-center justify-space-between pa-3 mb-4">
          <div class="d-flex align-center">
            <div class="text-center me-3">
              <v-btn icon color="primary" outlined small @click="increaseFoodQuantity(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <p class="my-1">{{ item.quantity }}</p>
              <v-btn icon color="primary" outlined small @click="decreaseFoodQuantity(item)"
                     :disabled="item.quantity<=0">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
            <v-avatar size="64" tile class="me-4">
              <!--              <img class="br-10" :src="require(`~/assets/images/food/${n}.png`)" alt="">-->
              <v-img class="br-10" v-if="item.fooditemimage.length !== 0" contain
                     :src="mediaUrl+item.fooditemimage[0].image"></v-img>
            </v-avatar>
            <div class="">
              <h5 class="text-truncate d-inline-block mw-120 mb-0 f-600">{{ item.name }}</h5>
              <p class="text-12 mb-0" v-if="item.allow_discount">${{ discountPrice(item.price, item.discount) }} x
                {{ item.quantity }}</p>
              <p class="text-12 mb-0" v-else>${{ item.price }} x {{ item.quantity }}</p>
              <h5 class="primary--text" v-if="item.allow_discount">{{
                  ((item.price) - (item.discount / 100) * item.price) * (item.quantity)
                }}</h5>
              <h5 class="primary--text" v-else>{{ item.price * item.quantity }}</h5>
            </div>
          </div>
          <v-btn icon class="" @click="removeFoodItemFromCart(item)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      mediaUrl: process.env.VUE_APP_MEDIA_URL,
    }
  },
  computed: {
    foodItems() {
      return this.$store.state.modules.cartItem.foodItems
    }
  },
  methods: {
    discountPrice(price, discount) {
      return price - (discount / 100) * price
    },
    increaseFoodQuantity(itemFood) {
      this.$store.commit('modules/cartItem/increaseFoodItem', itemFood)
      this.$forceUpdate();
    },
    decreaseFoodQuantity(itemFood) {
      this.$store.commit('modules/cartItem/decreaseFoodItem', itemFood)
      this.$forceUpdate();
    },
    removeFoodItemFromCart(itemFood) {
      this.$store.commit('modules/cartItem/removeFoodItem', itemFood.id)
      this.$forceUpdate();
    }

  },
  mounted() {
    console.log(this.foodItems)
  }
}
</script>


<style lang="scss">
// .navbar-scroll {
//   overflow-y: scroll;
//   height: calc(100vh - 36px);
// }

.mw-120 {
  max-width: 120px;
}
</style>
