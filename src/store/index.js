import Vue from "vue";
import Vuex from "vuex";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import Router from "../router/index";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import * as subscriptions from "../graphql/subscriptions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterCriteria: {
      activeMap: null,
      county: null,
      digraphs: [],
      resultsPage: 0,
      mapURL: "https://mapswa.com/discoverwa_dw",
    },
    filterArray: [],
    appSyncQueryString: "",
    drawerImages: {
      left:
        "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/ForestArial.jpeg",
      right:
        "https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/pexels-tim-mossholder-3222686.jpg",
    },
    activeMap: "Discover",
    activeMapLink: "https://mapswa.com/discoverwa_dw",
    mapConfig: {
      rootURL: "https://mapswa.com/",
      mapCat: "discoverwa",
      fullFrame: true,
      zoom: "#8.00/",
      latitude: "47.408841/",
      longitude: "-120.273283/",
      filtersActive: false,
      filters: {},
    },
    loadedLocation: {},
    locModal: false,
    isLoggedIn: false,
    user: {},
    userData: {},
    locList: { searchLocations: {} },
    count: 0,
    searchTerm: "",
  },
  mutations: {
    POPULATE_LIST: (state, locs) => {
      state.locList = locs;
      console.log("list mutated");
    },

    UPDATE_MAP: (state, mapURL) => {
      state.activeMapLink = mapURL;
    },
  },
  actions: {
    async populateLocList({ commit }, filters) {
      const filterArray = filters;
      let digraphMatcher = "";
      let queryString = `query MyQuery {
      searchLocations(filter: `;

      for (let i = 0; i < filterArray.length; i++) {
        if (i < filterArray.length - 1) {
          queryString =
            queryString +
            "{Filter: {match: " +
            `"` +
            filterArray[i] +
            `"` +
            " }}, and: ";
        } else {
          queryString =
            queryString + "{Filter: {match: " + `"` + filterArray[i] + `"}}`;
        }
        // if (i == filterArray.length) {
        //   queryString =
        //     queryString + "{Filter: {match: " + filterArray[i] + " },";
        // }
      }

      for (let i = 2; i < filterArray.length; i++) {
        queryString = queryString + "}";
      }

      queryString =
        queryString +
        `,limit: 10) {
      items {
        Name
        LocLink
        AppLabel
        Filter
      }
    }
  }`;

      console.log("querystring for graphql is:" + queryString);

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
    async populateLocs({ commit }, search) {
      const searchString = search;
      const queryString = `query MyQuery {
        searchLocations(filter: {Name: {match: "lake"}}, limit: 10) {
          items {
            Name
            LocLink
            Filter
            Lat
            Long
            AppLabel
          }
        }
      }
      
      `;
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
    updateMap({ commit }, mapString) {
      commit("UPDATE_MAP", mapString);
    },
  },
  modules: {},
});
