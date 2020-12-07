/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      LocLink
      PhotoWeb
      Name
      Web
      Location
      Phone
      Email
      Hours
      Directions
      Management
      Fee
      Pass
      Amenities
      Features
      Facilities
      MoreInfo
      Trail
      Summer
      Winter
      Favorite
      Difficulty
      Reserve
      PhoneRes
      WebRes
      Notes
      Source
      SourceWeb
      Status
      MapCat
      Weather
      Accessible
      BoatDetails
      WinterSurf
      TrailSystem
      AppLabel
      Rules
      RulesWeb
      DogRules
      CampEquip
      Offer
      Font
      Lat
      Long
      Filter
      Filter2
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LocLink
        PhotoWeb
        Name
        Web
        Location
        Phone
        Email
        Hours
        Directions
        Management
        Fee
        Pass
        Amenities
        Features
        Facilities
        MoreInfo
        Trail
        Summer
        Winter
        Favorite
        Difficulty
        Reserve
        PhoneRes
        WebRes
        Notes
        Source
        SourceWeb
        Status
        MapCat
        Weather
        Accessible
        BoatDetails
        WinterSurf
        TrailSystem
        AppLabel
        Rules
        RulesWeb
        DogRules
        CampEquip
        Offer
        Font
        Lat
        Long
        Filter
        Filter2
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocationContent = /* GraphQL */ `
  query GetLocationContent($id: ID!) {
    getLocationContent(id: $id) {
      id
      Location {
        id
        LocLink
        PhotoWeb
        Name
        Web
        Location
        Phone
        Email
        Hours
        Directions
        Management
        Fee
        Pass
        Amenities
        Features
        Facilities
        MoreInfo
        Trail
        Summer
        Winter
        Favorite
        Difficulty
        Reserve
        PhoneRes
        WebRes
        Notes
        Source
        SourceWeb
        Status
        MapCat
        Weather
        Accessible
        BoatDetails
        WinterSurf
        TrailSystem
        AppLabel
        Rules
        RulesWeb
        DogRules
        CampEquip
        Offer
        Font
        Lat
        Long
        Filter
        Filter2
        createdAt
        updatedAt
      }
      rootcomments {
        items {
          id
          createdBy
          content
          likes
          createdAt
          updatedAt
        }
        nextToken
      }
      tripreports {
        items {
          id
          title
          content
          likes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLocationContents = /* GraphQL */ `
  query ListLocationContents(
    $filter: ModelLocationContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Location {
          id
          LocLink
          PhotoWeb
          Name
          Web
          Location
          Phone
          Email
          Hours
          Directions
          Management
          Fee
          Pass
          Amenities
          Features
          Facilities
          MoreInfo
          Trail
          Summer
          Winter
          Favorite
          Difficulty
          Reserve
          PhoneRes
          WebRes
          Notes
          Source
          SourceWeb
          Status
          MapCat
          Weather
          Accessible
          BoatDetails
          WinterSurf
          TrailSystem
          AppLabel
          Rules
          RulesWeb
          DogRules
          CampEquip
          Offer
          Font
          Lat
          Long
          Filter
          Filter2
          createdAt
          updatedAt
        }
        rootcomments {
          nextToken
        }
        tripreports {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdBy
      locationContent {
        id
        Location {
          id
          LocLink
          PhotoWeb
          Name
          Web
          Location
          Phone
          Email
          Hours
          Directions
          Management
          Fee
          Pass
          Amenities
          Features
          Facilities
          MoreInfo
          Trail
          Summer
          Winter
          Favorite
          Difficulty
          Reserve
          PhoneRes
          WebRes
          Notes
          Source
          SourceWeb
          Status
          MapCat
          Weather
          Accessible
          BoatDetails
          WinterSurf
          TrailSystem
          AppLabel
          Rules
          RulesWeb
          DogRules
          CampEquip
          Offer
          Font
          Lat
          Long
          Filter
          Filter2
          createdAt
          updatedAt
        }
        rootcomments {
          nextToken
        }
        tripreports {
          nextToken
        }
        createdAt
        updatedAt
      }
      parentcomment {
        id
        createdBy
        locationContent {
          id
          createdAt
          updatedAt
        }
        parentcomment {
          id
          createdBy
          content
          likes
          createdAt
          updatedAt
        }
        childcomments {
          nextToken
        }
        content
        likes
        createdAt
        updatedAt
      }
      childcomments {
        items {
          id
          createdBy
          content
          likes
          createdAt
          updatedAt
        }
        nextToken
      }
      content
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy
        locationContent {
          id
          createdAt
          updatedAt
        }
        parentcomment {
          id
          createdBy
          content
          likes
          createdAt
          updatedAt
        }
        childcomments {
          nextToken
        }
        content
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTripReport = /* GraphQL */ `
  query GetTripReport($id: ID!) {
    getTripReport(id: $id) {
      id
      locationContent {
        id
        Location {
          id
          LocLink
          PhotoWeb
          Name
          Web
          Location
          Phone
          Email
          Hours
          Directions
          Management
          Fee
          Pass
          Amenities
          Features
          Facilities
          MoreInfo
          Trail
          Summer
          Winter
          Favorite
          Difficulty
          Reserve
          PhoneRes
          WebRes
          Notes
          Source
          SourceWeb
          Status
          MapCat
          Weather
          Accessible
          BoatDetails
          WinterSurf
          TrailSystem
          AppLabel
          Rules
          RulesWeb
          DogRules
          CampEquip
          Offer
          Font
          Lat
          Long
          Filter
          Filter2
          createdAt
          updatedAt
        }
        rootcomments {
          nextToken
        }
        tripreports {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      content
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listTripReports = /* GraphQL */ `
  query ListTripReports(
    $filter: ModelTripReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationContent {
          id
          createdAt
          updatedAt
        }
        title
        content
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchLocations = /* GraphQL */ `
  query SearchLocations(
    $filter: SearchableLocationFilterInput
    $sort: SearchableLocationSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchLocations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        LocLink
        PhotoWeb
        Name
        Web
        Location
        Phone
        Email
        Hours
        Directions
        Management
        Fee
        Pass
        Amenities
        Features
        Facilities
        MoreInfo
        Trail
        Summer
        Winter
        Favorite
        Difficulty
        Reserve
        PhoneRes
        WebRes
        Notes
        Source
        SourceWeb
        Status
        MapCat
        Weather
        Accessible
        BoatDetails
        WinterSurf
        TrailSystem
        AppLabel
        Rules
        RulesWeb
        DogRules
        CampEquip
        Offer
        Font
        Lat
        Long
        Filter
        Filter2
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
