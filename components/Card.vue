<template>

  <nuxt-link :to="`/resturant/FoodMenu/${cardSection.id}`" class="text-decoration-none">
    <v-card elevation="0" outlined class="br-10 o-hidden">
      <div class="position-relative">
        <div v-if="cardSection.restaurantimage">
          <v-img width="100%" class="btr-10" :src="mediaUrl+cardSection.restaurantimage[0].image"
                 v-if="cardSection.restaurantimage.length"></v-img>
          <v-img width="100%" class="btr-10"
                 v-else></v-img>
        </div>

        <div v-if="cardSection.restaurantoff">
          <div v-if="cardSection.restaurantoff.allow_off == true">
            <v-chip
              label
              flat
              class="p-absolute top-0 rounded-r-xl rounded-l-0 mt-3"
              color="primary"
            >Flat {{ cardSection.restaurantoff.discount }}% Off
            </v-chip>
          </div>
          <div v-else></div>
        </div>
      </div>

      <div class="pa-4 d-flex justify-space-between align-center">
        <span class="d-inline-block text-truncate me-3 f-600 text-18 card-title">{{ cardSection.business_name }}</span>
        <div class="d-flex align-center card-rating">
          <v-icon small color="yellow darken-2" class="me-1">mdi-star</v-icon>
          <div class="">
            <span class="font-weight-bold text-14">4.5</span>
            <span class="grey--text text--darken-1 text-14">/5</span>
          </div>

        </div>
      </div>
      <p class="px-4 grey--text text--darken-1"><span class="primary--text f-600 me-1"
                                                      v-for="i in cardSection.restaurant_categories">{{i.name}}</span></p>


    </v-card>
  </nuxt-link>

</template>

<script>
export default {
  props: ['cardSection'],
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      mediaUrl: process.env.VUE_APP_MEDIA_URL
    }
  },
}
</script>

<style lang="scss">
.card-title {
  flex: 1 1 auto;
  max-width: 100%;
}

.card-rating {
  flex: 0 0 auto;
}

.b-none {
  border: none !important;
}

btr-10 {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
</style>
