<template>
  <div>
    <v-card justify="space-around">
      <v-container>
        <h1>Activities</h1>
        <v-row>
          <v-checkbox
            v-for="(activity, i) in filterTypes.activities"
            v-model="activitiesSelected"
            :key="i"
            :label="activity.Filter"
            :value="activity.Digraph"
            style="margin-left: 2em"
          ></v-checkbox>
        </v-row>

        <h1>Amenities</h1>
        <v-row>
          <v-checkbox
            v-for="(amenities, i) in filterTypes.amenities"
            v-model="amenitiesSelected"
            :key="i"
            :label="amenities.Filter"
            :value="amenities.Digraph"
            style="margin-left: 2em"
          ></v-checkbox>
        </v-row>

        <h1>Peak Season</h1>
        <v-row>
          <v-checkbox
            v-for="(season, i) in filterTypes.season"
            v-model="seasonsSelected"
            :key="i"
            :label="season.Filter"
            :value="season.Digraph"
            style="margin-left: 2em"
          ></v-checkbox>
        </v-row>
        <h1>Days Open</h1>
        <v-row justify="space-around">
          <v-checkbox
            v-for="(day, i) in filterTypes.dayOfWeek"
            v-model="daysSelected"
            :key="i"
            :label="day.Filter"
            :value="day.Digraph"
            multiple
          ></v-checkbox>
        </v-row>

        <v-row>
          <v-card v-if="activitiesSelected.includes('AT')"
            ><h1>ATV selected</h1></v-card
          >
        </v-row>
      </v-container>
    </v-card>

    <h1>Activities Selected: {{ activitiesSelected }}</h1>
    <h1>Days Selected: {{ daysSelected }}</h1>

    <h1>Filters Selected: {{ filtersSelected }}</h1>

    <h1>Seasons Selected: {{ seasonsSelected }}</h1>

    <h1>Amenities Selected: {{ amenitiesSelected }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapsSelected: [],
      activitiesSelected: [],
      filtersSelected: [],
      daysSelected: [],
      seasonsSelected: [],
      amenitiesSelected: [],
      filterTypes: {
        ohv: [
          {
            Filter: "Off-trail riding allowed",
            Digraph: "OT",
          },
          {
            Filter: "OHV Easy to Moderate",
            Digraph: "O1",
          },

          {
            Filter: "OHV More Difficult",
            Digraph: "O2",
          },
          {
            Filter: "OHV Most Difficult",
            Digraph: "O3",
          },

          {
            Filter: "Outdoor Seating",
            Digraph: "OS",
          },
        ],
        horse: [
          {
            Filter: "Horse Easy to Moderate",
            Digraph: "E1",
          },

          {
            Filter: "Horse More Difficult",
            Digraph: "E2",
          },
          {
            Filter: "Horse Most Difficult",
            Digraph: "E3",
          },
        ],
        hiking: [
          {
            Filter: "Hiking Easy to Moderate",
            Digraph: "H1",
          },
          {
            Filter: "Hiking Equipment Rental",
            Digraph: "RH",
          },

          {
            Filter: "Hiking More Difficult",
            Digraph: "H2",
          },
          {
            Filter: "Hiking Most Difficult",
            Digraph: "H3",
          },
          {
            Filter: "Hike Technical",
            Digraph: "H4",
          },
        ],
        fee: [
          {
            Filter: "Fee",
            Digraph: "FX",
          },
          {
            Filter: "Free",
            Digraph: "FF",
          },
        ],
        winterServices: {
          guides: [
            {
              Filter: "Snowmobile Guide",
              Digraph: "GS",
            },
            {
              Filter: "Snowshoe Guide",
              Digraph: "G2",
            },
          ],
          equipment: [],
        },
        summerServices: {
          guides: [
            {
              Filter: "Fishing Guide",
              Digraph: "GF",
            },
            {
              Filter: "Guided Tours",
              Digraph: "GT",
            },
            {
              Filter: "Horse Guide/Rides",
              Digraph: "GR",
            },
            {
              Filter: "Hunting Guide",
              Digraph: "GG",
            },
            {
              Filter: "OHV Guide",
              Digraph: "GO",
            },
          ],
          equipment: [
            {
              Filter: "Camping Equipment Rental",
              Digraph: "R1",
            },
            {
              Filter: "Fishing supplies",
              Digraph: "F1",
            },
            {
              Filter: "Jet Ski Rental",
              Digraph: "RJ",
            },
            {
              Filter: "Kayak Rental",
              Digraph: "RK",
            },
            {
              Filter: "Motor Sports Dealer",
              Digraph: "MD",
            },
            {
              Filter: "OHV Rental",
              Digraph: "RO",
            },
            {
              Filter: "Recreation Equipment Rental",
              Digraph: "RR",
            },
            {
              Filter: "River Rafting Equipment Rental",
              Digraph: "R5",
            },
            {
              Filter: "RV Dealer",
              Digraph: "DR",
            },
            {
              Filter: "Sporting goods",
              Digraph: "SR",
            },
          ],
        },
        season: [
          {
            Filter: "Early Spring",
            Digraph: "ES",
          },

          {
            Filter: "Spring",
            Digraph: "SP",
          },
          {
            Filter: "Late Spring",
            Digraph: "LS",
          },
          {
            Filter: "Summer",
            Digraph: "SM",
          },
          {
            Filter: "Fall",
            Digraph: "FA",
          },

          {
            Filter: "Late Fall",
            Digraph: "LF",
          },
          {
            Filter: "Winter",
            Digraph: "WI",
          },
          {
            Filter: "Year Round",
            Digraph: "YR",
          },
        ],
        rvAmenities: [
          {
            Filter: "Full RV Hookup",
            Digraph: "CF",
          },
          {
            Filter: "Partial RV Hookup",
            Digraph: "CP",
          },
          {
            Filter: "RV Dump",
            Digraph: "CD",
          },
          {
            Filter: "RV Electric Hookup",
            Digraph: "CE",
          },
          {
            Filter: "RV Rental",
            Digraph: "R3",
          },
          {
            Filter: "RV Sewer Hookup",
            Digraph: "R6",
          },

          {
            Filter: "RV Water Hookup",
            Digraph: "CW",
          },
        ],
        dogs: [
          {
            Filter: "Dog water station",
            Digraph: "DW",
          },
          {
            Filter: "Dogs Allowed",
            Digraph: "DA",
          },
          {
            Filter: "Dog Park",
            Digraph: "DP",
          },
          {
            Filter: "Groomer",
            Digraph: "GM",
          },
          {
            Filter: "Off-Leash Area",
            Digraph: "OL",
          },
          {
            Filter: "Pet Store",
            Digraph: "PT",
          },

          {
            Filter: "Vet",
            Digraph: "VT",
          },
        ],
        waterAccess: [
          {
            Filter: "Beach",
            Digraph: "BE",
          },
          {
            Filter: "Lake Access",
            Digraph: "LA",
          },
          {
            Filter: "Ocean Access",
            Digraph: "OC",
          },
          {
            Filter: "River Access",
            Digraph: "RI",
          },
        ],
        campgroundType: [
          {
            Filter: "Campground Big RV",
            Digraph: "CB",
          },
          {
            Filter: "Campground Cabin",
            Digraph: "CC",
          },
          {
            Filter: "Campground Tent",
            Digraph: "CT",
          },
        ],
        amenities: [
          {
            Filter: "Accessible Facilities",
            Digraph: "AF",
          },
          {
            Filter: "50 Amp Power",
            Digraph: "CV",
          },

          {
            Filter: "Bathroom",
            Digraph: "WC",
          },
          {
            Filter: "Charging Station",
            Digraph: "CS",
          },

          {
            Filter: "Day Care",
            Digraph: "DC",
          },

          {
            Filter: "Day Use Area",
            Digraph: "DU",
          },
          {
            Filter: "Fun for kids",
            Digraph: "KI",
          },
          {
            Filter: "Laundry",
            Digraph: "CL",
          },

          {
            Filter: "Open 24-7",
            Digraph: "24",
          },
          {
            Filter: "Picnic or Day Use Area",
            Digraph: "PI",
          },

          {
            Filter: "Playground",
            Digraph: "PG",
          },
          {
            Filter: "Potable Water",
            Digraph: "PW",
          },

          {
            Filter: "Pool",
            Digraph: "PO",
          },
          {
            Filter: "Shelter",
            Digraph: "1S",
          },
          {
            Filter: "Shower",
            Digraph: "SH",
          },

          {
            Filter: "WiFi",
            Digraph: "WF",
          },
          {
            Filter: "Viewpoint",
            Digraph: "VI",
          },
        ],
        foodAndDrink: [
          {
            Filter: "Beer on Tap",
            Digraph: "D6",
          },

          {
            Filter: "Brewry or Brew Pub",
            Digraph: "B4",
          },
          {
            Filter: "Cidery",
            Digraph: "C3",
          },
          {
            Filter: "Craft Dining",
            Digraph: "D5",
          },
          {
            Filter: "Distillery",
            Digraph: "D3",
          },
          {
            Filter: "Ice Cream",
            Digraph: "I1",
          },
          {
            Filter: "Sells Coffee",
            Digraph: "SC",
          },
          {
            Filter: "Sells Groceries",
            Digraph: "G1",
          },
          {
            Filter: "Serves Food",
            Digraph: "SF",
          },
          {
            Filter: "Tasting Room",
            Digraph: "W1",
          },

          {
            Filter: "Wine Bar",
            Digraph: "W3",
          },
          {
            Filter: "Wine, Spirits, Brew Pub or Bar",
            Digraph: "WB",
          },
          {
            Filter: "Winery",
            Digraph: "W2",
          },
        ],
        activities: [
          {
            Filter: "ATV",
            Digraph: "AT",
          },
          {
            Filter: "Bird Watching",
            Digraph: "BW",
          },
          {
            Filter: "Boarding",
            Digraph: "BD",
          },
          {
            Filter: "Beach Combing/Shellfish Gathering",
            Digraph: "BC",
          },

          {
            Filter: "Boating",
            Digraph: "BT",
          },

          {
            Filter: "Camping",
            Digraph: "CA",
          },

          {
            Filter: "Diving",
            Digraph: "DI",
          },
          {
            Filter: "Fishing",
            Digraph: "FI",
          },
          {
            Filter: "Hang Gliding",
            Digraph: "HA",
          },
          {
            Filter: "Hiking/Walking",
            Digraph: "HI",
          },
          {
            Filter: "Horse",
            Digraph: "HO",
          },

          {
            Filter: "Kayaking",
            Digraph: "KY",
          },
          {
            Filter: "Lodging",
            Digraph: "LG",
          },
          {
            Filter: "Motorcycle",
            Digraph: "MC",
          },
          {
            Filter: "OHVing",
            Digraph: "OH",
          },

          {
            Filter: "Rock Climbing",
            Digraph: "RC",
          },
          {
            Filter: "RV Sites",
            Digraph: "RV",
          },
          {
            Filter: "Sledding",
            Digraph: "SL",
          },
          {
            Filter: "Sailboarding/Windsurfing/Kiteboarding",
            Digraph: "SW",
          },
          {
            Filter: "Snowboarding",
            Digraph: "S2",
          },
          {
            Filter: "Snowmobiling",
            Digraph: "S1",
          },
          {
            Filter: "Snowshoeing",
            Digraph: "S3",
          },
          {
            Filter: "Swimming",
            Digraph: "SG",
          },
          {
            Filter: "Tubing",
            Digraph: "TG",
          },
          {
            Filter: "UTV",
            Digraph: "UT",
          },

          {
            Filter: "Water Access",
            Digraph: "WA",
          },
          {
            Filter: "Water Skiing",
            Digraph: "WS",
          },
          {
            Filter: "Wildlife Viewing",
            Digraph: "WV",
          },
          {
            Filter: "WATV",
            Digraph: "WT",
          },
        ],
        dayOfWeek: [
          {
            Filter: "Monday",
            Digraph: "MO",
          },
          {
            Filter: "Tuesday",
            Digraph: "TU",
          },
          {
            Filter: "Wednesday",
            Digraph: "WE",
          },
          {
            Filter: "Thursday",
            Digraph: "TH",
          },
          { Filter: "Friday", Digraph: "FR" },
          {
            Filter: "Saturday",
            Digraph: "SA",
          },
          {
            Filter: "Sunday",
            Digraph: "SU",
          },
        ],

        passesRequired: [
          {
            Filter: "Discover Pass",
            Digraph: "FD",
          },

          {
            Filter: "Federal All Access Pass",
            Digraph: "FP",
          },

          {
            Filter: "NW Forest Pass",
            Digraph: "FN",
          },
          {
            Filter: "Sno-Park Permit",
            Digraph: "FS",
          },
        ],

        boatFilters: [
          {
            Filter: "Paved Boat Launch",
            Digraph: "BP",
          },

          {
            Filter: "Boat Launch",
            Digraph: "BL",
          },

          {
            Filter: "Boat Rental",
            Digraph: "BR",
          },
        ],

        bikeFilters: [
          {
            Filter: "Mountain Biking/Gravel Biking",
            Digraph: "MB",
          },
          {
            Filter: "Em Bike/Mountain Bike",
            Digraph: "EB",
          },

          {
            Filter: "Fat Bikes - Snow",
            Digraph: "FB",
          },

          {
            Filter: "Bike Easy to Moderate",
            Digraph: "B1",
          },
          {
            Filter: "Bike More Difficult",
            Digraph: "B2",
          },
          {
            Filter: "Bike Most Difficult",
            Digraph: "B3",
          },
          {
            Filter: "Bike Rental",
            Digraph: "R4",
          },
          {
            Filter: "Biking (all varieties)",
            Digraph: "SB",
          },
          {
            Filter: "Road Biking",
            Digraph: "RB",
          },
        ],
        winterFilters: [
          {
            Filter: "Downhill Skiing",
            Digraph: "DS",
          },
          {
            Filter: "Cross Country Ski Guide",
            Digraph: "GX",
          },
          {
            Filter: "Cross Country Skiing",
            Digraph: "C1",
          },
          {
            Filter: "Dog Sledding",
            Digraph: "DG",
          },

          {
            Filter: "Downhill Equipment (Skis or Snowboards)",
            Digraph: "RD",
          },
          {
            Filter: "Cross Country Ski Equipment Rental",
            Digraph: "RX",
          },

          {
            Filter: "Ice Skating",
            Digraph: "IC",
          },
          {
            Filter: "Nordic Easy to Moderate",
            Digraph: "N1",
          },
          {
            Filter: "Nordic More Difficult",
            Digraph: "N2",
          },
          {
            Filter: "Nordic Most Difficult",
            Digraph: "N3",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>
