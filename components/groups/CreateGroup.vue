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
        New Group
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New Group</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="6"
            >
              <v-text-field
                v-model="form.name"
                label="Name"
              ></v-text-field>
              <span class="red--text row--dense" v-if="error.name">{{ error.name[0] }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('close-food-item-dialog')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="saveGroup"
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
        'name': null,
        'user': this.$store.state.modules.userInfo.userInfo.id,
      },
      error: {},
    }
  },
  methods: {
    saveGroup() {
      this.$api.post("team/", this.form).then(response => {
        this.$emit("close-food-item-dialog")
      }).catch(error => {
        this.error = error.response.data
      })
    },

  }
}

</script>


<style scoped lang="scss">

</style>
