<template>
  <div>
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="344"
      >
        <v-img v-if="PhotoWeb" :aspect-ratio="16 / 9" :src="PhotoWeb"></v-img>
        <v-card-title>
          <div>
            <span class="text-wrap"
              ><h4>{{ Name }}</h4></span
            >
            <p class="text-wrap" style="font-size: 0.5em">{{ AppLabel }}</p>
            <div class="d-flex">
              <v-rating
                :value="value"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="ml-2 grey--text text--darken-2">
                <span>{{ value }}</span>
                <span>({{ reviews }})</span>
              </div>
            </div>
          </div>
          <v-spacer></v-spacer>
          <!-- <v-btn v-if="isSaved" dark small color="#671d26" style="margin-right: 10px;"> <v-icon>mdi-bookmark-plus</v-icon> Saved!</v-btn> -->
          <!-- <v-btn v-if="!isLoggedIn" dark small elevation :href="'#/login/'" color="#671d26">Login to Save Locations</v-btn> -->
          <v-icon>mdi-bookmark-plus-outline</v-icon>
          <v-icon @click="tripReport=!tripReport">mdi-pencil</v-icon>
          <v-btn
            dark
            small
            elevation
            :href="'#/location/' + LocLink"
            color="#671d26"
            >go</v-btn
          >
          <v-btn icon class="mr-0">
            <v-icon @click="locInfo = true">mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-hover>

    <v-dialog v-model="locInfo" width="50vw" height="75vh">
      <Location :Name="Name" :Lat="Lat" :Long="Long" />
    </v-dialog>

      <v-dialog v-model="tripReport" width="50vw" height="75vh">
      <TripReport :Name="Name" :LocLink="LocLink" :Lat="Lat" :Long="Long" />
    </v-dialog>
  </div>
</template>

<script>
import Location from "./Location";
import TripReport from "./TripReport";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    locInfo: false,
    tripReport: false,
    reviews: 8,
    value: 4.5,
  }),
  props: {
    id: String,
    LocLink: String,
    PhotoWeb: String,
    Name: String,
    Web: String,
    Location: String,
    Phone: String,
    Email: String,
    Hours: String,
    Directions: String,
    Management: String,
    Fee: String,
    Pass: String,
    Amenities: String,
    Features: String,
    Facilities: String,
    MoreInfo: String,
    Trail: String,
    Summer: String,
    Winter: String,
    Favorite: String,
    Difficulty: String,
    Reserve: String,
    PhoneRes: String,
    WebRes: String,
    Notes: String,
    Source: String,
    SourceWeb: String,
    Status: String,
    MapCat: String,
    Weather: String,
    Accessible: String,
    BoatDetails: String,
    WinterSurf: String,
    TrailSystem: String,
    AppLabel: String,
    Rules: String,
    RulesWeb: String,
    DogRules: String,
    CampEquip: String,
    Offer: String,
    Font: String,
    Lat: String,
    Long: String,
  },
  components: { Location, TripReport },
};
</script>

<style lang="scss">
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>