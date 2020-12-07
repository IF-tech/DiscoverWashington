<template>
  <v-card height="150">
    <v-footer padless class="font-weight-medium">
      <v-row  class="mx-8">
        <v-col cols="12" md="3" class="text-center">
          <h2>Our Mission</h2><br>
          <a href="https://www.washingtonhometown.com/about"> About Us</a><br>
           <a href="https://www.washingtonhometown.com/services">Our Data</a><br>
           <a href="https://www.washingtonhometown.com/">Community</a><br>
           <a href="https://www.washingtonhometown.com/">Local Business</a><br>
        </v-col>

        <v-col cols="12" md="6" class="text-center">
          <h2>Explore Washington</h2>

          <v-row>
          <v-col class="text-right">
          <a href="http://mapswa.com/rediscoverwa/#8/47.409/-120.273">Discover</a><br>
          <a href="http://mapswa.com/bikewa/#8/47.409/-120.273">Bike</a><br>
          <a href="http://mapswa.com/boatwa/#8/47.409/-120.273">Boat</a><br>
          <a href="http://mapswa.com/campwa/#8/47.409/-120.273">Camp</a><br>
          <a href="http://mapswa.com/dogwa/#8/47.409/-120.273">Dogs</a><br>
          <a href="http://mapswa.com/foodwa/#8/47.409/-120.273">Food</a><br> </v-col> 
          
          
          <v-col class="text-left">           
            <a href="http://mapswa.com/hikewa/#8/47.409/-120.273">Hike</a><br>
          <a href="http://mapswa.com/horsewa/#8/47.409/-120.273">Horse</a><br>
          <a href="http://mapswa.com/kidwa/#8/47.409/-120.273">Kids</a><br>
          <a href="http://mapswa.com/ohvwa/#8/47.409/-120.273">OHV</a><br>
          <a href="http://mapswa.com/snowmobilewa/#8/47.409/-120.273">Snowmobile</a><br>
           <a href="http://mapswa.com/winterwa/#8/47.409/-120.273">Winter</a><br></v-col></v-row>
          

        </v-col>
        <v-col cols="12" md="3" class="text-center">
          <h2>Download</h2>
           <a href="https://play.google.com/store/apps/details?id=com.mapswa.rediscoverwa"><v-icon style="color: #671d26" large>mdi-google-play</v-icon></a>
          <a href="https://apps.apple.com/us/app/discover-wa/id1518398606"> <v-icon style="color: #671d26" large>mdi-apple</v-icon></a><br> <br>
           <h2>Connect</h2>
           <a href="https://www.facebook.com/washingtonhometown"><v-icon style="color: #671d26" large>mdi-facebook</v-icon></a>
           <a href="https://www.instagram.com/wahometown/"><v-icon style="color: #671d26" large>mdi-instagram</v-icon></a>
           <a href="https://twitter.com/WAhometown"><v-icon style="color: #671d26" large>mdi-twitter</v-icon></a>

        </v-col>
      </v-row>


      <v-col  class="text-center" cols="12">
        <div  style="color: #671d26">
        © {{ new Date().getFullYear() }} —
        <strong >Washington Hometown</strong></div>
        <i style="color: lightgray">This website is currently in Beta development. New features added daily. Report a bug or suggest a feature. </i>
      </v-col>
    </v-footer>
  </v-card>
</template>

<style scoped lang="scss">
  .v-application a{color: #671d26
  
  } 
  
  a:-webkit-any-link {
  text-decoration: none;
  color: #671d26;
}
</style>