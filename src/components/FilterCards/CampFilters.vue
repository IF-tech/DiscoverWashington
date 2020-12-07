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
          { text: "Campground", value: "CA" },
          { text: "RV Sites", value: "RV" },
          { text: "Big RV Sites", value: "CB" },
          { text: "Tent Sites", value: "CT" },
          { text: "Camping Cabin", value: "CC" },
          { text: "Electric Hookup", value: "CE" },
          { text: "50 amp power", value: "CV" },
          { text: "Water Hookup", value: "CW" },
          { text: "Sewer Hookup", value: "R6" },
          { text: "Electric Hookup", value: "CE" },
          { text: "50 amp power", value: "CV" },
          { text: "RV Dump", value: "CD" },
          { text: "Shower", value: "SH" },
          { text: "WiFi", value: "WF" },
          { text: "Pool", value: "PO" },
          { text: "Water Access", value: "WA" },
          { text: "Laundry", value: "CL" },
          { text: "Flush Toilet", value: "CL" },
          { text: "No Road Access", value: "NR" },
          { text: "Road Access all Vehicles", value: "RA" },
          { text: "Pay station", value: "PY" },
          { text: "Bathroom", value: "WC" },
          { text: "Boat Launch", value: "BL" },
          { text: "Day Use Area", value: "DA" },
          { text: "Off-Leash Area", value: "OL" },
          { text: "Beach", value: "BE" },
          { text: "Playground", value: "PG" },
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
          { text: "Special Offer", value: "OF" },
          { text: "RV Dealer", value: "DR" },
          { text: "RV Rental", value: "R3" },
          { text: "Parts and Service", value: "PS" },
          { text: "Storage/Parking", value: "OP" },
          { text: "Serves Food", value: "SF" },
          { text: "Store", value: "ST" },
          { text: "Store: Groceries", value: "G1" },
          { text: "Store: Bike/Fish/Sporting Goods", value: "SR" },
          { text: "Fuel", value: "GA" },
          { text: "Wine, beer or spirits", value: "WBS" },
          { text: "EV charging", value: "EV" },
          { text: "Recreation Equipment Rental", value: "RR" },
          { text: "Guide Services", value: "GT" },
        ],
        passTypes: [
          { text: "No pass required", value: "FF" },
          { text: "Discover Pass", value: "FD" },
          { text: "NW Forest Pass", value: "FN" },
          { text: "Federal all access pass", value: "FP" },
        ],
        activities: [
          { text: "Motorcycle", value: "MC" },
          { text: "ATV", value: "AT" },
          { text: "UTV", value: "UT" },
          { text: "4x4", value: "44" },
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