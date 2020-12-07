<template>
  <v-container>
    <v-card>
      <v-col> <SimpleSearch /></v-col>
      <v-col>
        <v-checkbox
          v-model="checkbox"
          style="margin-left: 10px"
          label="Has image"
        ></v-checkbox
      ></v-col>

      <div>
        <v-container fluid>
          <v-select
            v-model="selectedCounties"
            :items="counties"
            label="County"
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedServices"
            :items="filters.businessServices"
            label="Services"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedDays"
            :items="filters.daysOpen"
            label="Days Open"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedFacilities"
            :items="filters.recreationFacilities"
            label="Facilities"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedPasses"
            :items="filters.passTypes"
            label="Pass"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedTrailTypes"
            :items="filters.trailTypes"
            label="Difficulty"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-spacer></v-spacer>
          <!-- <v-col>
              <v-checkbox v-model="checkbox" label="Has image"></v-checkbox>
            </v-col> -->
        </v-container>
        <v-btn style="margin-left: 35px; margin-bottom: 10px">Apply</v-btn>
        <v-btn style="margin-left: 35px; margin-bottom: 10px">Clear</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import SimpleSearch from "../SimpleSearch";

export default {
  data() {
    return {
      filters: {
        businessServices: [
          "Sporting Goods",
          "Equipment Rental",
          "Guide",
          "Serves Food",
          "Store",
          "Allows Dogs",
          "Fuel",
          "Alcohol",
          "EV Charging",
          "Lodging",
          "SpecialOffer",
        ],
        daysOpen: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        recreationFacilities: [
          "Water Access",
          "Beach",
          "Picnic Area",
          "Viewing Area",
          "Shelter",
          "Pay Station",
          "Camping",
          "Tent Sites",
          "RV Sites",
        ],
        passTypes: [
          "No Pass Requirement",
          "Discover Pass",
          "NW Forest Pass",
          "Federal All Access Pass",
        ],
        trailTypes: [
          "Easy Access",
          "Moderate/Difficult Access",
          "Technical Access Only",
          "Non-Motorized Only",
        ],
      },
      e6: [],
      selectedCounties: [],
      selectedServices: [],
      selectedDays: [],
      selectedFacilities: [],
      selectedPasses: [],
      selectedTrailTypes: [],
      counties: [
        "Adams",
        "Asotin",
        "Benton",
        "Chelan",
        "Clallam",
        "Clark",
        "Columbia",
        "Cowlitz",
        "Douglas",
        "Ferry",
        "Franklin",
        "Garfield",
        "Grant",
        "Grays Harbor",
        "Island",
        "Jefferson",
        "King",
        "Kitsap",
        "Kittitas",
        "Klickitat",
        "Lewis",
        "Lincoln",
        "Mason",
        "Okanogan",
        "Pacific",
        "Pend Oreille",
        "Pierce",
        "San Juan",
        "Skagit",
        "Skamania",
        "Snohomish",
        "Spokane",
        "Stevens",
        "Thurston",
        "Wahkiakum",
        "Walla Walla",
        "Whatcom",
        "Whitman",
        "Yakima",
      ],
    };
  },

  components: { SimpleSearch },
};
</script>