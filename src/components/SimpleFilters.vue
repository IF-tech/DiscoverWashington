<template lang="">
    <div>
       <v-container fluid>
    <v-row align="center">

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="selectedCounties"
          :items="counties"
          label="County"
          multiple
          deletableChips="true"
          smallChips
          hint="Search a county"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col>
           <v-checkbox
      v-model="checkbox"
      label="Has image"
    ></v-checkbox>
      </v-col>
    </v-row>
    
      

    <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header>
            <span></span>
            
                <p>More filters</p>
                
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card>
                  <SimpleFilters />
                </v-card>
              </v-expansion-panel-content>
              
            </v-expansion-panel>
          </v-expansion-panels>
  </v-container> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            e6: [],
        selectedCounties: [],
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
            
        }
    },
}
</script>