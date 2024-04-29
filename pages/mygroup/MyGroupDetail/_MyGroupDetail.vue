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
            <div slot="boxSidebar">
              <!-- <DashboardSidebar/> -->

            </div>
            <div slot="boxContent">
              <div class="px-10">
                <v-data-table
                  :headers="headers"
                  :items="foodHistory"
                  class="elevation-1"
                  :search="search"
                >
                  <template v-slot:top>
                    <v-toolbar
                      flat
                    >
                      <v-toolbar-title>{{ username.username }} Upcoming Meals</v-toolbar-title>

                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                      <v-dialog
                        v-model="dialog"
                        max-width="500px"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Update the Meal Delivery Time</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
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
                                        v-model="editedItem.time"
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
                                      v-model="editedItem.time"
                                      full-width
                                      @click:minute="$refs.menu2.save(time2)"
                                    ></v-time-picker>
                                  </v-menu>
                                </v-col>
                                <v-col>
                                  <v-checkbox
                                    v-model="editedItem.set_away"
                                    label="Set Away"
                                  ></v-checkbox>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="close"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="save"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize"
                    >
                      Reset
                    </v-btn>
                  </template>
                </v-data-table>
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
      foodHistory: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Date', value: 'date'},
        {text: 'Time', value: 'time'},
        {text: 'Meal Type', value: 'type'},
        {text: 'Is Away', value: 'set_away'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedIndex: -1,
      editedItem: {
        time: null
      },
      groupMemberRules: {},
      time2: null,
      menu2: false,
      modal2: false,
      search: ''

    }
  },
  computed: {
    username() {
      return this.$store.state.modules.userInfo.userInfo
    },
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
      this.$api.get("food_history/?teammember__team__id=" + this.$route.params.MyGroupDetail + "&teammember__user__id=" + this.username.id).then(response => {
        this.foodHistory = response.data
      })
    },
    editItem(item) {
      this.editedIndex = this.foodHistory.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, {})
        this.editedIndex = -1
      })
    },
    save() {
      this.$api.put("food_history/" + this.editedItem.id + "/", this.editedItem).then(response => {
        this.fetchTeamMembers()
        this.close()
      }).catch(error => {
        this.error = error.response.data
      })

    },

  },
  mounted() {
    this.fetchTeamMembers()
  }
}
</script>
<style lang="scss">

.test {
}

</style>

