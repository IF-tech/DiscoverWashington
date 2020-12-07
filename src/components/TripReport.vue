<template>
  <div>
      <v-card>
          Write a trip report for: {{Name}} 
<br>
          <!-- Calendar goes here -->
        <v-date-picker></v-date-picker>
          <!-- SportsPicker goes here -->
        
          <!-- ages Suited for goes here -->
          <!-- Trail conditions goes here -->

          
          
          
          
          
          
          </v-card> </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    id: String,
    LocLink: String,
    PhotoWeb: String,
    Name: String,
    Web: String,
    Location: String,
    Phone: String,
    Email: String,
    Hours: String,
    Directions: String,
    Management: String,
    Fee: String,
    Pass: String,
    Amenities: String,
    Features: String,
    Facilities: String,
    MoreInfo: String,
    Trail: String,
    Summer: String,
    Winter: String,
    Favorite: String,
    Difficulty: String,
    Reserve: String,
    PhoneRes: String,
    WebRes: String,
    Notes: String,
    Source: String,
    SourceWeb: String,
    Status: String,
    MapCat: String,
    Weather: String,
    Accessible: String,
    BoatDetails: String,
    WinterSurf: String,
    TrailSystem: String,
    AppLabel: String,
    Rules: String,
    RulesWeb: String,
    DogRules: String,
    CampEquip: String,
    Offer: String,
    Font: String,
    Lat: String,
    Long: String,
  },
};
</script>