<template>
  <div>
    <v-container>


      <v-row>
        <v-col cols="12" class="mb-10">
          <v-img
            class="br-10 d-flex cover-img align-end"
            cover
            :src="require('assets/images/cover-img.png')"
            gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
          >

            <div class="d-flex justify-center justify-md-space-between align-center mx-10 cover-image-content ">
              <div class="d-md-flex d-block align-center text-md-left text-center flex-wrap">
                <label for="avatarUpload" class="me-4">
                  <!-- <div class="avatar-upload">
                    <v-avatar size="160">
                      <img src="../../../assets/images/faces/big-avatar.png" alt="">
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
                  <!-- <h2 class="black--text text-md-left text-center mb-1">{{ getMe.username }}</h2> -->
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
            <div slot="boxSidebar">
              

            </div>
            <div slot="boxContent">
              <div class="px-10">
                <v-row>
                  <v-col cols="12">
                    <h1>Group Details</h1>
                  </v-col>
                  <v-col cols="12">
                    <v-card elevation="0" class="border br-10">
                      <div
                        class="py-2 px-0 px-sm-10"
                      >
                        <div class="d-flex justify-space-between">
                          <h3>Group Members</h3>
                          <v-btn depressed @click="addGroupMember">Add Members</v-btn>
                          <!--                          <p class="text-14 grey&#45;&#45;text text&#45;&#45;darken-1 mb-0 mr-2">-->
                          <!--                            Order ID:-->
                          <!--                          </p>-->
                          <!--                          <p class="mb-0 text-14 grey&#45;&#45;text text&#45;&#45;darken-4">-->
                          <!--                            9001997718074513-->
                          <!--                          </p>-->
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div v-for="(teamMember, index) in teamMembers" :key="index">
                        <div
                          class=" d-flex align-center flex-column flex-sm-row justify-space-between flex-wrap px-4 px-sm-10  pa-4"
                        >
                          <!--                          <div class="d-flex flex-column flex-sm-row align-center flex-wrap me-4">-->
                          <!--                            <v-avatar tile size="64" class="me-sm-4 mx-auto mb-3 mb-sm-0">-->
                          <!--                              <img-->
                          <!--                                :src="require(`~/assets/images/orderDetails/${item}.png`)"-->
                          <!--                                alt=""-->
                          <!--                              />-->
                          <!--                            </v-avatar>-->
                          <!--                            <div class="text-center text-sm-left">-->
                          <!--                              <div class="text-14 f-600 mb-2 mb-sm-0">-->
                          <!--                                Premium Grocery Collection-->
                          <!--                              </div>-->
                          <!--                              <div class="text-14 grey&#45;&#45;text text&#45;&#45;darken-1 mb-1 mb-sm-0">-->
                          <!--                                $250 x 1-->
                          <!--                              </div>-->
                          <!--                            </div>-->
                          <!--                          </div>-->
                          <p class="mb-0 grey--text text--darken-1 text-14 mb-3 mb-sm-0">
                            {{ teamMember.username }}
                          </p>
                          <p class="mb-0 grey--text text--darken-1 text-14 mb-3 mb-sm-0">
                            {{ teamMember.address }}
                          </p>
                          <!--                          <p class="mb-0 grey&#45;&#45;text text&#45;&#45;darken-1 text-14 mb-3 mb-sm-0">-->
                          <!--                            {{ teamMember.budget }}-->
                          <!--                          </p>-->
                          <v-btn-toggle
                            mandatory
                            dense
                          >
                            <v-btn>
                              <v-icon>mdi mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn color="red" @click="deleteTeamMembers(teamMember.id)">
                              <v-icon>mdi mdi-delete</v-icon>
                            </v-btn>

                          </v-btn-toggle>
                          <!--                          <v-btn-->
                          <!--                            text-->
                          <!--                            color=""-->
                          <!--                            class="text-capitalize font-weight-regular"-->
                          <!--                          >Write a Review-->
                          <!--                          </v-btn-->
                          <!--                          >-->
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card elevation="0" class="border br-10">
                      <div
                        class="py-2 px-0 px-sm-10"
                      >
                        <div class="d-flex justify-space-between">
                          <h3>Group Rules</h3>
                          <!--                          <v-btn depressed @click="addGroupMember">Add Members</v-btn>-->
                          <!--                          <p class="text-14 grey&#45;&#45;text text&#45;&#45;darken-1 mb-0 mr-2">-->
                          <!--                            Order ID:-->
                          <!--                          </p>-->
                          <!--                          <p class="mb-0 text-14 grey&#45;&#45;text text&#45;&#45;darken-4">-->
                          <!--                            9001997718074513-->
                          <!--                          </p>-->
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div>
                        <div
                          class=" d-flex align-center flex-column flex-sm-row justify-space-between flex-wrap px-4 px-sm-10  pa-4"
                        >
                          <v-row>
                            <v-col>
                              <v-switch
                                label="Allow BreakFast"
                                v-model="groupMemberRules.allow_breakfast"
                              ></v-switch>
                            </v-col>
                            <v-col>
                              <v-text-field
                                type="number"
                                label="BreakFast Budget ($)"
                                dense
                                outlined
                                class="mt-3"
                                v-model="groupMemberRules.breakfast_budget"
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time1"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="groupMemberRules.breakfast_time"
                                    label="Time"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-time-picker
                                  format="24hr"
                                  v-if="menu1"
                                  v-model="groupMemberRules.breakfast_time"
                                  full-width
                                  @click:minute="$refs.menu1.save(time1)"
                                ></v-time-picker>
                              </v-menu>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-switch
                                label="Allow Lunch"
                                v-model="groupMemberRules.allow_lunch"
                              ></v-switch>
                            </v-col>
                            <v-col>
                              <v-text-field
                                type="number"
                                label="Lunch Budget ($)"
                                dense
                                outlined
                                class="mt-3"
                                v-model="groupMemberRules.lunch_budget"
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-menu
                                ref="menu2"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time2"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="groupMemberRules.lunch_time"
                                    label="Time"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-time-picker
                                  format="24hr"
                                  v-if="menu2"
                                  v-model="groupMemberRules.lunch_time"
                                  full-width
                                  @click:minute="$refs.menu2.save(time2)"
                                ></v-time-picker>
                              </v-menu>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-switch
                                label="Allow Dinner"
                                v-model="groupMemberRules.allow_dinner"
                              ></v-switch>
                            </v-col>
                            <v-col>
                              <v-text-field
                                type="number"
                                label="Dinner Budget ($)"
                                dense
                                outlined
                                class="mt-3"
                                v-model="groupMemberRules.dinner_budget"
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-menu
                                ref="menu3"
                                v-model="menu3"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time3"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="groupMemberRules.dinner_time"
                                    label="Time"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-time-picker
                                  format="24hr"
                                  v-if="menu3"
                                  v-model="groupMemberRules.dinner_time"
                                  full-width
                                  @click:minute="$refs.menu3.save(time3)"
                                ></v-time-picker>
                              </v-menu>
                            </v-col>
                          </v-row>

                        </div>
                        <v-row>
                          <v-col>
                            <v-btn depressed @click="addTeamRule" color="primary" class="ml-3 mb-3">Update Rules</v-btn>
                          </v-col>
                        </v-row>
                      </div>
                    </v-card>
                  </v-col>

                </v-row>
              </div>
            </div>
          </Box>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>

    <create-group-member v-if="showCreateGroupMemberDialog" :dialog="showCreateGroupMemberDialog"
                         @close-group-member-dialog="closeCreateGroupMemberDialog"></create-group-member>

  </div>
</template>
<script>
import CreateGroupMember from "@/components/groups/CreateGroupMember.vue";
import CreateGroup from "@/components/groups/CreateGroup.vue";

export default {
  components: {CreateGroup, CreateGroupMember},
  head: {
    title: 'Order History'
  },
  data() {
    return {
      page: 1,
      showCreateGroupMemberDialog: false,
      teamMembers: [],
      // groupMemberRules: {
      //   default_rule: true,
      //   budget_per_order: 0,
      //   order_per_day: 0,
      //   team: this.$route.params.MyGroupDetail,
      // },
      groupMemberRules: {},
      time1: null,
      menu1: false,
      modal1: false,
      time2: null,
      menu2: false,
      modal2: false,
      time3: null,
      menu3: false,
      modal3: false,

    }
  },
  computed: {
    getMe() {
      return this.$store.state.modules.userInfo ? this.$store.state.modules.userInfo.userInfo : {}
    },
  },
  methods: {
    addGroupMember() {
      this.showCreateGroupMemberDialog = true
    },
    closeCreateGroupMemberDialog() {
      this.showCreateGroupMemberDialog = false
      this.fetchTeamMembers()
    },
    fetchTeamMembers() {
      this.$api.get("teamMember/?team__id=" + this.$route.params.GroupDetail).then(response => {
        this.teamMembers = response.data
      })
    },
    deleteTeamMembers(id) {
      this.$api.delete("teamMember/" + id + "/").then(response => {
        this.fetchTeamMembers()
      })
    },
    addTeamRule() {
      this.$api.put("teamRule/" + this.groupMemberRules.id + "/", this.groupMemberRules).then(response => {
        this.getTeamRule()
      }).catch(error => {
        this.error = error.response.data
      })
    },
    getTeamRule() {
      this.$api.get("teamRule/?team__id=" + this.$route.params.GroupDetail).then(response => {
        if (response.data.length !== 0) {
          this.groupMemberRules = response.data[0]
        }

      }).catch(error => {

      })
    },
  },
  mounted() {
    this.fetchTeamMembers()
    this.getTeamRule()
  }
}
</script>
<style lang="scss">

.test {
}

</style>

