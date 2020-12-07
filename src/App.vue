<template>
  <v-app id="discoverwa">
    <v-system-bar app height="50vh" color="#671d26">
      <v-img
        style="margin-right: 15px"
        max-width="40px"
        src="https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/WHTLogo.png"
      ></v-img>
      <v-layout>
        <v-row no-gutters max-height="50vh"
          ><h2 style="color: white">Washington Hometown (Dev)</h2></v-row
        >
      </v-layout>

      <v-spacer></v-spacer>
      <v-btn @click="signOut()" v-if="this.$store.state.isLoggedIn"
        >Sign Out</v-btn
      >
      <v-btn
        @click="signInDialog = !signInDialog"
        v-if="!this.$store.state.isLoggedIn"
        >Sign In</v-btn
      >
      <v-btn
        @click="signUpDialog = !signUpDialog"
        v-if="!this.$store.state.isLoggedIn"
        class="leftRightMargin"
        >Sign Up</v-btn
      >
    </v-system-bar>

    <!-- Filter and search drawers -->
    <v-navigation-drawer
      :mini-variant.sync="mini"
      mini-variant-width="50"
      permanent
      app
      clipped
      left
      v-model="drawer"
      width="33vw"
    >
      <v-img height="100%" :src="$store.state.drawerImages.left">
        <v-list>
          <v-list-item>
            <v-btn round @click.stop="mini = !mini">
              <v-icon color="#671d26">mdi-filter</v-icon>
            </v-btn></v-list-item
          >
          <v-list-item>
            <v-layout>
              <DiscoverWaFilters v-if="$store.state.activeMap == 'Discover'">
              </DiscoverWaFilters>

              <BikeWaFilters v-if="$store.state.activeMap == 'Bike'">
              </BikeWaFilters>
              <BoatWaFilters v-if="$store.state.activeMap == 'Boat'">
              </BoatWaFilters>
              <CampWaFilters v-if="$store.state.activeMap == 'Camp'">
              </CampWaFilters>
              <KidsWaFilters v-if="$store.state.activeMap == 'Kid'">
              </KidsWaFilters>
              <DogWaFilters v-if="$store.state.activeMap == 'Dog'">
              </DogWaFilters>
              <FoodWaFilters v-if="$store.state.activeMap == 'Food'">
              </FoodWaFilters>
              <HikeWaFilters v-if="$store.state.activeMap == 'Hike'">
              </HikeWaFilters>
              <HorseWaFilters v-if="$store.state.activeMap == 'Horse'">
              </HorseWaFilters>
              <OHVWaFilters v-if="$store.state.activeMap == 'OHV'">
              </OHVWaFilters>
              <SnowmobileWaFilters
                v-if="$store.state.activeMap == 'Snowmobile'"
              >
              </SnowmobileWaFilters>
              <WinterWaFilters v-if="$store.state.activeMap == 'Winter'">
              </WinterWaFilters>
            </v-layout>
          </v-list-item>
        </v-list>
      </v-img>
    </v-navigation-drawer>

    <v-navigation-drawer
      :mini-variant.sync="mini2"
      mini-variant-width="50"
      app
      permanent
      clipped
      right
      v-model="drawer2"
      width="33vw"
    >
    <v-img height="100%" :src="this.$store.state.drawerImages.right">
      <v-list>
        <v-list-item>
          <v-btn @click.stop="mini2 = !mini2">
            <v-icon  color="#671d26">mdi-dots-horizontal</v-icon>
          </v-btn></v-list-item
        >
        
        <v-list-item>
          
          <v-container>
              
            <v-card>
            <v-row style="margin-left: 15px">
              <SimpleSearch />
              <v-btn
                @click.stop="mini = !mini"
                text
                style="margin-top: 25px; color: #671d26"
              >
                <v-icon color="#671d26">mdi-filter</v-icon> Filters</v-btn
              >
            </v-row>
                </v-card>

            <v-divider></v-divider>
            <v-row
            v-if="!mini2"
            >
              <v-col
                
                cols="12"
                md="6"
                v-for="(loc, i) in this.$store.state.locList.searchLocations
                  .items"
                :key="i"
              >
                <LocationCard
                  :id="loc.id"
                  :Name="loc.Name"
                  :PhotoWeb="loc.PhotoWeb"
                  :Location="loc.Location"
                  :MapCat="loc.MapCat"
                  :AppLabel="loc.AppLabel"
                  :LocLink="loc.LocLink"
                  :Lat="loc.Lat"
                  :Long="loc.Long"
                ></LocationCard>
              </v-col>
            </v-row>
        
          
        
          </v-container>
        
        </v-list-item>
          
      </v-list>
      </v-img>
    </v-navigation-drawer>

    <v-main>
      <news-marquee></news-marquee>
      <router-view></router-view>
    </v-main>

    <!-- dialogs -->
    <div class="text-xs-center">
      <v-dialog v-model="signUpDialog" width="500">
        <Authenticator :registerState="true" />
      </v-dialog>
    </div>

    <v-dialog v-model="signInDialog" width="500">
      <Authenticator :registerState="false" :loginState="true" />
    </v-dialog>

    <Footer></Footer>
  </v-app>
</template>


<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import NewsMarquee from "./components/NewsMarquee";
import SimpleSearch from "./components/SimpleSearch";
import SimpleFilters from "./components/SimpleFilters";
import LocationCard from "./components/LocationCard";
import Footer from "./components/Footer";
import Filterbar from "./components/Filterbar";
import FilterCard from "./components/FilterCard";
import Signup from "./views/auth/Signup";
import Authenticator from "./views/auth/Authenticator";
import Login from "./views/auth/Login";
import { VTextMarquee } from "vue-text-marquee";
import { Auth } from "aws-amplify";

//Filter Cards
import DiscoverWaFilters from "./components/FilterCards/DiscoverWaFilters";
import BikeWaFilters from "./components/FilterCards/BikeWaFilters";
import CampWaFilters from "./components/FilterCards/CampFilters";
import BoatWaFilters from "./components/FilterCards/BoatFilters";
import DogWaFilters from "./components/FilterCards/DogWaFilters";
import FoodWaFilters from "./components/FilterCards/FoodWaFilters";
import HikeWaFilters from "./components/FilterCards/HikeWaFilters";
import HorseWaFilters from "./components/FilterCards/HorseWaFilters";
import KidsWaFilters from "./components/FilterCards/kidWaFilters";
import OHVWaFilters from "./components/FilterCards/ohvWaFilters";
import SnowmobileWaFilters from "./components/FilterCards/SnowmobileFilters";
import WinterWaFilters from "./components/FilterCards/WinterFilters";

export default {
  name: "App",

  components: {
    NewsMarquee,
    SimpleSearch,
    Auth,
    LocationCard,
    Footer,
    SimpleFilters,
    Signup,
    Login,
    Filterbar,
    FilterCard,
    Authenticator,
    DiscoverWaFilters,
    BikeWaFilters,
    BoatWaFilters,
    CampWaFilters,
    DogWaFilters,
    FoodWaFilters,
    HikeWaFilters,
    HorseWaFilters,
    KidsWaFilters,
    OHVWaFilters,
    SnowmobileWaFilters,
    WinterWaFilters,
  },

  data: () => ({
    navImages: {
      left: "",
      right: "",
    },
    drawerImages: {
      discover: {
        left: "",
        right: "",
      },
      winter: {
        left:
          "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/home/pexels-burak-k-1978126.jpg",
        right:
          "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/home/pexels-francesco-ungaro-5101326.jpg",
      },
    },
    mini: true,
    mini2: true,
    drawer: false,
    drawer2: false,
    signInDialog: false,
    signUpDialog: false,
    locationDialog: false,
  }),
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.$store.state.user = user;
        this.$store.state.isLoggedIn = true;
      })
      .catch(() => console.log("not signed in..."));
  },
  methods: {
    async signOut() {
      await Auth.signOut()
        .then((data) => {
          console.log("User Logged Out");
          this.$store.state.isLoggedIn = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
$brand-primary: #671d26;
$brand-secondary: rgb(247, 247, 247);

#app {
  min-height: 100%;
  background-color: $brand-primary;
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100%; // add this rule

  overflow-x: hidden;
  
}

.leftRightMargin {
  margin-left: 10px;
  margin-right: 10px;
}

:root {
  --amplify-primary-color: #671d26;
  --amplify-primary-tint: #a12b39;
  --amplify-primary-shade: #47141a;
}

.v-responsive__content{
  overflow-y: auto
  

}

::-webkit-scrollbar {display:none;}


</style>