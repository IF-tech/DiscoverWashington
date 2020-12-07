<template>
<div>
  <v-card>
    <v-tabs center-active centered show-arrows>
      <v-tab style="color: #671d26" @click="activateDiscoverMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-map</v-icon
        >Discover WA
      </v-tab>

      <v-tab style="color: #671d26" @click="activateBikeMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-bike</v-icon>Bike
      </v-tab>

      <v-tab style="color: #671d26" @click="activateBoatMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-sail-boat</v-icon
        >Boat
      </v-tab>

      <v-tab style="color: #671d26" @click="activateCampMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-tent</v-icon>Camp
      </v-tab>

      <v-tab style="color: #671d26" @click="activateDogMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-dog</v-icon>Dog
      </v-tab>

      <v-tab style="color: #671d26" @click="activateFoodMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-food</v-icon>Food
      </v-tab>

      <v-tab style="color: #671d26" @click="activateHikeMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-hiking</v-icon
        >Hike
      </v-tab>

      <v-tab style="color: #671d26" @click="activateHorseMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-horseshoe</v-icon
        >Horse
      </v-tab>

      <v-tab style="color: #671d26" @click="activateKidsMap()">
        <v-icon style="margin-right: 10px; color: #671d26"
          >mdi-car-child-seat</v-icon
        >Kids
      </v-tab>

      <v-tab style="color: #671d26" @click="activateOhvMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-motorbike</v-icon
        >OHV
      </v-tab>
      <v-tab style="color: #671d26" @click="activateWinterMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-snowflake</v-icon
        >Winter
      </v-tab>
      <v-tab style="color: #671d26" @click="activateSnowmobileMap()">
        <v-icon style="margin-right: 10px; color: #671d26">mdi-pine-tree</v-icon
        >Snowmobile
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
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
        <v-card flat>
          <v-lazy>
            <iframe
              :src="$store.state.activeMapLink"
              allowtransparency="true"
              scrolling="no"
              width="100%"
              :height="mapHeight"
              frameborder="0"
            ></iframe>
          </v-lazy>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
 <v-row justify="center">
          <v-btn text @click="openMapWindow($store.state.activeMapLink)">
            <v-icon>mdi-arrow-expand-all</v-icon>Full Frame
          </v-btn>
        </v-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      mapHeight: "600vh",
      activeFilters: {},
      mapQueryObject: {
        rootURL: "https://mapswa.com/",
        mapCat: "discoverwa",
        fullFrame: true,
        zoom: "#8.00/",
        latitude: "47.408841/",
        longitude: "-120.273283/",
        filtersActive: false,
      },
      activeMapLink: "https://mapswa.com/discoverwa_dw",
      activeMapCategory: "Discover",
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
  methods: {
    setActiveMapLink(
      rootURL,
      zoom,
      lat,
      long,
      filtersActive,
      businessFilters,
      dayFilters,
      recreationFilters,
      passFilters,
      activityFilters
    ) {
      let mapLink = rootURL + zoom + lat + long;
      if (filtersActive) {
        this.activeMapLink = mapLink;
        console.log("filters active");
      } else {
        this.activeMapLink = mapLink;
      }
    },
    activateDiscoverMap() {
      this.$store.state.activeMap = "Discover";
      this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/ForestArial.jpeg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/pexels-tim-mossholder-3222686.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/discoverwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateBikeMap() {
      this.$store.state.activeMap = "Bike";
      this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/bike1-dominika-roseclay-4318198.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/bike2-haydan-assoendawy-2883462.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/bikewa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateBoatMap() {
      this.$store.state.activeMap = "Boat";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/boat-felix-mittermeier-1039120.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/boat2-josh-hild-2422557.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/boatwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateCampMap() {
      this.$store.state.activeMap = "Camp";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/camp1-roxana-ioana-luca-2419278.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/camp2-daniel-joseph-petty-756780.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/campwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateDogMap() {
      this.$store.state.activeMap = "Dog";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/dog1-chris-f-1144410.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/dog2-1254140.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/dogwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateFoodMap() {
      this.$store.state.activeMap = "Food";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/food1.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/food2-breakingpic-3044.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/foodwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateHikeMap() {
      this.$store.state.activeMap = "Hike";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/hike1-1194235.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/hike2-lalu-fatoni-732632.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/hikewa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateHorseMap() {
      this.$store.state.activeMap = "Horse";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/horse1-helena-lopes-3764465.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/horse2-pixabay-210237.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/horsewa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateKidsMap() {
      this.$store.state.activeMap = "Kid";
       this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/kids1-2143761.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/kid2-syrikova-3933989.jpg";
      this.setActiveMapLink(
        "https://mapswa.com/kidwa_dw/",
        "#8.00/",
        "47/",
        "-120/"
      );
    },
    activateOhvMap() {
    this.$store.state.activeMap = "OHV";
     this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/Offroad1-bartosz-bartkowiak-3699828.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/offroad2.jpg";
      this.setActiveMapLink("https://mapswa.com/ohvwa_dw/", "#8.00/", "47/", "-120/");
    },
        activateWinterMap() {
    this.$store.state.activeMap = "Winter";
    this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/home/pexels-burak-k-1978126.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/home/pexels-francesco-ungaro-5101326.jpg";
      this.setActiveMapLink("https://mapswa.com/winterwa_dw/", "#8.00/", "47/", "-120/");
    },
        activateSnowmobileMap() {
    this.$store.state.activeMap = "Snowmobile";
     this.$store.state.drawerImages.left = "https://wht-public-assets.s3-us-west-2.amazonaws.com/snowmobile1-sebastian-voortman-804572.jpg";
      this.$store.state.drawerImages.right = "https://wht-public-assets.s3-us-west-2.amazonaws.com/snowmobile2-jarod-lovekamp-2404443.jpg";
      this.setActiveMapLink("https://mapswa.com/snowmobilewa_dw/", "#8.00/", "47/", "-120/");
    },
    openMapWindow(mapLink) {
      window.open(mapLink, "Full Frame Map", "modal=yes,alwaysRaised=yes");
    },
    clicked() {
      console.log("clicked");
    },
    mapQueryString() {
      const queryParams = this.mapQueryObject;
      let queryString = queryParams.rootURL;
      //   if (this.mapQueryObject.fullFrame == true) {
      //     queryString = queryString + "_dw/";
      //   } else {
      //     queryString += "/";
      //   }
      //   queryString += queryParams.zoom;
      //   queryString += queryParams.latitude;
      //   queryString += queryParams.longitude;

      return queryString;
    },
  },
  computed: {},
};
</script>