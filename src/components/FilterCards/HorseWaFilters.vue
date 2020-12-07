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
            label="Camp and Recreation Facilities"
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
            label="Recreation Facilities"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedPasses"
            :items="filters.passTypes"
            label="Pass Requirement"
            multiple
            deletableChips="true"
            single-line
            hide-details
            smallChips
          ></v-select>

          <v-select
            v-model="selectedActivities"
            :items="filters.activities"
            label="Activities"
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
      <!-- view digraphs -->
      <!-- <div>
        {{ "Activity Digraphs: " + selectedActivities }}
        <br />
        {{ "Services Digraphs: " + selectedServices }}
        <br />
        {{ "Days Digraphs: " + selectedDays }}
        <br />
        {{ "Pass Digraphs: " + selectedPasses }}
        <br />
        {{ "Facility Digraphs: " + selectedFacilities }}
      </div> -->
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
          { text: "Sporting Goods", value: "SR" },
          { text: "Equipment rental", value: "RH" },
          { text: "Guide", value: "GH" },
          { text: "Serves food", value: "SF" },
          { text: "Store", value: "ST" },
          { text: "Allows dogs", value: "DA" },
          { text: "Fuel", value: "GA" },
          { text: "Wine beer or spirits", value: "WB" },
          { text: "EV charging", value: "EV" },
          { text: "Lodging", value: "LG" },
          { text: "Special Offer", value: "OF" },
        ],
        daysOpen: [
          { text: "Monday", value: "MO" },
          { text: "Tuesday", value: "TU" },
          { text: "Wednesday", value: "WE" },
          { text: "Thursday", value: "TH" },
          { text: "Friday", value: "FR" },
          { text: "Saturday", value: "SA" },
          { text: "Sunday", value: "SU" },
        ],

        recreationFacilities: [
          { text: "Water Access", value: "WA" },
          { text: "Beach", value: "BE" },
          { text: "Picnic/Day Use Area", value: "PI" },
          { text: "Viewing Area/Tower", value: "VI" },
          { text: "Shelter", value: "1S" },
          { text: "Pay station", value: "PY" },
          { text: "Camping", value: "CA" },
          { text: "Tent Sites", value: "CT" },
          { text: "RV sites", value: "RV" },
          { text: "Hike in camping", value: "NR" },
        ],
        passTypes: [
          { text: "No pass required", value: "FF" },
          { text: "Discover Pass", value: "FD" },
          { text: "NW Forest Pass", value: "FN" },
          { text: "Federal all access pass", value: "FP" },
        ],
        activities: [
          { text: "Easy Trail Access", value: "H1" },
          { text: "Most Difficult Trail Access", value: "H2" },
          { text: "Technical Trail Access", value: "H4" },
          { text: "Non-motorized only", value: "NM" },
        ],
      },
      e6: [],
      selectedCounties: [],
      selectedServices: [],
      selectedDays: [],
      selectedFacilities: [],
      selectedPasses: [],
      selectedActivities: [],
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