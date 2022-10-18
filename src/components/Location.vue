
<template>
<v-card>
  <v-container>
    <div>
      <h1 id="locationName">{{ Name }}</h1>
      <h4 style="color: white">
        <i>{{ Location }}</i>
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
            @click="saveLocation(_id)"
            v-if="!isSaved"
            size="35"
            color="#671d26"
            >mdi-bookmark-plus-outline</v-icon
          >
          <v-icon v-if="isSaved" size="35" color="white"
            >mdi-bookmark-plus</v-icon
          >
          <v-icon>mdi-lead-pencil</v-icon>
        </v-col>
        <v-col align="end"></v-col>
      </v-row>

      <div v-if="uploadDisplay" class="mx-4">
        <v-card class="mx-4" align="center">
          <form @submit.prevent="onSubmit" enctype="multipart/form-data"></form>
          <v-file-input
            @change="onFileSelected"
            type="file"
            ref="file"
            accept="image/*"
            label="photo"
          ></v-file-input>
          <v-btn style="margin: 5px" @click="onUpload" small color="white"
            >Upload</v-btn
          >
        </v-card>

        <div class="message">
          <h5>{{ message }}</h5>
        </div>
      </div>

      <h3 style="color: white">Details</h3>
      <v-divider class="white"></v-divider>
      <br />

      <v-card>
        <v-row class="mx-4">
          <v-col>
            <h3 id="locationCounty">
              <i>{{ AppLabel }}</i>
              <br />
            </h3>
            {{ MapCat }}
          </v-col>
        </v-row>

        <v-row class="mx-4">
          <v-col cols="12" md="3" style="text-align: center">
            {{ Facilities }}
            <br />
            <br />
            {{ Fee }}
            <br />
            <br />
            {{ Amenities }}
            <br />
            <br />
           
          </v-col>
          <v-col cols="12" md="6" style="text-align: center">
            <img style="max-width: 66vw" :src="PhotoWeb" alt />
          </v-col>
          <v-col cols="12" md="3" style="text-align: center">
            <h3 id="locationCounty">Notes:</h3>
            <h6 id="locationCounty">{{ Notes }}</h6>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <br />
      <v-row>
        <v-col>
          <h1 style="color: white">Community Gallery</h1>
        </v-col>
        <v-col align="end">
          <v-icon @click="showUpload()" size="35" class="mx-2" color="white"
            >mdi-image-plus</v-icon
          >
        </v-col>
      </v-row>
      <v-divider class="white"></v-divider>
      <br />

      <div v-if="uploadDisplay" class="mx-4">
        <v-card class="mx-4" align="center">
          <input
            @change="onFileSelected"
            type="file"
            ref="file"
            accept="image/*"
            label="photo"
          />
          <v-btn style="margin: 5px" @click="onUpload" small color="white"
            >Upload</v-btn
          >
        </v-card>
        <br />
        <v-row justify="center">
          <v-btn v-if="hasUploadedImage"
            >Thanks! Check back soon to see your image in the gallery</v-btn
          >
        </v-row>

        <div class="message">
          <h5>{{ message }}</h5>
        </div>
        <br />
      </div>

      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in carouselItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <div
        class="mx-auto"
        style="max-width: 90vw; max-height: 45vh; margin: 0 auto"
      ></div>
    </div>

    <h3 style="color: white">Trip Reports</h3>
    <v-divider class="white"></v-divider>
    <v-row>
      <v-col>
        <v-card>
          <v-container>
            <h1>Example</h1>
            <h3>By: SomeUser</h3>
            <p>
              Donec ac risus non est mattis maximus. In sodales et nunc quis
              feugiat. Vestibulum feugiat cursus diam sed commodo. Cras pretium
              at ante sit amet lacinia. Nullam auctor nisi eget commodo
              imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aliquam in dolor id erat condimentum congue aliquet ut
              ipsum. Curabitur eleifend tincidunt lorem sit amet venenatis.
              Maecenas bibendum et felis vitae blandit. Donec blandit posuere
              orci...
            </p>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-container>
            <h1>Example</h1>
            <h3>By: SomeUser</h3>
            <p>
              Donec ac risus non est mattis maximus. In sodales et nunc quis
              feugiat. Vestibulum feugiat cursus diam sed commodo. Cras pretium
              at ante sit amet lacinia. Nullam auctor nisi eget commodo
              imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aliquam in dolor id erat condimentum congue aliquet ut
              ipsum. Curabitur eleifend tincidunt lorem sit amet venenatis.
              Maecenas bibendum et felis vitae blandit. Donec blandit posuere
              orci...
            </p>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-container>
            <h1>Example</h1>
            <h3>By: SomeUser</h3>
            <p>
              Donec ac risus non est mattis maximus. In sodales et nunc quis
              feugiat. Vestibulum feugiat cursus diam sed commodo. Cras pretium
              at ante sit amet lacinia. Nullam auctor nisi eget commodo
              imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aliquam in dolor id erat condimentum congue aliquet ut
              ipsum. Curabitur eleifend tincidunt lorem sit amet venenatis.
              Maecenas bibendum et felis vitae blandit. Donec blandit posuere
              orci...
            </p>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <br />

    <h3 style="color: white">Comments</h3>
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
    <v-card
      style="margin-bottom: 10px"
      v-for="(comment, i) in comments"
      :key="i"
    >
      <v-container>
        <p>User: {{ comment.createdByID }}</p>
        <h1>{{ comment.text }}</h1>
        <v-row>
          <v-btn>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>reply</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
  </v-card>
</template>


<script>

//v-if="['home'].indexOf($route.name) === -1"   <--put in app.vue to disable drawers
export default {
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
  data() {
    return {
      hasUploadedImage: false,
      newComment: {
        text: "",
        parentComment: "",
        childComments: [],
        createdByID: "",
        createdOn: "",
        likes: 0,
        locationID: "",
        locationContentID: ""
      },
      comments: [],

      dialog: false,

      //image upload
      selectedFile: null,
      message: "",
      image: null,

      ///
      uploadDisplay: false,
      savedLocList: null,
      isSaved: false,
      aspect: "16:9",
      loc: null,
      mapURL: "",
      carouselItems: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  methods: {
    postNewComment() {
    
    },
    //image upload methods
    onFileSelected(event) {
     
    },
    async onUpload() {
     
    },
    ///

    showUpload() {
    
    },
    saveLocation(id) {
    
    },
  },
  mounted() {
    this.mapURL =
      "https://mapswa.com/discoverwa/#15/" + this.Lat + "/" + this.Long;
  },
};
</script>