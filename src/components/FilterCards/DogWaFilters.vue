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
          { text: "Special Offer", value: "OF" },
          { text: "Serves Food", value: "SF" },
          { text: "Outdoor Seating", value: "GS" },
          { text: "Ice Cream", value: "I1" },
          { text: "Store", value: "ST" },
          { text: "Fuel", value: "GA" },
          { text: "Wine beer or spirits", value: "WBS" },
          { text: "EV charging", value: "EV" },
          { text: "Lodging", value: "LG" },
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
          { text: "Pay station", value: "PY" },
          { text: "Bathroom", value: "WC" },
          { text: "Camping", value: "CA" },
          { text: "RV sites", value: "RV" },
          { text: "Picnic or Day Use Area", value: "PI" },
          { text: "Viewpoint", value: "VI" },
          { text: "Beach", value: "BE" },
          { text: "Water Access", value: "WA" },
          { text: "Hiking", value: "HI" },
        ],
        passTypes: [
          { text: "No pass required", value: "FF" },
          { text: "Discover Pass", value: "FD" },
          { text: "NW Forest Pass", value: "FN" },
          { text: "Federal all access pass", value: "FP" },
        ],
        activities: [
          { text: "Off-Leash Area/Dog Park", value: "DP" },
          { text: "Dog Water Station", value: "DW" },
          { text: "Pet Store", value: "PT" },
          { text: "Groomer", value: "GM" },
          { text: "Vet", value: "VT" },
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