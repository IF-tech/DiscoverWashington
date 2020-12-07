/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createLocationContent = /* GraphQL */ `
  mutation CreateLocationContent(
    $input: CreateLocationContentInput!
    $condition: ModelLocationContentConditionInput
  ) {
    createLocationContent(input: $input, condition: $condition) {
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
export const updateLocationContent = /* GraphQL */ `
  mutation UpdateLocationContent(
    $input: UpdateLocationContentInput!
    $condition: ModelLocationContentConditionInput
  ) {
    updateLocationContent(input: $input, condition: $condition) {
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
export const deleteLocationContent = /* GraphQL */ `
  mutation DeleteLocationContent(
    $input: DeleteLocationContentInput!
    $condition: ModelLocationContentConditionInput
  ) {
    deleteLocationContent(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTripReport = /* GraphQL */ `
  mutation CreateTripReport(
    $input: CreateTripReportInput!
    $condition: ModelTripReportConditionInput
  ) {
    createTripReport(input: $input, condition: $condition) {
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
export const updateTripReport = /* GraphQL */ `
  mutation UpdateTripReport(
    $input: UpdateTripReportInput!
    $condition: ModelTripReportConditionInput
  ) {
    updateTripReport(input: $input, condition: $condition) {
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
export const deleteTripReport = /* GraphQL */ `
  mutation DeleteTripReport(
    $input: DeleteTripReportInput!
    $condition: ModelTripReportConditionInput
  ) {
    deleteTripReport(input: $input, condition: $condition) {
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
