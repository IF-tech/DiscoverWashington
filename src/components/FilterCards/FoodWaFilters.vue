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
          { text: "Outdoor Seating", value: "OS" },
          { text: "Allows dogs", value: "DA" },
          { text: "Any Wine Beer or Spirits", value: "WB" },
          { text: "Winery", value: "W2" },
          { text: "Tasting Room", value: "W1" },
          { text: "Cidery", value: "C3" },
          { text: "Brewery or Brew Pub", value: "B4" },
          { text: "Distillery", value: "D3" },
          { text: "Wine Bar", value: "W3" },
          { text: "Beer on Tap", value: "D6" },
          { text: "Any food Service", value: "SF" },
          { text: "Craft Dining", value: "D5" },
          { text: "Beer on Tap", value: "D6" },
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
          { text: "Fuel", value: "GA" },
          { text: "EV charging", value: "EV" },
          { text: "Any Lodging", value: "LG" },
          { text: "Inn B&B or Resort", value: "IB" },
          { text: "Gifts Books Flowers", value: "GB" },
        ],
        passTypes: [
          { text: "No pass required", value: "FF" },
          { text: "Discover Pass", value: "FD" },
          { text: "NW Forest Pass", value: "FN" },
          { text: "Federal all access pass", value: "FP" },
        ],
        activities: [
          { text: "Off-leash area", value: "OL" },
          { text: "Water Access", value: "WA" },
          { text: "Beach", value: "BE" },
          { text: "Picnic or Day Use Area", value: "PI" },
          { text: "Viewpoint", value: "VI" },
          { text: "Pay station", value: "PY" },
          { text: "Bathroom", value: "WC" },
          { text: "Hiking/Walkig", value: "HI" },
          { text: "Camping", value: "CA" },
          { text: "RV sites", value: "RV" },
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