const filters = {
  discoverWaFilters: {
    businesses: {
      featured: false, //IT
      dealer: false, //MD
      rental: false, //RS
      guide: false, //GS
      food: false, //SF
      store: false, //ST
      dogs: false, //DA
      fuel: false, //GA
      alcohol: false, //WB
      ev: false, //EV
      lodging: false, //LG
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      offLeash: false, //OL
      boatLaunch: false, //BL
      swimmingPool: false, //PO
      beach: false, //BE
      pavedLaunch: false, //BP
      payStation: false, //PY
      bathroom: false, //WC
      camping: false, //CA
      rvSites: false, //RV
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      hiking: false, //HI
      horse: false, //HO
      mountainBike: false, //MB
      roadBike: false, //RB
      motorcycle: false, //MC
      atv: false, //AT
      fourWheel: false, //44
      fishing: false, //FI
      boating: false, //BT
    },
  },
  bikeWaFilters: {
    businesses: {
      bikeStore: false, //SR
      rental: false, //B4
      guide: false, //GS
      food: false, //SF
      store: false, //ST
      dogs: false, //DA
      fuel: false, //GA
      alcohol: false, //WBS
      ev: false, //EV
      lodging: false, //LG
      specialOffer: false, //OF
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      noMotorizedUse: false, //NM
      picnicArea: false, //PT
      Shelter: false, //1S
      viewPoint: false, //VT
      beach: false, //BE
      payStation: false, //PY
      bathroom: false, //WC
      camping: false, //CA
      tentSites: false, //CT
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      mountainBiking: false, //MB
      roadBiking: false, //RB
      noMotorized: false, //NM
      easyTrail: false, //B1
      difficultTrail: false, //B2
    },
  },
  boatWaFilters: {
    businesses: {
      dealer: false, //MD
      rental: false, //RS
      guide: false, //GS
      food: false, //SF
      raftRental: false, //RR
      kayakRental: false, //KR
      store: false, //ST
      sportingGoods: false, //SR
      dogs: false, //DA
      fuel: false, //GA
      alcohol: false, //WBS
      ev: false, //EV
      lodging: false, //LG
      specialOffer: false, //OF
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      anyBoatLaunch: false, //BL
      pavedLaunch: false, //BP
      beach: false, //BE
      kayakTrailStop: false, //BP
      payStation: false, //PY
      bathroom: false, //WC
      camping: false, //CA
      lakeAccess: false, //LA
      riverAccess: false, //RI
      oceanAccess: false, //OC
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      fishing: false, //FI
      kayaking: false, //KY
      sailBoarding: false, //SW
      waterSkiing: false, //WS
      swimming: false, //WS
      tubing: false, //TU
      beachCombing: false, //BC
    },
  },
  campWaFilters: {
    businesses: {
      specialOffer: false, //OF
      rvDealer: false, //DR
      rvRental: false, //R3
      partsAndService: false, //PS
      storageParking: false, //OP
      servesFood: false, //SF
      store: false, //ST
      storeGroceries: false, //G1
      storeSportingGoods: false, //SR
      fuel: false, //GA
      alcohol: false, //WBS
      evCharging: false, //EV
      recreationEquipmentRental: false, //RR
      guideServices: false, //GT
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      campground: false, //CA
      rvSites: false, //RV
      bigRvSites: false, //CB
      tentSites: false, //CT
      campingCabin: false, //CC
      electricHookup: false, //CE
      fiftyAmpPower: false, //CV
      waterHookup: false, //CW
      sewerHookup: false, //R6
      electricHookup: false, //CE
      fiftyAmpPower: false, //CV
      rvDump: false, //CD
      shower: false, //SH
      wiFi: false, //WF
      pool: false, //PO
      waterAccess: false, //WA
      laundry: false, //CL
      flushToilet: false, //CL
      noRoadAccess: false, //NR
      roadAccessAllVehicles: false, //RA
      paystation: false, //PY
      bathroom: false, //WC
      boatLaunch: false, //BL
      dayUseArea: false, //DA
      offLeashArea: false, //OL
      beach: false, //BE
      playground: false, //PG
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      motorcycle: false, //MC
      ATV: false, //AT
      UTV: false, //UT
      fourByFour: false, //44
    },
  },
  dogWaFilters: {
    businesses: {
      SpecialOffer: false, //OF
      ServesFood: false, //SF
      OutdoorSeating: false, //GS
      IceCream: false, //I1
      Store: false, //ST
      Fuel: false, //GA
      Winebeerorspirits: false, //wBS
      EVcharging: false, //EV
      Lodging: false, //LG
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      payStation: false, //PY
      Bathroom: false, //WC
      Camping: false, //CA
      RVsites: false, //RV
      PicnicorDayUseArea: false, //PI
      Viewpoint: false, //VI
      Beach: false, //BE
      WaterAccess: false, //WA
      Hiking: false, //HI
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      OffLeashArea: false, //DP
      DogWaterStation: false, //DW
      PetStore: false, //PT
      Groomer: false, //GM
      Vet: false, //VT
    },
  },
  foodWaFilters: {
    businesses: {
      SpecialOffer: false, //OF
      OutdoorSeating: false, //OS
      Allowsdogs: false, //DA
      AnyWineBeerorSpirits: false, //WB
      Winery: false, //W2
      TastingRoom: false, //W1
      Cidery: false, //C3
      BreweryorBrewPub: false, //B4
      Distillery: false, //D3
      WineBar: false, //W3
      BeeronTap: false, //D6
      AnyfoodService: false, //SF
      CraftDining: false, //D5
      BeeronTap: false, //D6
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      Fuel: false, //GA
      EVcharging: false, //EV
      AnyLodging: false, //LG
      InnBBorResort: false, //IB
      GiftsBooksFlowers: false, //GB
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      Offleasharea: false, //OL
      WaterAccess: false, //WA
      Beach: false, //BE
      PicnicorDayUseArea: false, //PI
      Viewpoint: false, //VI
      Paystation: false, //PY
      Bathroom: false, //WC
      HikingWalking: false, //HI
      Camping: false, //CA
      RVsites: false, //RV
    },
  },
  hikeWaFilters: {
    businesses: {
      SportingGoods: false, //SR,
      Equipmentrental: false, //RH,
      Guide: false, //GH,
      Servesfood: false, //SF,
      Store: false, //ST,
      Allowsdogs: false, //DA,
      Fuel: false, //GA,
      Winebeerorspirits: false, //WBS,
      EVcharging: false, //EV,
      Lodging: false, //LG,
      SpecialOffer: false, //OF
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      WaterAccess: false, //WA
      Beach: false, //BE
      PicnicDayUseArea: false, //PI
      ViewingAreaTower: false, //VI
      Shelter: false, //1S
      Paystation: false, //PY
      Camping: false, //CA
      TentSites: false, //CT
      RVsites: false, //RV
      Hikeincamping: false, //NR
      
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      OffLeashArea: false, //DP
      DogWaterStation: false, //DW
      PetStore: false, //PT
      Groomer: false, //GM
      Vet: false, //VT
    },
  },
  horseWaFilters: {
    businesses: {
      SpecialOffer: false, //OF
      ServesFood: false, //SF
      OutdoorSeating: false, //GS
      IceCream: false, //I1
      Store: false, //ST
      Fuel: false, //GA
      Winebeerorspirits: false, //wBS
      EVcharging: false, //EV
      Lodging: false, //LG
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      payStation: false, //PY
      Bathroom: false, //WC
      Camping: false, //CA
      RVsites: false, //RV
      PicnicorDayUseArea: false, //PI
      Viewpoint: false, //VI
      Beach: false, //BE
      WaterAccess: false, //WA
      Hiking: false, //HI
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      OffLeashArea: false, //DP
      DogWaterStation: false, //DW
      PetStore: false, //PT
      Groomer: false, //GM
      Vet: false, //VT
    },
  },
  kidsWaFilters: {
    businesses: {
      SpecialOffer: false, //OF
      ServesFood: false, //SF
      OutdoorSeating: false, //GS
      IceCream: false, //I1
      Store: false, //ST
      Fuel: false, //GA
      Winebeerorspirits: false, //wBS
      EVcharging: false, //EV
      Lodging: false, //LG
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      payStation: false, //PY
      Bathroom: false, //WC
      Camping: false, //CA
      RVsites: false, //RV
      PicnicorDayUseArea: false, //PI
      Viewpoint: false, //VI
      Beach: false, //BE
      WaterAccess: false, //WA
      Hiking: false, //HI
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      OffLeashArea: false, //DP
      DogWaterStation: false, //DW
      PetStore: false, //PT
      Groomer: false, //GM
      Vet: false, //VT
    },
  },
  ohvWaFilters: {
    businesses: {
      SpecialOffer: false, //OF
      ServesFood: false, //SF
      OutdoorSeating: false, //GS
      IceCream: false, //I1
      Store: false, //ST
      Fuel: false, //GA
      Winebeerorspirits: false, //wBS
      EVcharging: false, //EV
      Lodging: false, //LG
    },
    days: {
      monday: false, //MO
      tuesday: false, //TU
      wednesday: false, //WE
      thursday: false, //TH
      friday: false, //FR
      saturday: false, //SA
      sunday: false, //SU
    },
    recreation: {
      payStation: false, //PY
      Bathroom: false, //WC
      Camping: false, //CA
      RVsites: false, //RV
      PicnicorDayUseArea: false, //PI
      Viewpoint: false, //VI
      Beach: false, //BE
      WaterAccess: false, //WA
      Hiking: false, //HI
    },
    pass: {
      noPass: false, //FF
      discoverPass: false, //FD
      nwForestPass: false, //FN
      federalAllAccessPass: false, //FP
    },
    activities: {
      OffLeashArea: false, //DP
      DogWaterStation: false, //DW
      PetStore: false, //PT
      Groomer: false, //GM
      Vet: false, //VT
    },
  },
};

const boatFilterArray = [
  {text:'Dealer',value: 'MD'},
  {text:'Equipment rental',value: 'RS'},
  {text:'Guide',value: 'GS'},
  {text:'River Rafting Rental',value: 'RR'},
  {text:'Kayak Rental',value: 'RK'},
  {text:'Store',value: 'ST'},
  {text:'Sporting Goods/Fishing Supplies',value: 'SR'},
  {text:'Allows dogs',value: 'DA'},
  {text:'Fuel',value: 'GA'},
  {text:'Wine beer or spirits',value: 'WB'},
  {text:'EV charging',value: 'EV'},
  {text:'Lodging',value: 'LG'},
  {text:'Special Offer',value: 'OF'},

  {text:'Monday',value: 'MO'},
  {text:'Tuesday',value: 'TU'},
  {text:'Wednesday',value: 'WE'},
  {text:'Thursday',value: 'TH'},
  {text:'Friday',value: 'FR'},
  {text:'Saturday',value: 'SA'},
  {text:'Sunday',value: 'SU'},

  {text:'Any Boat launch',value: 'BL'},
  {text:'Paved Launch',value: 'BP'},
  {text:'Beach',value: 'BE'},
  {text:'Kayak Trail Stop',value: 'BP'},
  {text:'Pay station',value: 'PY'},
  {text:'Bathroom',value: 'WC'},
  {text:'Camping',value: 'CA'},
  {text:'Lake Access',value: 'LA'},
  {text:'River Access',value: 'RI'},
  {text:'Ocean Access',value: 'OC'},

  {text:'No pass required',value: 'FF'},
  {text:'Discover Pass',value: 'FD'},
  {text:'NW Forest Pass',value: 'FN'},
  {text:'Federal all access pass',value: 'FP'},

  {text:'Fishing',value: 'FI'},
  {text:'Kayaking',value: 'KY'},
  {text:'Sailboarding/Windsurfing',value: 'SW'},
  {text:'Water Skiing',value: 'WS'},
  {text:'Swimming',value: 'WS'},
  {text:'Tubing',value: 'TU'},
  {text:'Beach Combing',value: 'BC'}
]

const campFiltersArray = [
{text:'Campground', value: 'CA'},
{text:'RV Sites', value: 'RV'},
{text:'Big RV Sites', value: 'CB'},
{text:'Tent Sites', value: 'CT'},
{text:'Camping Cabin', value: 'CC'},
{text:'Electric Hookup', value: 'CE'},
{text:'50 amp power', value: 'CV'},
{text:'Water Hookup', value: 'CW'},
{text:'Sewer Hookup', value: 'R6'},
{text:'Electric Hookup', value: 'CE'},
{text:'50 amp power', value: 'CV'},
{text:'RV Dump', value: 'CD'},
{text:'Shower', value: 'SH'},
{text:'WiFi', value: 'WF'},
{text:'Pool', value: 'PO'},
{text:'Water Access', value: 'WA'},
{text:'Laundry', value: 'CL'},
{text:'Flush Toilet', value: 'CL'},
{text:'No Road Access', value: 'NR'},
{text:'Road Access all Vehicles', value: 'RA'},
{text:'Pay station', value: 'PY'},
{text:'Bathroom', value: 'WC'},
{text:'Boat Launch', value: 'BL'},
{text:'Day Use Area', value: 'DA'},
{text:'Off-Leash Area', value: 'OL'},
{text:'Beach', value: 'BE'},
{text:'Playground', value: 'PG'},

{text:'Monday', value: 'MO'},
{text:'Tuesday', value: 'TU'},
{text:'Wednesday', value: 'WE'},
{text:'Thursday', value: 'TH'},
{text:'Friday', value: 'FR'},
{text:'Saturday', value: 'SA'},
{text:'Sunday', value: 'SU'},

{text:'Special Offer', value: 'OF'},
{text:'RV Dealer', value: 'DR'},
{text:'RV Rental', value: 'R3'},
{text:'Parts and Service', value: 'PS'},
{text:'Storage/Parking', value: 'OP'},
{text:'Serves Food', value: 'SF'},
{text:'Store', value: 'ST'},
{text:'Store: Groceries', value: 'G1'},
{text:'Store: Bike/Fish/Sporting Goods', value: 'SR'},
{text:'Fuel', value: 'GA'},
{text:'Wine, beer or spirits', value:'WBS'},
{text:'EV charging', value: 'EV'},
{text:'Recreation Equipment Rental', value: 'RR'},
{text:'Guide Services', value: 'GT'},

{text:'No pass required', value: 'FF'},
{text:'Discover Pass', value: 'FD'},
{text:'NW Forest Pass', value: 'FN'},
{text:'Federal all access pass', value: 'FP'},

{text:'Motorcycle', value: 'MC'},
{text:'ATV', value: 'AT'},
{text:'UTV', value: 'UT'},
{text:'4x4', value: '44'},

]

const dogFilterArray = [
{text:'Off-Leash Area/Dog Park', value: 'DP'},
{text:'Dog Water Station', value: 'DW'},
{text:'Pet Store', value: 'PT'},
{text:'Groomer', value: 'GM'},
{text:'Vet', value: 'VT'},

{text:'Special Offer', value: 'OF'},
{text:'Serves Food', value: 'SF'},
{text:'Outdoor Seating', value: 'GS'},
{text:'Ice Cream', value: 'I1'},
{text:'Store', value: 'ST'},
{text:'Fuel', value: 'GA'},
{text:'Wine beer or spirits', value:'WBS'},
{text:'EV charging', value: 'EV'},
{text:'Lodging', value: 'LG'},

{text:'Monday', value: 'MO'},
{text:'Tuesday', value: 'TU'},
{text:'Wednesday', value: 'WE'},
{text:'Thursday', value: 'TH'},
{text:'Friday', value: 'FR'},
{text:'Saturday', value: 'SA'},
{text:'Sunday', value: 'SU'},

{text:'Pay station', value: 'PY'},
{text:'Bathroom', value: 'WC'},
{text:'Camping', value: 'CA'},
{text:'RV sites', value: 'RV'},
{text:'Picnic or Day Use Area', value: 'PI'},
{text:'Viewpoint', value: 'VI'},
{text:'Beach', value: 'BE'},
{text:'Water Access', value: 'WA'},
{text:'Hiking', value: 'HI'},

{text:'No pass required', value: 'FF'},
{text:'Discover Pass', value: 'FD'},
{text:'NW Forest Pass', value: 'FN'},
{text:'Federal all access pass', value: 'FP'}

],

const foodFilterArray = [
{text:'Special Offer', value: 'OF'},
{text:'Outdoor Seating', value: 'OS'},
{text:'Allows dogs', value: 'DA'},
{text:'Any Wine Beer or Spirits', value: 'WB'},
{text:'Winery', value: 'W2'},
{text:'Tasting Room', value: 'W1'},
{text:'Cidery', value: 'C3'},
{text:'Brewery or Brew Pub', value: 'B4'},
{text:'Distillery', value: 'D3'},
{text:'Wine Bar', value: 'W3'},
{text:'Beer on Tap', value: 'D6'},
{text:'Any food Service', value: 'SF'},
{text:'Craft Dining', value: 'D5'},
{text:'Beer on Tap', value: 'D6'},

{text:'Monday', value: 'MO'},
{text:'Tuesday', value: 'TU'},
{text:'Wednesday', value: 'WE'},
{text:'Thursday', value: 'TH'},
{text:'Friday', value: 'FR'},
{text:'Saturday', value: 'SA'},
{text:'Sunday', value: 'SU'},

{text:'Fuel', value: 'GA'},
{text:'EV charging', value: 'EV'},
{text:'Any Lodging', value: 'LG'},
{text:'Inn B&B or Resort', value: 'IB'},
{text:'Gifts Books Flowers', value: 'GB'},

{text:'No pass required', value: 'FF'},
{text:'Discover Pass', value: 'FD'},
{text:'NW Forest Pass', value: 'FN'},
{text:'Federal all access pass', value: 'FP'},

{text:'Off-leash area', value: 'OL'},
{text:'Water Access', value: 'WA'},
{text:'Beach', value: 'BE'},
{text:'Picnic or Day Use Area', value: 'PI'},
{text:'Viewpoint', value: 'VI'},
{text:'Pay station', value: 'PY'},
{text:'Bathroom', value: 'WC'},
{text:'Hiking/Walkig', value: 'HI'},
{text:'Camping', value: 'CA'},
{text:'RV sites', value: 'RV'},

  
],

const hikeFilterArray = [
{text:'Sporting Goods', value: 'SR'},
{text:'Equipment rental', value: 'RH'},
{text:'Guide', value: 'GH'},
{text:'Serves food', value: 'SF'},
{text:'Store', value: 'ST'},
{text:'Allows dogs', value: 'DA'},
{text:'Fuel', value: 'GA'},
{text:'Wine beer or spirits', value: 'WB'},
{text:'EV charging', value: 'EV'},
{text:'Lodging', value: 'LG'},
{text:'Special Offer', value: 'OF'},
{text:'Monday', value: 'MO'},
{text:'Tuesday', value: 'TU'},
{text:'Wednesday', value: 'WE'},
{text:'Thursday', value: 'TH'},
{text:'Friday', value: 'FR'},
{text:'Saturday', value: 'SA'},
{text:'Sunday', value: 'SU'},
{text:'Water Access', value: 'WA'},
{text:'Beach', value: 'BE'},
{text:'Picnic/Day Use Area', value: 'PI'},
{text:'Viewing Area/Tower', value: 'VI'},
{text:'Shelter', value: '1S'},
{text:'Pay station', value: 'PY'},
{text:'Camping', value: 'CA'},
{text:'Tent Sites', value: 'CT'},
{text:'RV sites', value: 'RV'},
{text:'Hike in camping', value: 'NR'},
{text:'No pass required', value: 'FF'},
{text:'Discover Pass', value: 'FD'},
{text:'NW Forest Pass', value: 'FN'},
{text:'Federal all access pass', value: 'FP'},
{text:'Easy Trail Access', value: 'H1'},
{text:'Most Difficult Trail Access', value: 'H2'},
{text:'Technical Trail Access', value: 'H4'},
{text:'Non-motorized only', value: 'NM'},

],

const horseFilterArray = [
  {text:'Sporting Goods', value: 'SR'},
  {text:'Equipment rental', value: 'RH'},
  {text:'Guide', value: 'GH'},
  {text:'Serves food', value: 'SF'},
  {text:'Store', value: 'ST'},
  {text:'Allows dogs', value: 'DA'},
  {text:'Fuel', value: 'GA'},
  {text:'Wine beer or spirits', value: 'WB'},
  {text:'EV charging', value: 'EV'},
  {text:'Lodging', value: 'LG'},
  {text:'Special Offer', value: 'OF'},
  {text:'Monday', value: 'MO'},
  {text:'Tuesday', value: 'TU'},
  {text:'Wednesday', value: 'WE'},
  {text:'Thursday', value: 'TH'},
  {text:'Friday', value: 'FR'},
  {text:'Saturday', value: 'SA'},
  {text:'Sunday', value: 'SU'},
  {text:'Water Access', value: 'WA'},
  {text:'Beach', value: 'BE'},
  {text:'Picnic/Day Use Area', value: 'PI'},
  {text:'Viewing Area/Tower', value: 'VI'},
  {text:'Shelter', value: '1S'},
  {text:'Pay station', value: 'PY'},
  {text:'Camping', value: 'CA'},
  {text:'Tent Sites', value: 'CT'},
  {text:'RV sites', value: 'RV'},
  {text:'Hike in camping', value: 'NR'},
  {text:'No pass required', value: 'FF'},
  {text:'Discover Pass', value: 'FD'},
  {text:'NW Forest Pass', value: 'FN'},
  {text:'Federal all access pass', value: 'FP'},
  {text:'Easy Trail Access', value: 'H1'},
  {text:'Most Difficult Trail Access', value: 'H2'},
  {text:'Technical Trail Access', value: 'H4'},
  {text:'Non-motorized only', value: 'NM'},
  
],

const kidsFilterArray = [
  {text:'Equipment Rental',value: 'RR'},
  {text:'Horse Guide/Rides',value: 'GR'},
  {text:'Kayak Rental',value: 'RK'},
  {text:'Serves food',value: 'SF'},
  {text:'Store',value: 'ST'},
  {text:'EV charging',value: 'EV'},
  {text:'Lodging',value: 'LG'},
  {text:'Special Offer',value: 'OF'},
  {text:'Monday',value: 'MO'},
  {text:'Tuesday',value: 'TU'},
  {text:'Wednesday',value: 'WE'},
  {text:'Thursday',value: 'TH'},
  {text:'Friday',value: 'FR'},
  {text:'Saturday',value: 'SA'},
  {text:'Sunday',value: 'SU'},
  {text:'Wading Pool/Spray Park',value: 'WP'},
  {text:'Boat launch',value: 'BL'},
  {text:'Swimming pool',value: 'PO'},
  {text:'Beach',value: 'BE'},
  {text:'Playground',value: 'BP'},
  {text:'Pay station',value: 'PY'},
  {text:'Bathroom',value: 'WC'},
  {text:'Camping',value: 'CA'},
  {text:'Day-Use Area',value: 'RV'},
  {text:'No pass required',value: 'FF'},
  {text:'Discover Pass',value: 'FD'},
  {text:'NW Forest Pass',value: 'FN'},
  {text:'Federal all access pass',value: 'FP'},
  {text:'Hiking/Walking',value: 'HI'},
  {text:'Horse riding',value: 'HO'},
  {text:'Biking',value: 'SB'},
  {text:'OHVing',value: 'OH'},
  {text:'Swimming',value: 'SG'},
  {text:'Kayaking',value: 'KY'},
  {text:'Tubing',value: 'TG'},
  {text:'Fishing',value: 'FI'},
  {text:'Boating',value: 'BT'}
  
],

const ohvFilterArray = [
  {text:'Special offer', value: 'OF'},
  {text:'OHV dealer', value: 'MD'},
  {text:'OHV rental', value: 'RS'},
  {text:'Guided rides', value: 'GT'},
  {text:'Storage/parking', value: 'OP'},
  {text:'Serves food', value: 'SF'},
  {text:'Store', value: 'ST'},
  {text:'Allows dogs', value: 'DA'},
  {text:'Fuel', value: 'GA'},
  {text:'Wine beer or spirits', value: 'WB'},
  {text:'EV charging', value: 'EV'},
  {text:'Lodging', value: 'LG'},
  {text:'Monday', value: 'MO'},
  {text:'Tuesday', value: 'TU'},
  {text:'Wednesday', value: 'WE'},
  {text:'Thursday', value: 'TH'},
  {text:'Friday', value: 'FR'},
  {text:'Saturday', value: 'SA'},
  {text:'Sunday', value: 'SU'},
  {text:'Pay station', value: 'PY'},
  {text:'Bathroom', value: 'WC'},
  {text:'Camping', value: 'CA'},
  {text:'RV sites', value: 'RV'},
  {text:'RV Hookup', value: 'RU'},
  {text:'Off-trail riding area', value: 'OT'},
  {text:'No pass required', value: 'FF'},
  {text:'Discover Pass', value: 'FD'},
  {text:'NW Forest Pass', value: 'FN'},
  {text:'Federal all access pass', value: 'FP'},
  
],

const winterFilterArray = [
  {text:'Special Offer', value: 'OF'},
  {text:'Snowmobile Dealer', value: 'MD'},
  {text:'Snowmobile Rental', value: 'RS'},
  {text:'Guided Rides', value: 'GS'},
  {text:'Storage/Parking', value: 'OP'},
  {text:'Serves food', value: 'SF'},
  {text:'Store', value: 'ST'},
  {text:'Allows dogs', value: 'DA'},
  {text:'Fuel', value: 'GA'},
  {text:'Wine beer or spirits', value: 'WB'},
  {text:'EV charging', value: 'EV'},
  {text:'Lodging', value: 'LG'},
  {text:'Monday', value: 'MO'},
  {text:'Tuesday', value: 'TU'},
  {text:'Wednesday', value: 'WE'},
  {text:'Thursday', value: 'TH'},
  {text:'Friday', value: 'FR'},
  {text:'Saturday', value: 'SA'},
  {text:'Sunday', value: 'SU'},
  {text:'Pay station', value: 'PY'},
  {text:'Bathroom', value: 'WC'},
  {text:'No pass required', value: 'FF'},
  {text:'Discover Pass', value: 'FD'},
  {text:'Sno-Park Permit', value: 'FS'},
  {text:'Snowmobiling', value: 'S1'},
  {text:'Cross Country Skiing', value: 'C1'},
  
],

const snowmobileFilterArray = [
  {text:'Special Offer', value: 'OF'},
  {text:'Snowmobile Dealer', value: 'MD'},
  {text:'Snowmobile Rental', value: 'RS'},
  {text:'Guided Rides', value: 'GS'},
  {text:'Storage/Parking', value: 'OP'},
  {text:'Serves food', value: 'SF'},
  {text:'Store', value: 'ST'},
  {text:'Allows dogs', value: 'DA'},
  {text:'Fuel', value: 'GA'},
  {text:'Wine beer or spirits', value: 'WBS'},
  {text:'EV charging', value: 'EV'},
  {text:'Lodging', value: 'LG'},
  {text:'Monday', value: 'MO'},
  {text:'Tuesday', value: 'TU'},
  {text:'Wednesday', value: 'WE'},
  {text:'Thursday', value: 'TH'},
  {text:'Friday', value: 'FR'},
  {text:'Saturday', value: 'SA'},
  {text:'Sunday', value: 'SU'},
  {text:'Pay station', value: 'PY'},
  {text:'Bathroom', value: 'WC'},
  {text:'No pass required', value: 'FF'},
  {text:'Discover Pass', value: 'FD'},
  {text:'Sno-Park Permit', value: 'FS'},
  {text:'Snowmobiling', value: 'S1'},
  {text:'Cross Country Skiing', value: 'C1'},
  
],