<template>
  <v-container>
    <div>
      <h1 id="locationName">{{result.Name}}</h1>
      <h4 style="color:white">
        <i>{{result.Location}}</i>
      </h4>
      <v-divider class="white"></v-divider>
      <br />

      <v-card flat height="600px">
        <iframe
          :src="mapURL"
          allowtransparency="true"
          scrolling="no"
          width="100%"
          height="600vh"
          frameborder="0"
        ></iframe>
      </v-card>
      <v-row>
        <v-col>
          <v-icon
            size="35"
            color="white"
          >mdi-bookmark-plus-outline</v-icon>
          <v-icon  size="35" color="white">mdi-bookmark-plus</v-icon>
        </v-col>
        <v-col align="end"></v-col>
      </v-row>

      <!-- <div  class="mx-4">
        <v-card class="mx-4" align="center">
          <form @submit.prevent="onSubmit" enctype="multipart/form-data"></form>
          <v-file-input
            @change="onFileSelected"
            type="file"
            ref="file"
            accept="image/*"
            label="photo"
          ></v-file-input>
          <v-btn style="margin: 5px" small color="white">Upload</v-btn>
        </v-card>

        <div class="message">
          <h5>{{message}}</h5>
        </div>
      </div> -->

      <h3 style="color:white">Details</h3>
      <v-divider class="white"></v-divider>
      <br />

      <v-card>
        <v-row class="mx-4">
          <v-col>
            <h3 id="locationCounty">
              <i>{{result.AppLabel}}</i>
              <br />
            </h3>
            {{result.MapCat}}
          </v-col>
        </v-row>

        <v-row class="mx-4">
          <v-col cols="12" md="3" style="text-align: center;">
            {{result.Facilities}}
            <br />
            <br />
            {{result.Fee}}
            <br />
            <br />
            {{result.Amenities}}
            <br />
            <br />
            {{result.Sports}}
          </v-col>
          <v-col cols="12" md="6" style="text-align: center;">
            <img style="max-width: 66vw" :src="result.PhotoWeb" alt />
          </v-col>
          <v-col cols="12" md="3" style="text-align: center;">
            <h3 id="locationCounty">Notes:</h3>
            <h6 id="locationCounty">{{result.Notes}}</h6>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <br />
      <v-row>
        <v-col>
          <h1 style="color:white">Community Gallery</h1>
        </v-col>
        <v-col align="end">
          <v-icon size="35" class="mx-2" color="white">mdi-image-plus</v-icon>
        </v-col>
      </v-row>
      <v-divider class="white"></v-divider>
      <br />
<!-- 
      <div  class="mx-4">
        <v-card class="mx-4" align="center">
          <input @change="onFileSelected" type="file" ref="file" accept="image/*" label="photo" />
          <v-btn style="margin: 5px" small color="white">Upload</v-btn>
        </v-card>
        <br />
        <v-row justify="center">
          <v-btn>Thanks! Check back soon to see your image in the gallery</v-btn>
        </v-row>


        <br />
      </div> -->

      <!-- <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in carouselItems" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel> -->

      <div class="mx-auto" style="max-width: 90vw; max-height: 45vh; margin: 0 auto;"></div>
    </div>

    <h3 style="color:white">Trip Reports</h3>
    <v-divider class="white"></v-divider>
    <v-btn @click="submitTripReport()">Submit Trip Report</v-btn>
    <v-card>
      <v-text-field v-model="tripReport.title"></v-text-field>
    </v-card>
    <v-card>    <v-textarea v-model="tripReport.content"></v-textarea></v-card>

    <v-row>
      <v-col cols="12" md="3" v-for="(tripReport, i) in tripReportList"
      :key="i"
                >
        <v-card>
          <v-container>
            <h1>{{tripReport.title}}</h1>
            <h3>By: SomeUser</h3>
            <p>{{tripReport.content}}</p>
          </v-container>
        </v-card>
      </v-col>
    
    </v-row>
    <br />

    <!-- <h3 style="color:white">Comments</h3>
    <v-divider class="white"></v-divider>
    <br />

    <v-textarea
      v-model="newComment.text"
      filled
      background-color="white"
      name="input-7-4"
      value="Comment Here..."
    ></v-textarea>
    <v-btn @click="postNewComment">Add Comment</v-btn>
    <br />
    <br />
    <v-divider class="white"></v-divider>
    <br />
    <v-card style="margin-bottom: 10px" v-for="(comment, i) in comments" :key="i">
      <v-container>
        <p>User: {{comment.createdByID}}</p>
        <h1>{{comment.text}}</h1>
        <v-row>
          <v-btn>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>reply</v-btn>
        </v-row>
      </v-container>
    </v-card> -->
  </v-container>
</template>

<script>

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';

require("dotenv").config();

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      tripReportList: null,
      tripReport: {
        id: 'seloffdgfdgkmsd',
        title: '',
        content: '',
        tripReportLocationUserContentObjectId: '43534rgfte4r35g3'
        },
      result: {},
      mapURl: ''
     
    };
  },
  created() {
    window.scrollTo(0, 0);
  },

  async mounted() {
    const tripReports = `query MyQuery {
  listTripReports(limit: 3) {
    items {
      content
      title
    }
  }
}


`


      const firstQuery = `query MyQuery {
  getLocation(id: "`+this.$route.params.id+`") {
    Name
    Location
    LocLink
    AppLabel
    MapCat
    Facilities
    Fee
    Amenities
    PhotoWeb
  }
}
`;
      //searchLocations(limit: 10, filter: {Name: {matchPhrase: "Lake"}})
      console.log("Made simple API call");

      const queryResults = await API.graphql(graphqlOperation(firstQuery))
        .then((response) => {
          this.result = response.data.getLocation;
          this.mapURL =
          "https://mapswa.com/discoverwa/#15/" +
          response.data.getLocation.Latitude +
          "/" +
          response.data.getLocation.Longitude;
          console.log(response);
          console.log("API call complete");
        })
        .catch((err) => {
          console.log(err);
        });

          const listResults = await API.graphql(graphqlOperation(tripReports))
        .then((response) => {
         this.tripReportList = response.data.listTripReports.items
          console.log("response is: " + response);
          console.log("API call complete");
        })
        .catch((err) => {
          console.log(err);
        });
      
  },

  components: { },

  methods: {
  async submitTripReport() {
      const newTripReport = await API.graphql({ query: mutations.createTripReport, variables: {input: this.tripReport}})
      .then((response) => {
        console.log(response)
      });
       // equivalent to above example
    },
    
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(247, 247, 247);
}
#features {
  padding-left: 50px;
}
#notes {
  padding-right: 50px;
}
#locationName {
  background-color: #671d26;
  color: rgb(247, 247, 247);
}

#locationCounty {
  color: #671d26;
}
</style>