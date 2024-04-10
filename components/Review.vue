<template>
  <div>
  <v-row>
            <v-col cols="12" lg="6">

              <!-- Loop through the reviews -->
              <div v-for="(review, index) in review" :key="index" class="mb-6">


              <!-- user-post  -->
              <div class="mb-6">
                <div class="d-flex align-center flex-wrap mb-4">
                  <v-avatar size="48" class="me-4">
                    <img src="@/assets/images/faces/8.png" alt="">
                  </v-avatar>
                  <div>
                    <h5 class="mb-0">{{ review.user_data.username }}</h5>
                    <!-- <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews, 9 Followers</p> -->
                  </div>
                </div>
                <div class="d-flex align-center mb-2">
                                  <span
                                    v-for="(star, index) in review.rating"
                                    :key="index"
                                  >
                                      <v-icon small color="warning">mdi-star</v-icon>
                                  </span>
                  <span class="font-weight-bold text-14 ms-2">{{ review.rating }}</span>
                  <span class="grey--text text--darken-1 text-14 ms-2">{{ review.date_time }}</span>
                </div>
                <h5 class="grey--text text--darken-2 font-weight-regular mb-3">{{ review.comment }}</h5>
                <v-row class="mb-2">
                  <v-col v-for="(image, index) in review.reviewimage" :key="index" cols="6" lg="6">
                    <v-img contain :src="mediaUrl+image.image"></v-img>
                  </v-col>
                  <!-- <v-col cols="6" lg="6">
                    <v-img contain :src="require('@/assets/images/gallery/foodSix.png')"></v-img>
                  </v-col> -->
                </v-row>
                <div>
                  <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                  <div class="mt-4">
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-thumb-up-outline</v-icon>
                      Like
                    </v-btn>
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-comment-text-outline</v-icon>
                      Comment
                    </v-btn>
                  </div>
                </div>
                <v-divider class="my-4"></v-divider>
                <!-- comment  -->
                <div class="mb-6">
                  <div class="d-flex align-center mb-3">
                    <v-avatar size="28" class="me-3">
                      <img src="@/assets/images/faces/6.png" alt="">
                    </v-avatar>
                    <div class="text-14 grey--text text--darken-4 f-600">Emmet McDermott</div>
                  </div>
                  <h5 class="grey--text text--darken-2 font-weight-regular">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                </div>
                <div class="mb-6">
                  <div class="d-flex align-center mb-3">
                    <v-avatar size="28" class="me-3">
                      <img src="@/assets/images/faces/7.png" alt="">
                    </v-avatar>
                    <div class="text-14 grey--text text--darken-4 f-600">Emmet McDermott</div>
                  </div>
                  <h5 class="grey--text text--darken-2 font-weight-regular">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                </div>
                <v-divider></v-divider>
                <!-- end::comment -->

              </div>
              <!-- end::user-post  -->
              <!-- user-post  -->
              <!-- <div class="mb-6">
                <div class="d-flex align-center flex-wrap mb-4">
                  <v-avatar size="48" class="me-4">
                    <img src="@/assets/images/faces/13.jpg" alt="">
                  </v-avatar>
                  <div>
                    <h5 class="mb-0">Abriella Bond</h5>
                    <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews, 9 Followers</p>
                  </div>
                </div>
                <div class="d-flex align-center mb-2">
                                  <span
                                    v-for="(star, index) in 5"
                                    :key="index"
                                  >
                                      <v-icon small color="warning">mdi-star</v-icon>
                                  </span>
                  <span class="font-weight-bold text-14 ms-2">4.0</span>
                  <span class="grey--text text--darken-1 text-14 ms-2">3 Days Ago</span>
                </div>
                <h5 class="grey--text text--darken-2 font-weight-regular mb-3">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>

                <div>
                  <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                  <div class="mt-4">
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-thumb-up-outline</v-icon>
                      Like
                    </v-btn>
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-comment-text-outline</v-icon>
                      Comment
                    </v-btn>
                  </div>
                </div>
                <v-divider class="my-4"></v-divider>


              </div> -->
              <!-- end::user-post  -->
              <!-- user-post  -->
              <!-- <div class="mb-6">
                <div class="d-flex align-center flex-wrap mb-4">
                  <v-avatar size="48" class="me-4">
                    <img src="@/assets/images/faces/9.jpg" alt="">
                  </v-avatar>
                  <div>
                    <h5 class="mb-0">Abriella Bond</h5>
                    <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews, 9 Followers</p>
                  </div>
                </div>
                <div class="d-flex align-center mb-2">
                                  <span
                                    v-for="(star, index) in 5"
                                    :key="index"
                                  >
                                      <v-icon small color="warning">mdi-star</v-icon>
                                  </span>
                  <span class="font-weight-bold text-14 ms-2">4.0</span>
                  <span class="grey--text text--darken-1 text-14 ms-2">3 Days Ago</span>
                </div>
                <h5 class="grey--text text--darken-2 font-weight-regular mb-3">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>

                <div>
                  <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                  <div class="mt-4">
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-thumb-up-outline</v-icon>
                      Like
                    </v-btn>
                    <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                      <v-icon left small>mdi-comment-text-outline</v-icon>
                      Comment
                    </v-btn>
                  </div>
                </div>
                <v-divider class="my-4"></v-divider>


              </div> -->
              <!-- end::user-post  -->

            </div>
            <!-- End of review loop -->
            </v-col>
            <!-- <v-col cols="12" lg="6">
              <v-img class="mx-auto" max-width="500px" :src="require('@/assets/images/download-app.png')"></v-img>
            </v-col> -->
          </v-row>
      </div>
</template>
<script>
export default {
head: {
  title: 'Food Menu'
},
props:[
      "resturantId"
  ],
data: () => ({
  items: [
    {
      text: 'Home',
      disabled: false,
      href: '/',
    },
    {
      text: 'New York',
      disabled: false,
      href: '/',
    },
    {
      text: 'Resturants',
      disabled: true,
      href: '/',
    },
  ],
  formSelectItems: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  mobileItems: [
    'Order Online', 'Book a Table', 'Reviews',
  ],
  text: 'hello',
  tab: null,
  checkbox: true,
  radioGroup: 1,
  value: [20, 40],
  resturant: {
    restaurantimage: []
  },
  mainImage: {},
  mediaUrl: process.env.VUE_APP_MEDIA_URL,
  foodItem: [],
  foodItemCategories: [],
  selectedFoodItemCategories: [],
  review:[]
}),
methods: {
  getReview() {
    this.$api("review/?fooditem__restaurant_id="+this.resturantId).then(response => {
      this.review = response.data
      console.log(this.review);

    })

  },

},

mounted() {
  this.getReview()
}
}
</script>
