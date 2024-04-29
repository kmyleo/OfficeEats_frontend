<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        class="mb-2"
        v-bind="attrs"
        v-on="on"
      >
        New Group Member
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New Group Member</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="6"
            >
              <v-autocomplete
                v-model="form.user"
                clearable
                chips
                label="Team Member"
                :items="users"
                item-text="username"
                item-value="id"
                variant="underlined"
              ></v-autocomplete>
              <span class="red--text row--dense" v-if="error.user">{{ error.user[0] }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('close-group-member-dialog')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="addTeamMember"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      form: {
        'user': null,
        'team': this.$route.params.GroupDetail,
      },
      error: {},
      users: [],
    }
  },
  methods: {
    addTeamMember() {
      this.$api.post("teamMember/", this.form).then(response => {
        this.$emit("close-group-member-dialog")
      }).catch(error => {
        this.error = error.response.data
      })
    },
    fetchUsers() {
      this.$api.get("users/create/?is_partner=False&teammember__team__id=" + this.$route.params.GroupDetail).then(response => {
        console.log(response.data)
        this.users = response.data
      })
    },

  },
  mounted() {
    console.log(this.$route.params.GroupDetail)
    this.fetchUsers()
  }
}

</script>


<style scoped lang="scss">

</style>
