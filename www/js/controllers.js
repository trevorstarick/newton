angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
})

.controller('listView', function($scope, $http) {
  console.log('lv');
  // CAUSE I CAN'T GET NO...
  // 
  // $http.get('http://api.zilyo.com/places?lat=45.5086699&lng=-73.55399249999999')
  //   .then(function(res) {
  //     console.log('res',res);
  //     $scope.items = res.data;
  //   });

  $scope.items = {
    "page": 1,
    "totalPages": 0,
    "resultsPerPage": 15,
    "totalResults": 0,
    "items": [
      {
        "heading": "Grand 7 1/2 ensoleillé   Quartier Rosemont",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp131489",
        "address": {
          "city": "Montréal",
          "all": "7e avenue, Montréal, Quebec, CA, H1Y2N2",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "",
          "postalCode": "H1Y2N2",
          "streetName": "7e avenue"
        },
        "photos": [
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667408/original.jpg?1348350375",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1667409/original.JPG?1348350411",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667410/original.JPG?1348350442",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667420/original.JPG?1348350658",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1851416/original.png?1351008353",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851419/original.png?1351008369",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851423/original.png?1351008406",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1851424/original.png?1351008420",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851425/original.png?1351008434",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/2818435/original.JPG?1366568407",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/2818445/original.JPG?1366568501",
            "caption": ""
          }
        ],
        "price": 226,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5730767,
            45.548192
          ]
        },
        "description": "Situated in Montréal, this 2 bedroom apartment accommodates up to 8 guests and starts at just EUR 176 per night.\n\nThe accommodation is 149 sqm. It is located on the ground floor.\n\nIt also has internet (wifi, cable) access. It features 2 double beds and 2 sofa beds / futons and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a fridge, a freezer, a grill, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a barbecue, a garden, and a terrace. Guests can also enjoy a CD player, a DVD player, a TV, video games/console, books, and board games.\n\nThis is a no-smoking property. Pets are not permitted.\n\n2 guests have been welcomed to this property.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 8,
        "bedroomCount": 3,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Garden, Terrace",
            "id": 23
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Cable, Internet Wifi",
            "id": 22
          },
          {
            "text": "Internet Cable, Tv",
            "id": 21
          },
          {
            "text": "Jacuzzi",
            "id": 13
          },
          {
            "text": "Kitchen",
            "id": 15
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/131489?aid=outpost"
      },
      {
        "heading": "fully furnished and equipped",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp290085",
        "address": {
          "city": "Montréal",
          "all": "Avenue de l'Hôtel de Ville, Le Plateau Mont-Royal, Montréal, Quebec, CA, h2w2h5",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Le Plateau Mont-Royal",
          "postalCode": "h2w2h5",
          "streetName": "Avenue de l'Hôtel de Ville"
        },
        "photos": [
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4505245/original.JPG?1389822490",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4505247/original.JPG?1389822491",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4505249/original.JPG?1389822495",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4505250/original.JPG?1389822517",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4505251/original.JPG?1389822516",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4505252/original.jpg?1389822521",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4505255/original.JPG?1389822527",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4506863/original.jpg?1389865473",
            "caption": ""
          }
        ],
        "price": 82,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5839966,
            45.521606
          ]
        },
        "description": "Situated in Montréal, this 1 bedroom apartment accommodates up to 2 guests and starts at just USD 82 per night.\n\nThe accommodation is 70 sqm. It is located on the 2nd floor.\n\nIt also has internet (wifi, cable) access. It features 1 double bed and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a freezer, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony and a terrace. Guests can also enjoy a DVD player, a radio, and a TV.\n\nThe property is suitable for smokers and pets. \n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 2,
        "bedroomCount": 1,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Cable, Internet Wifi",
            "id": 22
          },
          {
            "text": "Internet Cable, Tv",
            "id": 21
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Pets Allowed",
            "id": 17
          },
          {
            "text": "Smoking Allowed",
            "id": 19
          },
          {
            "text": "Terrace",
            "id": 23
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/290085?aid=outpost"
      },
      {
        "heading": "Maison familliale",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "House",
          "id": 3
        },
        "pid": "htp360031",
        "address": {
          "city": "Montréal",
          "all": "2e Avenue, Montréal, Quebec, CA, h1y 2y4",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "",
          "postalCode": "h1y 2y4",
          "streetName": "2e Avenue"
        },
        "photos": [
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112955/original.jpg?1407504836",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6112962/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112963/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6112964/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112965/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6112966/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112967/original.jpg?1407504987",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6112968/original.jpg?1407504991",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112969/original.jpg?1407504991",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6112970/original.jpg?1407504992",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112971/original.jpg?1407504991",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6112983/original.jpg?1407505229",
            "caption": ""
          }
        ],
        "price": 153,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5775117,
            45.5463898
          ]
        },
        "description": "Situated in Montréal, this 3 bedroom house accommodates up to 7 guests and starts at just USD 152 per night.\n\nThe accommodation is 167 sqm.\n\nThis house is child-friendly. It also has internet (wifi) access. It features 1 bunk bed, 1 single bed, and 2 double beds and has 2 bathrooms. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a fridge, a freezer, a grill, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a barbecue, a garden, a terrace, and children's games. Guests can also enjoy a radio and a TV.\n\nThis is a no-smoking property. Pets are not permitted.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 7,
        "bedroomCount": 4,
        "bathroomCount": 2,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Garden, Terrace",
            "id": 23
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Wifi",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Tv",
            "id": 21
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/360031?aid=outpost"
      },
      {
        "heading": "Montreal Espace Confort",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Hotel",
          "id": 0
        },
        "pid": "htw10946",
        "address": {
          "city": "Montreal city",
          "all": "Rue Saint-Denis, Ville-Marie, Montreal city, Quebec, Canada, H2X1G6",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Ville-Marie",
          "postalCode": "H2X1G6",
          "streetName": "Rue Saint-Denis"
        },
        "photos": [
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10946/1.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10946/2.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10946/3.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10946/4.jpg",
            "caption": ""
          }
        ],
        "price": 36,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5662341,
            45.5160607
          ]
        },
        "description": "Montreal Espace Confort\r\nAn acknowledged hotel service: an excellent comfort, a charm of the south and a courtesy to all test!  \r\n\r\nYou will find an unforgettable experience among us, either it being filled with multiple festivals filled with blazing colors during the summer, or the ground covered with thousands of white sparkling flakes.\r\n\r\nOur multifunctional rooms include:\r\n17 non smoker rooms with private bathroom and kitchenette\r\n6 non smoker property rooms with shared bathroom kitchenette\r\nParking to less than 5 minutes (payable)\r\nRemote controlled air conditioning\r\nTelephones with Voice Mail Access\r\nInternet High Speed Access\r\nCable Television\r\nComplete Breakfast\r\n..will suit you definitely!  \r\n\r\n\r\nConstructed in 2004, our contemporary decoration will know how to appease you.   Also, you will be able to find all the necessary conveniences in less than some steps, to take advantage of your stay.  \r\n\r\nOur qualified staff will put everything at ease for your stay, making it feel like you never left home.\r\n\r\nPre-authorization of the total amount will be done on the credit card.\r\n\r\nPLEASE NOTE:  20% taxes will be added to your bill on arrival at the hotel.",
        "occupancy": 8,
        "bedroomCount": -1,
        "bathroomCount": -1,
        "bedCount": 8,
        "amenities": [
          {
            "text": "Air Conditioning, Tea/Coffee Making Facilities",
            "id": 0
          },
          {
            "text": "Breakfast Included",
            "id": 1
          },
          {
            "text": "Laundry Facilities",
            "id": 4
          },
          {
            "text": "Parking",
            "id": 16
          }
        ],
        "provider": "hostelworld",
        "link": "http://www.hostelworld.com/hosteldetails.php/10946?affiliate=zilyo"
      },
      {
        "heading": "Hostel Chez Jean Montréal",
        "roomType": {
          "text": "Shared Room",
          "id": 2
        },
        "propType": {
          "text": "Hostel",
          "id": 0
        },
        "pid": "htw6383",
        "address": {
          "city": "Montreal city",
          "all": "Avenue Henri-Julien, Le Plateau Mont-Royal, Montreal city, Quebec, Canada, H2X 3B6",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Le Plateau Mont-Royal",
          "postalCode": "H2X 3B6",
          "streetName": "Avenue Henri-Julien"
        },
        "photos": [
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/1.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/2.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/3.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/4.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/5.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/6.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/6/6383/7.jpg",
            "caption": ""
          }
        ],
        "price": 32,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.578213,
            45.520365
          ]
        },
        "description": "A very easy going place. Hostel Chez Jean is located in the heart of Montreal, in the Plateau area. .\r\nFilled with cool places to discover, just a few minutes from Jean's Place, you'll be right in the thick of things ...\r\nYou can enjoy breakfast at any time in the morning ! During the summer you can have breakfast on our terrace. \r\nIn the rush season be prepared to share double beds, we have very few single beds. We also open our annexe nearby.\r\n\r\nWe also offer our guests free internet, a public phone service, TV, satelite, video, hammock, piano and many more facilities.\r\n\r\nOur staff will give you a warm welcome, as well as advice and recommendations for outings within the city itself as well as in the surrounding areas. We also offer longer stay possibilities.\r\nWe don't have credit card facilities here, so have some cash or travellers checks.",
        "occupancy": 8,
        "bedroomCount": -1,
        "bathroomCount": -1,
        "bedCount": 8,
        "amenities": [
          {
            "text": "Bicycle Parking",
            "id": 16
          },
          {
            "text": "Breakfast Included",
            "id": 1
          },
          {
            "text": "Cable Tv",
            "id": 21
          },
          {
            "text": "Free Internet Access",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Outdoor Terrace",
            "id": 23
          }
        ],
        "provider": "hostelworld",
        "link": "http://www.hostelworld.com/hosteldetails.php/6383?affiliate=zilyo"
      },
      {
        "heading": "Hotel Ambrose",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Hotel",
          "id": 0
        },
        "pid": "htw47479",
        "address": {
          "city": "Montreal city",
          "all": "Rue Stanley, Downtown, Montreal city, Quebec, Canada, H3A 3T1",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Downtown",
          "postalCode": "H3A 3T1",
          "streetName": "Rue Stanley"
        },
        "photos": [
          {
            "url": "http://ucd.hwstatic.com/propertyimages/4/47479/1.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/4/47479/2.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/4/47479/3.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/4/47479/4.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/4/47479/5.jpg",
            "caption": ""
          }
        ],
        "price": 38,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5802678,
            45.5024682
          ]
        },
        "description": "The Manoir Ambrose is a nineteenth century Victorian style home converted into a small, charming and comfortable hotel. All of its twenty-two rooms have telephone and television ; most have private bathroom and air-conditioned. Our cordial staff will look after your every need and make your stay in Montreal a most pleasant experience.\r\n\r\n22 rooms, pretty and comfortable, including 20 with private bathroom and\r\nhair dryer\r\nAir conditioned in most of the rooms\r\nTelephone, Cable color television with 4 free movie channel\r\nFree continental breakfast\r\nFree Wireless Internet high-speed service\r\nParking available on reservation\r\nPersonalized service\r\nHelp and support with the organization of your leisure activities\r\nMini-business center of with e-mail and office suite software\r\nPhotocopy and fax services\r\nReservations for excursions and city tours\r\nLaundry service\r\nSafe deposit available at the reception for your valuable items\r\n\r\n**Tax not included in rates shown and will be added to the balance upon arrival** Room tax is 3.5% on room charges, federal and provincial taxes amount to 12.875% of total bill.",
        "occupancy": 8,
        "bedroomCount": -1,
        "bathroomCount": -1,
        "bedCount": 8,
        "amenities": [
          {
            "text": "Air Conditioning",
            "id": 0
          },
          {
            "text": "Breakfast Included",
            "id": 1
          },
          {
            "text": "Free Internet Access",
            "id": 22
          },
          {
            "text": "Parking",
            "id": 16
          }
        ],
        "provider": "hostelworld",
        "link": "http://www.hostelworld.com/hosteldetails.php/47479?affiliate=zilyo"
      },
      {
        "heading": "Downtown Urban Getaway w/ Terrace",
        "roomType": {
          "text": "Entire place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "nfl40520",
        "address": {
          "city": "Montreal city",
          "all": "Boulevard René-Lévesque Est, Quartier Chinois, Montreal city, Quebec, Canada, H2X 1N2",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Quartier Chinois",
          "postalCode": "H2X 1N2",
          "streetName": "Boulevard René-Lévesque Est"
        },
        "photos": [
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/462990-1347296253/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/462996-1347296257/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463001-1347296262/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463007-1347296267/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463016-1347296273/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463022-1347296278/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463028-1347296283/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463034-1347296288/large.jpg",
            "caption": ""
          },
          {
            "url": "https://d18krzy3dutnlo.cloudfront.net/place_photos/photos/463042-1347296293/large.jpg",
            "caption": ""
          }
        ],
        "price": 141,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5610545,
            45.5097184
          ]
        },
        "description": "Hello from Montreal!\r\n\r\nWhether you are coming for a visit or work, this flat is perfect for you! All the best attractions Montreal has to offer and are within a 10 minutes walk radius. Don't take my word for it; ask the 6 overcharging hotels surrounding this beautiful apartment.\r\n\r\nYou feel like seeing a lot of action? Walk 5 minutes towards Ste-Catherine St. and you reached the big Montreal festivals on \"Quartier des Spectacles\", Metropolis or Club Soda showing great bands every night. Keep walking on Ste-Catherine to explore the various shops and restaurants.\r\n\r\nYou feel like having a relaxed time? Walk 10 minutes towards Vieux-Port crossing Chinatown and you reached Old Montreal filled with delicious restaurants and beautiful art galleries. Take a stroll and enjoy the unique sights Vieux-Port has to offer.\r\n\r\nWhether you want to walk, use the public transport or enjoy a ride on a BIXI, this location allows you to explore the city at your own rhythm.\r\n\r\nThe flat itself is well isolated from sound and outside temperature. AC becomes a life saver during the hot summer days!\r\n\r\nThe place comes with all amenities:\r\n\r\n-Hair Dryer\r\n-Washer & Dryer (free of charge)\r\n-Refrigerator\r\n-Microwave\r\n-Dishwasher\r\n-Oven\r\n-Shared Terrace\r\n-AC/Heating\r\n-Wi-Fi\r\n-51\" HD Television*\r\n-5.1 Surround Sound System\r\n-Chromecast\r\n\r\n*You need a tablet or a laptop (mac or pc) to watch TV (ex. Netflix) since I do not have cable.\r\n\r\nAlso there is a parking lot right behind the building. You can leave your car there for the whole duration of your stay. I had many guests use it with no issues.\r\n\r\nThis place is absolutely perfect for anyone looking for a clean, affordable apartment in the heart of downtown Montreal.\r\n\r\nDo not hesitate to send me a message if you have more questions!\r\n\r\nBonne Journée!\n\nHouseRules:\nThis is not a place to party. No loud music.\r\n\r\nThe flat needs to be in a good condition before check out.\r\n\r\nNo smoking allowed inside the flat.",
        "occupancy": 2,
        "bedroomCount": 1,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Air Conditioning, Heating",
            "id": 0
          },
          {
            "text": "Dishwasher",
            "id": 24
          },
          {
            "text": "Internet, Wifi (Wireless Lan)",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Parking",
            "id": 16
          },
          {
            "text": "Tv",
            "id": 21
          },
          {
            "text": "Washing Machine",
            "id": 4
          }
        ],
        "provider": "nflats",
        "link": "http://9flats.com/places/40520-apartment-montreal-chinatown?a_aid=51f14c6e0abce&a_bid=7c29c154&utm_source=coop-outpost&utm_campaign=outpost-integration&utm_medium=commission"
      },
      {
        "heading": "Hotel le Saint-Malo",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Hotel",
          "id": 0
        },
        "pid": "htw10314",
        "address": {
          "city": "Montreal city",
          "all": "Rue du Fort, Downtown, Montreal city, Quebec, Canada, H3H 2T2",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Downtown",
          "postalCode": "H3H 2T2",
          "streetName": "Rue du Fort"
        },
        "photos": [
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10314/3.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10314/5.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/1/10314/6.jpg",
            "caption": ""
          }
        ],
        "price": 57,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5818,
            45.492048
          ]
        },
        "description": "The Saint-Malo is a charming European-style hotel ideally located in the heart of Montreal. You are only steps away from Montreal's most commercial street, Sainte-Catherine St., where you will discover the Faubourg Sainte-Catherine, a huge market with its unique architecture and variety of ethnic restaurants. The hotel is within walking distance are Concordia University, the Canadian Center for Architecture, the Marguerite d'Youville Museum and the Montreal Museum of Fine Arts.\r\n\r\nAll rooms have recently been totally renovated. Each room is en-suite and has modern amenities such as a colour cable TV, direct access telephone with voice mail, free high speed internet access, hairdryer, and ironing facilities. A mini-bar, movies and Nintendo games are also available on request. \r\n\r\nPLEASE NOTE: Our quad rooms consist of 2 double beds.\r\n\r\n The Guy-Concordia subway station is only two blocks from the hotel and a two-minute drive will take you to the Ville-Marie highway, your gateway to anywhere in North America!\r\n\r\n\r\n**The occupation tax is moving from 3% to 3.5%, effective date will be February 1st, so the total tax amount will be 16.83%**",
        "occupancy": 8,
        "bedroomCount": -1,
        "bathroomCount": -1,
        "bedCount": 8,
        "amenities": [
          {
            "text": "Air Conditioning",
            "id": 0
          },
          {
            "text": "Breakfast Included",
            "id": 1
          },
          {
            "text": "Free Internet Access",
            "id": 22
          }
        ],
        "provider": "hostelworld",
        "link": "http://www.hostelworld.com/hosteldetails.php/10314?affiliate=zilyo"
      },
      {
        "heading": "Studio 118 - face au Parc La Fontaine",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp129643",
        "address": {
          "city": "Montréal",
          "all": "Boulevard Saint-Joseph Est, Le Plateau Mont-Royal, Montréal, Quebec, CA, H2T",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Le Plateau Mont-Royal",
          "postalCode": "H2T",
          "streetName": "Boulevard Saint-Joseph Est"
        },
        "photos": [
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1712168/original.jpg?1349362287",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/3031632/original.jpg?1369073674",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/3031636/original.jpg?1369073711",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/3031639/original.jpg?1369073741",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/3031645/original.jpg?1369073765",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/3031647/original.jpg?1369073796",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/3031650/original.jpg?1369073823",
            "caption": ""
          }
        ],
        "price": 52,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.588879,
            45.5252341
          ]
        },
        "description": "Situated in Montréal, this 1 bedroom apartment accommodates up to 2 guests and starts at just EUR 41 per night.\n\nIt is located on the 1st floor.\n\nIt also has internet (wifi, cable) access. It features 1 double bed and has 1 bathroom. Bed linens are included.\n\nAdditionally, it offers a kitchen with a fridge, a freezer, a coffee maker, a dryer, and a washing machine. Guests can also enjoy a TV.\n\nThe property is suitable for wheelchair users and pets. This is a no-smoking property.\n\n10 guests have been welcomed to this property. Guests have rated this property 1.0 out of 5 based on 1 review.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 2,
        "bedroomCount": 1,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Cable, Internet Wifi",
            "id": 22
          },
          {
            "text": "Internet Cable, Tv",
            "id": 21
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Pets Allowed",
            "id": 17
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/129643?aid=outpost"
      },
      {
        "heading": "2 Storey Apt near Mount Royal #2",
        "roomType": {
          "text": "Entire home or apt",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "tvmUpLhvSkO1s6",
        "address": {
          "city": "Montreal city",
          "all": "Rue Marie-Anne Est, Le Plateau Mont-Royal, Montreal city, Quebec, Canada, H2W 2H5",
          "country": "Canada",
          "state": "Quebec",
          "streetName": "Rue Marie-Anne Est",
          "postalCode": "H2W 2H5",
          "neighbourhood": "Le Plateau Mont-Royal"
        },
        "photos": [
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_ddfb23ae57f1ec60f4416138c904abf1.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_aae432d4b443220a948e13d3b7227350.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_efa60d78fdc86b0a3505ad78c0924c99.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_8ec2f40125b0e0a79712230b4c3f342b.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_6c33d81b61507e8fc9194c2776dc4bba.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_1983786664d0253c817db0e1a0c90cb9.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_f2c545e1b9d033449201102db8904ada.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_de95ddcdf07aa1dcc72a2406e7188c01.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_140b2c8a54b2f5ac2da5eca3387acb2b.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_dfd609c65e2ec5653f553a9393961609.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_e25fa8d13e4f9210505df227bd76b6e4.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_02939602ef845687e1cf14a877db3f87.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_da628f2abe4d25b10963ff029025a6fd.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_be7db674056c3335b6252cb95d8e1fc2.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_6d3346fefd19cbaaffcc4100020328fd.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_9acdaa93a87c7ba63f064e0be9999644.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_b3c9d0d081726985ee06e06242fbed65.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_93d3fccb05a929b63d503d964461742a.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_41df3b241125d04d4b3b810c5346a085.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_fc7d3c83dacb411bb76c6ecd9a0a2967.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_695bcd14b6d9cf1993216d518457c096.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          },
          {
            "url": "http://ugc.travelmob.com/listings/UpLhvSkO1s6_e31097c2757184ae484dabaf7c52ac9c.jpg",
            "caption": "2 Storey Apt near Mount Royal #2"
          }
        ],
        "price": 189,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5837,
            45.5191
          ]
        },
        "description": "This two bedroom apartment is located in the heart of the Plateau Mont-Royal, right beside the famous Mont-Royal Avenue where cafés, restaurants and boutiques are plenty.\n\nThe style and arrangement of this apartment is unique: each of the two floors has a fully private bedroom with queen beds and a bathroom.\n\nThe neighborhood in which this apartment is located has a distinctively local feel - many Montrealers will be spending afternoons at Parc Mont Royal, Parc Lafontaine, or simply in the lively streets Saint-Denis, Mont-Royal, Saint-Laurent and Duluth.\n\nI encourage you to contact me if you would like to know more about the apartment or the neighborhood, or if you would appreciate assistance in the planning of your trip!",
        "occupancy": 6,
        "bedroomCount": 2,
        "bathroomCount": 2,
        "bedCount": 2,
        "amenities": [
          {
            "text": "Family Kid Friendly",
            "id": 8
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet, Wireless Internet",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Tv",
            "id": 21
          },
          {
            "text": "Washer Or Dryer",
            "id": 4
          }
        ],
        "provider": "travelmob",
        "link": "http://www.travelmob.com/vacation-rentals/canada/quebec/montreal/tm-UpLhvSkO1s6?utm_campaign=partner&utm_medium=referral&utm_source=outpost"
      },
      {
        "heading": "The Celebrities Hotel",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Hotel",
          "id": 0
        },
        "pid": "htw32079",
        "address": {
          "city": "Montreal city",
          "all": "Rue Saint-Denis, Quartier Chinois, Montreal city, Quebec, Canada, H2L 2C4",
          "country": "Canada",
          "state": "Quebec",
          "neighbourhood": "Quartier Chinois",
          "postalCode": "H2L 2C4",
          "streetName": "Rue Saint-Denis"
        },
        "photos": [
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/1.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/10.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/2.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/4.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/5.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/6.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/7.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/8.jpg",
            "caption": ""
          },
          {
            "url": "http://ucd.hwstatic.com/propertyimages/3/32079/9.jpg",
            "caption": ""
          }
        ],
        "price": 54,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5575162,
            45.5123712
          ]
        },
        "description": "Ideally located between the Latin Quarter, the Old Montreal and Chinatown, The Celebrities Hotel welcomes you in a warm and relaxed atmosphere. It is certain that one of its 26 rooms in lovely decoration and in the unique charm will seduce you. \r\nThe lively district is full of stores in underground or on-surface where you can make your purchases. Opened 24 hours a day, the reception of the hotel is at your disposal and the staff will know delighted to inform you about the available activities around the hotel. For a romantic trip, a journey be with friends or a stay in family The Celebrities Hotel is the perfect stopover for your coming in Montreal !\r\n\r\nWe also offer many enjoyable services :\r\n\r\n Continental breakfast for 5$ per person reserve in the checking time\r\n\r\n News paper \r\n\r\n 24 hours, seven days a week reception\r\n\r\n Check in at any time after 2pm free of charge\r\n\r\n Cable Television\r\n\r\n Near by parking\r\n\r\n Near by Gym and pool walking distance\r\n\r\n Wireless internet in the whole hotel all Rooms",
        "occupancy": 8,
        "bedroomCount": -1,
        "bathroomCount": -1,
        "bedCount": 8,
        "amenities": [
          {
            "text": "Air Conditioning, Tea/Coffee Making Facilities",
            "id": 0
          },
          {
            "text": "Breakfast Included",
            "id": 1
          },
          {
            "text": "Free Internet Access",
            "id": 22
          },
          {
            "text": "Laundry Facilities",
            "id": 4
          },
          {
            "text": "Parking",
            "id": 16
          }
        ],
        "provider": "hostelworld",
        "link": "http://www.hostelworld.com/hosteldetails.php/32079?affiliate=zilyo"
      },
      {
        "heading": "2 bedroom furnished suite at solano - 409",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp336214",
        "address": {
          "city": "Montréal",
          "all": "Rue Notre-Dame Est, Gay Village, Montréal, Quebec, CA, H2L 0C5",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Gay Village",
          "postalCode": "H2L 0C5",
          "streetName": "Rue Notre-Dame Est"
        },
        "photos": [
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569834/original.jpg?1401223378",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569835/original.jpg?1401223378",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569836/original.jpg?1401223378",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569837/original.jpg?1401223378",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569847/original.jpg?1401223466",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569856/original.jpg?1401223501",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569880/original.jpg?1401223611",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569881/original.jpg?1401223612",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569882/original.jpg?1401223612",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569893/original.jpg?1401223665",
            "caption": ""
          }
        ],
        "price": 165,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5503488,
            45.5131146
          ]
        },
        "description": "Situated in Montréal, this 2 bedroom apartment accommodates up to 4 guests and starts at just USD 164 per night.\n\nThe accommodation is 112 sqm. It is located on the 6th floor. The building has an elevator.\n\nIt also has internet (wifi) access. It features 2 double beds and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a fridge, a freezer, a grill, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a swimming pool, parking / a garage, and a terrace. Guests can also enjoy a telephone and a TV.\n\nThis is a no-smoking property. Pets are not permitted.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 4,
        "bedroomCount": 2,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Wifi",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Parking",
            "id": 16
          },
          {
            "text": "Swimming Pool",
            "id": 18
          },
          {
            "text": "Terrace",
            "id": 23
          },
          {
            "text": "Tv",
            "id": 21
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/336214?aid=outpost"
      },
      {
        "heading": "Central! Charming, Renovated Apartment in Plateau.",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp281503",
        "address": {
          "city": "Montréal",
          "all": "Rue Saint-Christophe, Le Plateau Mont-Royal, Montréal, Quebec, CA, H2L3X5",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Le Plateau Mont-Royal",
          "postalCode": "H2L3X5",
          "streetName": "Rue Saint-Christophe"
        },
        "photos": [
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316433/original.jpg?1386728091",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316435/original.jpg?1386728147",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316437/original.jpg?1386728400",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4316438/original.jpg?1386728440",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316439/original.JPG?1386728450",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4316440/original.jpg?1386728483",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316441/original.jpg?1386728533",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4316442/original.jpg?1386728591",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316443/original.jpg?1386728627",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316445/original.jpg?1386728670",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316447/original.jpg?1386728717",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316449/original.JPG?1386728744",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4316450/original.jpg?1386728768",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316453/original.jpg?1386728911",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316455/original.jpg?1386728933",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4316456/original.jpg?1386728937",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4316457/original.jpg?1386728939",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4323200/original.jpg?1386816780",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4323201/original.jpg?1386816903",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4323202/original.jpg?1386817176",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4323205/original.jpg?1386817968",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4323206/original.jpg?1386817980",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4323209/original.jpg?1386818061",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4323211/original.png?1386818136",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4323212/original.png?1386818141",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/4323215/original.jpg?1386818340",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/4323216/original.jpg?1386818524",
            "caption": ""
          }
        ],
        "price": 118,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5701237,
            45.5211876
          ]
        },
        "description": "Situated in Montréal, this 1 bedroom apartment accommodates up to 3 guests and starts at just USD 117 per night.\n\nThe accommodation is 86 sqm. It is located on the 2nd floor.\n\nIt also has internet (wifi) access. It features 1 double bed and 1 single bed and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a fridge, a freezer, an oven, a toaster, a kettle / water-boiler, and a washing machine. The property has a terrace. Guests can also enjoy a radio, a TV, and books.\n\nThis is a no-smoking property. Pets are not permitted.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 3,
        "bedroomCount": 2,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Wifi",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Terrace",
            "id": 23
          },
          {
            "text": "Tv",
            "id": 21
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/281503?aid=outpost"
      },
      {
        "heading": "Downtown Montreal!!!",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Studio",
          "id": 0
        },
        "pid": "htp357047",
        "address": {
          "city": "Montréal",
          "all": "Rue Saint-Marc, Downtown, Montréal, Quebec, CA, H3H 2P1",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Downtown",
          "postalCode": "H3H 2P1",
          "streetName": "Rue Saint-Marc"
        },
        "photos": [
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043914/original.JPG?1406435490",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043915/original.JPG?1406435490",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043916/original.JPG?1406435491",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043917/original.JPG?1406435492",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043919/original.JPG?1406435493",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043921/original.JPG?1406435506",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043922/original.JPG?1406435506",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043924/original.JPG?1406435508",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043925/original.JPG?1406435509",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043926/original.JPG?1406435510",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043927/original.JPG?1406435520",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043929/original.JPG?1406435522",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043930/original.JPG?1406435524",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043931/original.JPG?1406435524",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043932/original.JPG?1406435525",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043933/original.JPG?1406435528",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043934/original.JPG?1406435538",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043935/original.JPG?1406435540",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043936/original.JPG?1406435541",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043937/original.JPG?1406435545",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043938/original.JPG?1406435545",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043939/original.JPG?1406435567",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043940/original.JPG?1406435573",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/6043953/original.JPG?1406436193",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6043954/original.JPG?1406436529",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/6256298/original.JPG?1410242714",
            "caption": ""
          }
        ],
        "price": 94,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5820527,
            45.4939107
          ]
        },
        "description": "Situated in Montréal, this studio accommodates up to 2 guests and starts at just USD 94 per night.\n\nThe accommodation is 37 sqm. It is located on the 3rd floor. The building has an elevator.\n\nIt also has internet (wifi, cable) access. It features 1 double bed and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a fridge, a microwave, an oven, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a swimming pool, and parking / a garage. Guests can also enjoy a telephone and a TV.\n\nThe property is suitable for wheelchair users. This is a no-smoking property. Pets are not permitted.\n\n2 guests have been welcomed to this property. Guests have rated this property 4.0 out of 5 based on 1 review.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 2,
        "bedroomCount": 1,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Cable, Internet Wifi",
            "id": 22
          },
          {
            "text": "Internet Cable, Tv",
            "id": 21
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Parking",
            "id": 16
          },
          {
            "text": "Swimming Pool",
            "id": 18
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/357047?aid=outpost"
      },
      {
        "heading": "1 Bedroom apartment at District Griffin - 935",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp336203",
        "address": {
          "city": "Montréal",
          "all": "Rue du Séminaire, Vieux-Montréal, Montréal, Quebec, CA, H3C 2A3",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "Vieux-Montréal",
          "postalCode": "H3C 2A3",
          "streetName": "Rue du Séminaire"
        },
        "photos": [
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569243/original.jpg?1401219149",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569244/original.jpg?1401219173",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569245/original.jpg?1401219177",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569246/original.jpg?1401219181",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569247/original.jpg?1401219183",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569265/original.jpg?1401219280",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569266/original.jpg?1401219283",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569284/original.jpg?1401219493",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569286/original.jpg?1401219499",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569288/original.jpg?1401219507",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/5569291/original.jpg?1401219569",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569308/original.jpg?1401219660",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569318/original.jpg?1401219761",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569320/original.jpg?1401219765",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/5569334/original.jpg?1401219841",
            "caption": ""
          }
        ],
        "price": 106,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5615164,
            45.491422
          ]
        },
        "description": "Situated in Montréal, this 1 bedroom apartment accommodates up to 2 guests and starts at just USD 105 per night.\n\nThe accommodation is 70 sqm. It is located on the 5th floor. The building has an elevator.\n\nIt also has internet (wifi) access. It features 1 double bed and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a dish washer, a fridge, a freezer, a grill, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a swimming pool, and parking / a garage. Guests can also enjoy a telephone and a TV.\n\nThis is a no-smoking property. Pets are not permitted.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 2,
        "bedroomCount": 1,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Wifi",
            "id": 22
          },
          {
            "text": "Kitchen",
            "id": 15
          },
          {
            "text": "Parking",
            "id": 16
          },
          {
            "text": "Swimming Pool",
            "id": 18
          },
          {
            "text": "Tv",
            "id": 21
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/336203?aid=outpost"
      }
    ]
  };

  //   
  // ... INTERNETS PAST 2.
})

.controller('itemView', function($scope, $stateParams) {
  console.log('Scope:',$scope);
  console.log('Params:',$stateParams);
  $scope.data = {
        "heading": "Grand 7 1/2 ensoleillé   Quartier Rosemont",
        "roomType": {
          "text": "Entire Place",
          "id": 0
        },
        "propType": {
          "text": "Apartment",
          "id": 0
        },
        "pid": "htp131489",
        "address": {
          "city": "Montréal",
          "all": "7e avenue, Montréal, Quebec, CA, H1Y2N2",
          "country": "CA",
          "state": "Quebec",
          "neighbourhood": "",
          "postalCode": "H1Y2N2",
          "streetName": "7e avenue"
        },
        "photos": [
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667408/original.jpg?1348350375",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1667409/original.JPG?1348350411",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667410/original.JPG?1348350442",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1667420/original.JPG?1348350658",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1851416/original.png?1351008353",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851419/original.png?1351008369",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851423/original.png?1351008406",
            "caption": ""
          },
          {
            "url": "https://d3fw6fkxql67mc.cloudfront.net/photos/images/1851424/original.png?1351008420",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/1851425/original.png?1351008434",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/2818435/original.JPG?1366568407",
            "caption": ""
          },
          {
            "url": "https://d21c0uy0p6umop.cloudfront.net/photos/images/2818445/original.JPG?1366568501",
            "caption": ""
          }
        ],
        "price": 225,
        "latLng": {
          "type": "Point",
          "coordinates": [
            -73.5730767,
            45.548192
          ]
        },
        "description": "Situated in Montréal, this 2 bedroom apartment accommodates up to 8 guests and starts at just EUR 176 per night.\n\nThe accommodation is 149 sqm. It is located on the ground floor.\n\nIt also has internet (wifi, cable) access. It features 2 double beds and 2 sofa beds / futons and has 1 bathroom. Bed linens and towels are included.\n\nAdditionally, it offers a kitchen with a fridge, a freezer, a grill, a microwave, an oven, a coffee maker, a toaster, a kettle / water-boiler, a dryer, and a washing machine. The property has a balcony, a barbecue, a garden, and a terrace. Guests can also enjoy a CD player, a DVD player, a TV, video games/console, books, and board games.\n\nThis is a no-smoking property. Pets are not permitted.\n\n2 guests have been welcomed to this property.\n\nOnce you have booked, your host will contact you to arrange your check in.",
        "occupancy": 8,
        "bedroomCount": 3,
        "bathroomCount": 1,
        "bedCount": -1,
        "amenities": [
          {
            "text": "Dryer",
            "id": 4
          },
          {
            "text": "Elevator",
            "id": 11
          },
          {
            "text": "Garden, Terrace",
            "id": 23
          },
          {
            "text": "Heating",
            "id": 0
          },
          {
            "text": "Internet Cable, Internet Wifi",
            "id": 22
          },
          {
            "text": "Internet Cable, Tv",
            "id": 21
          },
          {
            "text": "Jacuzzi",
            "id": 13
          },
          {
            "text": "Kitchen",
            "id": 15
          }
        ],
        "provider": "housetrip",
        "link": "https://affiliate.housetrip.com/en/properties/131489?aid=outpost"
  };
});
