<template>
  <div>
    <v-container>
    <v-toolbar color="rgb(247, 247, 247, 0.0)" flat>
      <v-icon @click="populate(newSearch)" v-if="!isLoading" color="#671d26"
      style="margin-right: 10px"
        >mdi-magnify</v-icon
      >
      <v-progress-circular
        indeterminate
        color="#671d26"
        v-if="isLoading"
      ></v-progress-circular>

      <br />

      <v-text-field
        v-model="newSearch"
        v-on:keyup.enter="populate(newSearch)"
        placeholder="Keyword"
        light
        hide-details
      ></v-text-field>
    </v-toolbar>
    </v-container>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "SimpleSearch",
  data() {
    return {
      locations: [],
      result: null,
      newSearch: "",
      isLoading: false,
    };
  },

  methods: {
    ...mapActions(["populateLocs", "advancedPopulateLocs"]),

    async populate() {
      console.log("populate function called");
      this.isLoading = true;
      await this.$store.dispatch("populateLocs", this.newSearch);
      this.locations = this.$store.state.locList;
      this.newSearch = "";
      this.isLoading = false;
    },
  },
};
</script>