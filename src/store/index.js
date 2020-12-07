import Vue from 'vue'
import Vuex from 'vuex'
import {Auth} from 'aws-amplify'
import { API, graphqlOperation } from "aws-amplify";
import Router from "../router/index";

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterArray: [],
    appSyncQueryString: "",
    drawerImages: {
      left: "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/ForestArial.jpeg",
      right: "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/pexels-tim-mossholder-3222686.jpg"
    },
    activeMap: "Discover",
    activeMapLink: "https://mapswa.com/discoverwa_dw",
    mapConfig:{
      rootURL: "https://mapswa.com/",
      mapCat: "discoverwa",
      fullFrame: true,
      zoom: "#8.00/",
      latitude: "47.408841/",
      longitude: "-120.273283/",
      filtersActive: false,
      filters: {

      },

    },
    loadedLocation: {},
    locModal: false,
    isLoggedIn: false,
    user: {
    },
    userData: {},
    locList: {searchLocations: {}},
    count: 0,
    searchTerm: "",
  },
  mutations: {
    POPULATE_LIST: (state, locs) => {
      state.locList = locs;
      console.log("list mutated");
    },

    UPDATE_MAP: (state, mapURL) =>{
      state.activeMapLink = mapURL
    }

  },
  actions: {
  async populateLocs({ commit }, search) {
      const searchString = search;
      const queryString =
      `query MyQuery {
        searchLocations(limit: 10, filter: {Name: {matchPhrase: "` + searchString + `"}}) {
          items {
            Name
            LocLink
            Lat
            Long
            id
            PhotoWeb
            AppLabel
          }
        }
      }
      
      `
      console.log("Made simple search call");

      const queryResults = await API.graphql(graphqlOperation(queryString))
        .then((response) => {
          console.log(response);
          commit("POPULATE_LIST", response.data);
          console.log("API call complete");
        })
        .catch((err) => {
          console.log(err);
        });
      },
  updateMap({commit}, mapString){
    commit("UPDATE_MAP", mapString);
  }
   
  },
  modules: {
  }
})
