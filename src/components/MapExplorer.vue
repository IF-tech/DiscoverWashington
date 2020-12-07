<template>
  <v-row no-gutters>
    <v-col>
      <div>
        <v-card>
          <!-- <v-card><v-img src="https://picsum.photos/1000/75"></v-img></v-card> -->
          <v-tabs center-active centered show-arrows>
            <v-tab-item>
              <v-card flat>
                <v-lazy>
                  <iframe
                    src="https://mapswa.com/discoverwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/bikewa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="yes"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/boatwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/campwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/dogwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/foodwa_dw/#7.7/47.385/-120.054"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/hikewa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/horsewa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/kidwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat :height="mapHeight">
                <v-lazy>
                  <iframe
                    style="display: none"
                    src="https://mapswa.com/ohvwa_dw/#8/47.409/-120.273"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                    onload="this.style.display='block';"
                    width="100%"
                    :height="mapHeight"
                    frameborder="0"
                  ></iframe>
                </v-lazy>
              </v-card>
            </v-tab-item>
            <v-tab style="color: #671d26" @click="activateDiscoverMap()">
              <v-icon style="margin-right: 10px; color: #671d26">mdi-map</v-icon
              >Discover WA
            </v-tab>

            <v-tab style="color: #671d26" @click="activateBikeMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-bike</v-icon
              >Bike
            </v-tab>

            <v-tab style="color: #671d26" @click="activateBoatMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-sail-boat</v-icon
              >Boat
            </v-tab>

            <v-tab style="color: #671d26" @click="activateCampMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-tent</v-icon
              >Camp
            </v-tab>

            <v-tab style="color: #671d26" @click="activateDogMap()">
              <v-icon style="margin-right: 10px; color: #671d26">mdi-dog</v-icon
              >Dog
            </v-tab>

            <v-tab style="color: #671d26" @click="activateFoodMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-food</v-icon
              >Food
            </v-tab>

            <v-tab style="color: #671d26" @click="activateHikeMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-hiking</v-icon
              >Hike
            </v-tab>

            <v-tab style="color: #671d26" @click="activateHorseMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-horseshoe</v-icon
              >Horse
            </v-tab>

            <v-tab style="color: #671d26" @click="activateKidsMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-car-child-seat</v-icon
              >Kids
            </v-tab>

            <v-tab style="color: #671d26" @click="activateOhvMap()">
              <v-icon style="margin-right: 10px; color: #671d26"
                >mdi-motorbike</v-icon
              >OHV
            </v-tab>
          </v-tabs>
        </v-card>

        <v-row justify="center">
          <v-btn text @click="openMapWindow(activatedLink)">
            <v-icon>mdi-arrow-expand-all</v-icon>Full Frame
          </v-btn>
        </v-row>
      </div>
    </v-col>
    <!-- <v-col cols="4">
       <v-card  max-height="600px">
           <v-card-title><BrowserSearch /> <v-btn @click="getRandom"><v-icon>mdi-dice-multiple</v-icon> Random</v-btn></v-card-title>
           <v-row>
              <v-col max-height="150px"
              v-for="(loc, i) in locations"
                :key="i"
              > <LocationCard  max-height="150px"
        
      
        :id="loc._id"
        :Name="loc.Name"
        :PhotoWeb="loc.PhotoWeb"
        :Location="loc.Location"
        :MapCat="loc.MapCat"
        :Features="loc.AppLabel"
        :LocLink="loc.LocLink"
      ></LocationCard></v-col>
                

      </v-row>
       </v-card>
   </v-col> -->
  </v-row>
</template>

<style lang="scss">
html,
body {
  height: 100vh;
}
</style>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Filterbar from "./Filterbar";

export default {
  data() {
    return {
      mapHeight: "600vh",
      page: 1,
      limit: 4,
      newSearch: "",
      locations: [],
      activatedLink: "https://mapswa.com/discoverwa_dw/#8/47.409/-120.273",
      maps: {
        discover: {
          link: "https://mapswa.com/discoverwa_dw/#8/47.409/-120.273",
        },
        bike: {
          link: "https://mapswa.com/bikewa_dw/#8/47.409/-120.273",
        },
        boat: {
          link: "https://mapswa.com/boatwa_dw/#8/47.409/-120.273",
        },
        camp: {
          link: "https://mapswa.com/campwa_dw/#8/47.409/-120.273",
        },
        dog: {
          link: "https://mapswa.com/dogwa_dw/#8/47.409/-120.273",
        },
        food: {
          link: "https://mapswa.com/foodwa_dw/#8/47.409/-120.273",
        },
        hike: {
          link: "https://mapswa.com/hikewa_dw/#8/47.409/-120.273",
        },
        horse: {
          link: "https://mapswa.com/horsewa_dw/#8/47.409/-120.273",
        },
        kids: {
          link: "https://mapswa.com/kidwa_dw/#8/47.409/-120.273",
        },
        ohv: {
          link: "https://mapswa.com/ohvwa_dw/#8/47.409/-120.273",
        },
      },
       filterTypes: {
          ohv: [        {
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
        },],
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

  props: {},
  mounted() {},
  methods: {
    activateDiscoverMap() {
      this.activatedLink = this.maps.discover.link;
    },
    activateBikeMap() {
      this.activatedLink = this.maps.bike.link;
    },
    activateBoatMap() {
      this.activatedLink = this.maps.boat.link;
    },
    activateCampMap() {
      this.activatedLink = this.maps.camp.link;
    },
    activateDogMap() {
      this.activatedLink = this.maps.dog.link;
    },
    activateFoodMap() {
      this.activatedLink = this.maps.food.link;
    },
    activateHikeMap() {
      this.activatedLink = this.maps.hike.link;
    },
    activateHorseMap() {
      this.activatedLink = this.maps.horse.link;
    },
    activateKidsMap() {
      this.activatedLink = this.maps.kids.link;
    },
    activateOhvMap() {
      this.activatedLink = this.maps.ohv.link;
    },
    openMapWindow(mapLink) {
      window.open(mapLink, "Full Frame Map", "modal=yes,alwaysRaised=yes");
    },
    clicked() {
      console.log("clicked");
    },
  },
  components: { Filterbar },
};
</script>