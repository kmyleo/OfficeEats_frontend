<template>
  <div>
    <v-container>


      <v-row>
        <v-col cols="12" class="mb-10">
          <v-img
            class="br-10 d-flex cover-img align-end"
            cover
            :src="require('~/assets/images/cover-img.png')"
            gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
          >

            <div class="d-flex justify-center justify-md-space-between align-center mx-10 cover-image-content ">
              <div class="d-md-flex d-block align-center text-md-left text-center flex-wrap">
                <label for="avatarUpload" class="me-4">
                  <!-- <div class="avatar-upload">
                    <v-avatar size="160">
                      <img src="~/assets/images/faces/big-avatar.png" alt="">
                    </v-avatar>
                    <v-btn
                      class="avatar-upload-btn"
                      fab

                      dark
                      small
                      color="grey lighten-4"
                    >
                      <v-icon color="secondary" dark size="20">
                        mdi-camera
                      </v-icon>
                    </v-btn>
                    <input class="d-none" type="file" id="avatarUpload"/>
                  </div> -->

                </label>
                <div>
                  <!-- <h2 class="white--text text-md-left text-center mb-1">{{ getMe.username}}</h2> -->
<!--                  <div class="d-flex mb-1 justify-center justify-md-start">-->
<!--                    <v-icon size="15" class="me-2" color="white">mdi-map-marker</v-icon>-->
<!--                    <h6 class="font-weight-light white&#45;&#45;text">New York, US</h6>-->
<!--                  </div>-->
<!--                  <h6 class="font-weight-light white&#45;&#45;text">Bigtime foodie..out and out dessert person</h6>-->
                </div>
              </div>

<!--              <div class="d-none d-md-flex">-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">24</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Reviews</h6>-->
<!--                </div>-->
<!--                <div class="mx-3">-->
<!--                  <v-divider-->
<!--                    vertical-->
<!--                    dark-->
<!--                  ></v-divider>-->
<!--                </div>-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">45</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Photos</h6>-->
<!--                </div>-->
<!--                <div class="mx-3">-->
<!--                  <v-divider-->
<!--                    vertical-->
<!--                    dark-->
<!--                  ></v-divider>-->
<!--                </div>-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">1.6k</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Followers</h6>-->
<!--                </div>-->
<!--              </div>-->

            </div>

          </v-img>
        </v-col>
        <v-col cols="12">
          <Box class="dashboard-box">
            <!--            <div slot="boxSidebar">-->
            <!--              <DashboardSidebar/>-->

            <!--            </div>-->
            <div slot="boxContent">
              <div class="px-10">
                <v-row>
                  <!--                  <v-col cols="12">-->
                  <!--                    <div class="d-flex justify-space-between">-->
                  <!--                      <h1>Group List</h1>-->
                  <!--                      <v-btn @click="addGroup">Create Group</v-btn>-->
                  <!--                    </div>-->
                  <!--                  </v-col>-->
                  <v-col cols="12">
                    <div class="d-none px-4 d-md-flex mb-5">
                      <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Name </h4>
                      <!--                      <h4 class="font-600 grey&#45;&#45;text text&#45;&#45;darken-2 flex-1 mr-3">Budget </h4>-->
                      <div class="px-5">

                      </div>
                    </div>
                    <v-card
                      elevation="0"
                      class="border br-10 mb-4"
                      v-for="(n, index) in groups"
                      :key="index"
                    >
                      <div class="pa-4 d-flex align-center flex-wrap">
                        <div class="flex-1 mr-3">
                          <h4 class="font-600 mb-0 ">{{ n.name }}</h4>
                        </div>
                        <div class="flex-1 mr-3">
                          <p class="mb-0">{{ n.budget }}</p>
                        </div>
                        <v-btn
                          icon
                          color="grey"
                          class=""
                          :to="`/mygroup/MyGroupDetail/${n.id}`"
                        >
                          <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                      </div>
                    </v-card>
                  </v-col>
                  <!--                  <v-col cols="12">-->
                  <!--                    <div class="d-flex justify-center align-center justify-sm-space-between flex-wrap">-->
                  <!--                      <div class="mb-4 me-3">-->
                  <!--                        <p class="font-weight-normal mb-0 text-14">Showing 1-12 of 29 Reviews</p>-->
                  <!--                      </div>-->
                  <!--                      <div class="mb-4">-->
                  <!--                        <v-pagination-->
                  <!--                          class="food-truck-pagination"-->
                  <!--                          v-model="page"-->
                  <!--                          :length="4"-->
                  <!--                          circle-->
                  <!--                        ></v-pagination>-->
                  <!--                      </div>-->
                  <!--                    </div>-->
                  <!--                  </v-col>-->

                </v-row>
              </div>
            </div>
          </Box>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>

    <create-group v-if="showCreateGroupDialog" :dialog="showCreateGroupDialog"
                  @close-food-item-dialog="closeCreateGroupDialog"></create-group>

  </div>
</template>
<script>
import CreateGroup from "@/components/groups/CreateGroup.vue";

export default {
  components: {CreateGroup},
  head: {
    title: 'Group List'
  },
  data() {
    return {
      page: 1,
      showCreateGroupDialog: false,
      groups: []
    }
  },
  computed: {
    getMe() {
      return this.$store.state.modules.userInfo ? this.$store.state.modules.userInfo.userInfo : {}
    },
  },
  methods: {
    addGroup() {
      this.showCreateGroupDialog = true
    },
    closeCreateGroupDialog() {
      this.showCreateGroupDialog = false
      this.fetchGroup()
    },
    fetchGroup() {
      this.$api.get("team/?teammember__user__id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
        this.groups = response.data
      })
    },
  },
  mounted() {
    this.fetchGroup()
  }
}
</script>
<style lang="scss">

.test {
}

</style>

