/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateLocationContent = /* GraphQL */ `
  subscription OnCreateLocationContent {
    onCreateLocationContent {
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
export const onUpdateLocationContent = /* GraphQL */ `
  subscription OnUpdateLocationContent {
    onUpdateLocationContent {
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
export const onDeleteLocationContent = /* GraphQL */ `
  subscription OnDeleteLocationContent {
    onDeleteLocationContent {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTripReport = /* GraphQL */ `
  subscription OnCreateTripReport {
    onCreateTripReport {
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
export const onUpdateTripReport = /* GraphQL */ `
  subscription OnUpdateTripReport {
    onUpdateTripReport {
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
export const onDeleteTripReport = /* GraphQL */ `
  subscription OnDeleteTripReport {
    onDeleteTripReport {
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
