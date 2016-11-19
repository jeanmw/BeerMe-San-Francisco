// var db = require('./models'),
// 	Beer = db.Beer;
//
//
//
//
//
// var beers = [
//   // 20161119145015
// // http://api.brewerydb.com/v2/search?key=a67761debc04b5448556abdc77815abd&&q=ale&type=beer
//
//     {
//       "id": "JmrPJ7",
//       "name": "Cortland Wheat",
//       "nameDisplay": "Cortland Wheat",
//       "styleId": 97,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:01",
//       "updateDate": "2014-10-09 14:54:30",
//       "style": {
//         "id": 97,
//         "categoryId": 8,
//         "category": {
//           "id": 8,
//           "name": "North American Lager",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Premium Lager",
//         "shortName": "American Premium Lager",
//         "description": "This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \"premium\" (based on price) may not fit this definition.",
//         "ibuMin": "6",
//         "ibuMax": "15",
//         "abvMin": "4.3",
//         "abvMax": "5",
//         "srmMin": "2",
//         "srmMax": "6",
//         "ogMin": "1.044",
//         "fgMin": "1.01",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:40:04"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "1hCGDj",
//       "name": "Espresso Stout (discontinued)",
//       "nameDisplay": "Espresso Stout (discontinued)",
//       "styleId": 42,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:10",
//       "updateDate": "2012-03-22 13:04:45",
//       "style": {
//         "id": 42,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Stout",
//         "shortName": "American Stout",
//         "description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
//         "ibuMin": "35",
//         "ibuMax": "60",
//         "abvMin": "5.7",
//         "abvMax": "8.8",
//         "srmMin": "40",
//         "srmMax": "40",
//         "ogMin": "1.05",
//         "fgMin": "1.01",
//         "fgMax": "1.022",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:28:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "pVT9RH",
//       "name": "Winter Hook",
//       "nameDisplay": "Winter Hook",
//       "description": "The 29th version of Winterhook brewed for this year offers a rich caramel malt backbone, complex spiciness from the addition of rye malt and centennial hops, and a touch of roast to dry out the finish.  This beer is assertively dry hopped to give the beer a fresh spicy and citrus hop aroma.",
//       "abv": "6",
//       "ibu": "42",
//       "glasswareId": 5,
//       "availableId": 4,
//       "styleId": 32,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/pVT9RH/upload_OaxIZn-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/pVT9RH/upload_OaxIZn-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/pVT9RH/upload_OaxIZn-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:32",
//       "updateDate": "2015-12-15 22:16:31",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 4,
//         "name": "Seasonal",
//         "description": "Available at the same time of year, every year."
//       },
//       "style": {
//         "id": 32,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Amber/Red Ale",
//         "shortName": "Amber",
//         "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
//         "ibuMin": "30",
//         "ibuMax": "40",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "11",
//         "srmMax": "18",
//         "ogMin": "1.048",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:52"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "qRR84Y",
//       "name": "Kinmount Willie Stout",
//       "nameDisplay": "Kinmount Willie Stout",
//       "styleId": 42,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:33",
//       "updateDate": "2014-10-08 17:34:23",
//       "style": {
//         "id": 42,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Stout",
//         "shortName": "American Stout",
//         "description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
//         "ibuMin": "35",
//         "ibuMax": "60",
//         "abvMin": "5.7",
//         "abvMax": "8.8",
//         "srmMin": "40",
//         "srmMax": "40",
//         "ogMin": "1.05",
//         "fgMin": "1.01",
//         "fgMax": "1.022",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:28:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "jX04VW",
//       "name": "Old Izaak",
//       "nameDisplay": "Old Izaak",
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:51",
//       "updateDate": "2012-03-22 13:04:48",
//       "type": "beer"
//     },
//     {
//       "id": "ekxWv9",
//       "name": "Black Douglas",
//       "nameDisplay": "Black Douglas",
//       "styleId": 15,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:50",
//       "updateDate": "2015-05-29 17:37:53",
//       "style": {
//         "id": 15,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Scotch Ale",
//         "shortName": "Scotch Ale",
//         "description": "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
//         "ibuMin": "25",
//         "ibuMax": "35",
//         "abvMin": "6.2",
//         "abvMax": "8",
//         "srmMin": "15",
//         "srmMax": "30",
//         "ogMin": "1.072",
//         "fgMin": "1.016",
//         "fgMax": "1.028",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:21:11"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "UOIwZb",
//       "name": "Lake Superior ESB",
//       "nameDisplay": "Lake Superior ESB",
//       "styleId": 5,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:35",
//       "updateDate": "2015-06-03 21:52:04",
//       "style": {
//         "id": 5,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Extra Special Bitter",
//         "shortName": "ESB",
//         "description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
//         "ibuMin": "30",
//         "ibuMax": "45",
//         "abvMin": "4.8",
//         "abvMax": "5.8",
//         "srmMin": "8",
//         "srmMax": "14",
//         "ogMin": "1.046",
//         "fgMin": "1.01",
//         "fgMax": "1.016",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:19:20"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "xfCBBL",
//       "name": "Blonde Ale",
//       "nameDisplay": "Blonde Ale",
//       "abv": "5.4",
//       "availableId": 3,
//       "styleId": 109,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:51",
//       "updateDate": "2015-10-23 18:06:00",
//       "available": {
//         "id": 3,
//         "name": "Not Available",
//         "description": "Beer is not available."
//       },
//       "style": {
//         "id": 109,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Cream Ale or Lager",
//         "shortName": "Cream Ale",
//         "description": "Mild, pale, light-bodied ale, made using a warm fermentation (top or bottom) and cold lagering. Hop bitterness and flavor range from very low to low. Hop aroma is often absent. Sometimes referred to as cream ales, these beers are crisp and refreshing. Pale malt character predominates. Caramelized malt character should be absent. A fruity or estery aroma may be perceived. Diacetyl and chill haze should not be perceived. Sulfur character and/or sweet corn-like dimethylsulfide (DMS) should be extremely low or absent from this style of beer.",
//         "ibuMin": "10",
//         "ibuMax": "22",
//         "abvMin": "4.2",
//         "abvMax": "5.6",
//         "srmMin": "2",
//         "srmMax": "5",
//         "ogMin": "1.044",
//         "fgMin": "1.004",
//         "fgMax": "1.01",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:42:30"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "PsixhL",
//       "name": "Old Crustacean Barleywine",
//       "nameDisplay": "Old Crustacean Barleywine (1993)",
//       "styleId": 34,
//       "isOrganic": "N",
//       "year": 1993,
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:50",
//       "updateDate": "2013-11-25 00:14:38",
//       "style": {
//         "id": 34,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Barley Wine Ale",
//         "shortName": "American Barleywine",
//         "description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "60",
//         "ibuMax": "100",
//         "abvMin": "8.4",
//         "abvMax": "12",
//         "srmMin": "11",
//         "srmMax": "22",
//         "ogMin": "1.09",
//         "fgMin": "1.024",
//         "fgMax": "1.028",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:08"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "KBuGWA",
//       "name": "Double Black Stout",
//       "nameDisplay": "Double Black Stout",
//       "availableId": 2,
//       "styleId": 42,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/KBuGWA/upload_2Oxyoa-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/KBuGWA/upload_2Oxyoa-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/KBuGWA/upload_2Oxyoa-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:05",
//       "updateDate": "2015-12-15 23:04:56",
//       "available": {
//         "id": 2,
//         "name": "Limited",
//         "description": "Limited availability."
//       },
//       "style": {
//         "id": 42,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Stout",
//         "shortName": "American Stout",
//         "description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
//         "ibuMin": "35",
//         "ibuMax": "60",
//         "abvMin": "5.7",
//         "abvMax": "8.8",
//         "srmMin": "40",
//         "srmMax": "40",
//         "ogMin": "1.05",
//         "fgMin": "1.01",
//         "fgMax": "1.022",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:28:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "PmWJHL",
//       "name": "Old Crustacean Barleywine",
//       "nameDisplay": "Old Crustacean Barleywine (1996)",
//       "styleId": 34,
//       "isOrganic": "N",
//       "year": 1996,
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:50",
//       "updateDate": "2013-11-25 00:14:47",
//       "style": {
//         "id": 34,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Barley Wine Ale",
//         "shortName": "American Barleywine",
//         "description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "60",
//         "ibuMax": "100",
//         "abvMin": "8.4",
//         "abvMax": "12",
//         "srmMin": "11",
//         "srmMax": "22",
//         "ogMin": "1.09",
//         "fgMin": "1.024",
//         "fgMax": "1.028",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:08"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "fEXQl1",
//       "name": "Rye",
//       "nameDisplay": "Rye",
//       "availableId": 3,
//       "styleId": 97,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:07",
//       "updateDate": "2014-01-03 16:09:15",
//       "available": {
//         "id": 3,
//         "name": "Not Available",
//         "description": "Beer is not available."
//       },
//       "style": {
//         "id": 97,
//         "categoryId": 8,
//         "category": {
//           "id": 8,
//           "name": "North American Lager",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Premium Lager",
//         "shortName": "American Premium Lager",
//         "description": "This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \"premium\" (based on price) may not fit this definition.",
//         "ibuMin": "6",
//         "ibuMax": "15",
//         "abvMin": "4.3",
//         "abvMax": "5",
//         "srmMin": "2",
//         "srmMax": "6",
//         "ogMin": "1.044",
//         "fgMin": "1.01",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:40:04"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "b2HRQW",
//       "name": "Wind Chill Spiced Ale (discontinued)",
//       "nameDisplay": "Wind Chill Spiced Ale (discontinued)",
//       "styleId": 124,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:31",
//       "updateDate": "2014-10-09 16:54:26",
//       "style": {
//         "id": 124,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Herb and Spice Beer",
//         "shortName": "Spice Beer",
//         "description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
//         "ibuMin": "5",
//         "ibuMax": "70",
//         "abvMin": "2.5",
//         "abvMax": "12",
//         "srmMin": "5",
//         "srmMax": "50",
//         "ogMin": "1.03",
//         "fgMin": "1.006",
//         "fgMax": "1.03",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:44:45"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "C2BEm6",
//       "name": "Winterhook Robust Winter Ale",
//       "nameDisplay": "Winterhook Robust Winter Ale (1993)",
//       "description": "Winterhook is the perfect beer to keep warm during cold months after shoveling snow, shredding some powder, or playing hooky to can catch the game. Since it was first brewed, Redhook’s Winterhook has changed slightly each year to celebrate the season and keep everyone on their toes. After all, no one likes getting the same gift twice. The 29th version of Winterhook brewed for this year offers a rich caramel body that balances a big malt backbone with the aggressively dry hopped brew, making this year’s winter ale slightly naughty and very nice.",
//       "abv": "6",
//       "availableId": 3,
//       "styleId": 37,
//       "isOrganic": "N",
//       "year": 1993,
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/C2BEm6/upload_IG2HHe-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/C2BEm6/upload_IG2HHe-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/C2BEm6/upload_IG2HHe-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:32",
//       "updateDate": "2015-12-15 23:13:42",
//       "available": {
//         "id": 3,
//         "name": "Not Available",
//         "description": "Beer is not available."
//       },
//       "style": {
//         "id": 37,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Brown Ale",
//         "shortName": "American Brown",
//         "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "25",
//         "ibuMax": "45",
//         "abvMin": "4",
//         "abvMax": "6.4",
//         "srmMin": "15",
//         "srmMax": "26",
//         "ogMin": "1.04",
//         "fgMin": "1.01",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:35"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "WGEtq9",
//       "name": "ESB",
//       "nameDisplay": "ESB",
//       "description": "Redhook ESB is modeled after the premium Extra Special Bitters found in English pubs. Brewed since 1987, this full-bodied amber ale is Redhook's signature brew with its toasted malt flavor and pleasant finishing sweetness. Its eminently drinkable style has established Redhook ESB as a benchmark brew in the amber ale category.\r\n\r\nThe well-rounded finish of Redhook ESB makes it a wonderful companion to grilled meats. It is also great with game and cheeses.",
//       "abv": "5.8",
//       "ibu": "28",
//       "glasswareId": 5,
//       "srmId": 13,
//       "availableId": 1,
//       "styleId": 5,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/WGEtq9/upload_kMYH3h-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/WGEtq9/upload_kMYH3h-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/WGEtq9/upload_kMYH3h-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:10",
//       "updateDate": "2015-12-15 23:14:38",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "srm": {
//         "id": 13,
//         "name": "13",
//         "hex": "CB6200"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 5,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Extra Special Bitter",
//         "shortName": "ESB",
//         "description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
//         "ibuMin": "30",
//         "ibuMax": "45",
//         "abvMin": "4.8",
//         "abvMax": "5.8",
//         "srmMin": "8",
//         "srmMax": "14",
//         "ogMin": "1.046",
//         "fgMin": "1.01",
//         "fgMax": "1.016",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:19:20"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "zX88Rt",
//       "name": "Wheat Hook",
//       "nameDisplay": "Wheat Hook",
//       "availableId": 3,
//       "styleId": 97,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:30",
//       "updateDate": "2014-01-03 16:09:04",
//       "available": {
//         "id": 3,
//         "name": "Not Available",
//         "description": "Beer is not available."
//       },
//       "style": {
//         "id": 97,
//         "categoryId": 8,
//         "category": {
//           "id": 8,
//           "name": "North American Lager",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Premium Lager",
//         "shortName": "American Premium Lager",
//         "description": "This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \"premium\" (based on price) may not fit this definition.",
//         "ibuMin": "6",
//         "ibuMax": "15",
//         "abvMin": "4.3",
//         "abvMax": "5",
//         "srmMin": "2",
//         "srmMax": "6",
//         "ogMin": "1.044",
//         "fgMin": "1.01",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:40:04"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "N4p1nW",
//       "name": "Hoptoberfest",
//       "nameDisplay": "Hoptoberfest",
//       "availableId": 3,
//       "styleId": 81,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:26",
//       "updateDate": "2014-01-03 16:09:18",
//       "available": {
//         "id": 3,
//         "name": "Not Available",
//         "description": "Beer is not available."
//       },
//       "style": {
//         "id": 81,
//         "categoryId": 7,
//         "category": {
//           "id": 7,
//           "name": "European-germanic Lager",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "German-Style Märzen",
//         "shortName": "Märzen",
//         "description": "Märzens are characterized by a medium body and broad range of color. They can range from golden to reddish orange. Sweet maltiness should dominate slightly over a clean hop bitterness. Malt character should be light-toasted rather than strongly caramel (though a low level of light caramel character is acceptable). Bread or biscuit-like malt character is acceptable in aroma and flavor. Hop aroma and flavor should be low but notable. Ale-like fruity esters should not be perceived. Diacetyl and chill haze should not be perceived.",
//         "ibuMin": "18",
//         "ibuMax": "25",
//         "abvMin": "5.3",
//         "abvMax": "5.9",
//         "srmMin": "4",
//         "srmMax": "15",
//         "ogMin": "1.05",
//         "fgMin": "1.012",
//         "fgMax": "1.02",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:36:50"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "Ff8SbR",
//       "name": "India Pale Ale",
//       "nameDisplay": "India Pale Ale",
//       "description": "Our IPA is the essence of \"beer in balance\". Dry-hopped with Columbus hops in our open fermenters, our IPA boasts a bright floral aroma and flavor reminiscent of pine and lemon peel. The pronounced hop bitterness is balanced by a medium-bodied caramel and biscuity malt character with a nutty finish.\r\n\r\nTrue to the original English version of this style, our India Pale Ale showcases many subtle earthy bitter notes, rather than the resinous citrus-rind bite often featured in many American-style IPAs. This unique, sessionable brew would have surely pleased British troops stationed in faraway lands.\r\nRecommended Foods: Indian Cuisine, Cajun, Creole, Aged Bleu Cheese, Grilled Seafood or Shellfish",
//       "abv": "5.9",
//       "ibu": "41",
//       "glasswareId": 5,
//       "availableId": 1,
//       "styleId": 30,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/Ff8SbR/upload_3uMGnf-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/Ff8SbR/upload_3uMGnf-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/Ff8SbR/upload_3uMGnf-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:28",
//       "updateDate": "2015-12-15 21:33:33",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 30,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style India Pale Ale",
//         "shortName": "American IPA",
//         "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
//         "ibuMin": "50",
//         "ibuMax": "70",
//         "abvMin": "6.3",
//         "abvMax": "7.5",
//         "srmMin": "6",
//         "srmMax": "14",
//         "ogMin": "1.06",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:37"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "OpMVbb",
//       "name": "Nut Brown",
//       "nameDisplay": "Nut Brown",
//       "description": "Ah, Spring…the season that keeps us guessing.  Will it rain, or will the sun be out?  Do I take advantage of the last days of skiing, or the first days of hiking?  Do I put on jeans, or dare break out the shorts?  The season comes with enough uncertainty, so Redhook gives you something you can always count on…our Nut Brown Ale.  This medium dark beer is layered with rich malty aromas and flavors of chocolate, caramel, brown sugar, and a hint of vanilla.  Although it may be dark in color, it’s refreshingly smooth and highly sessionable.  Nut Brown is the perfect beer for spring.",
//       "abv": "5.8",
//       "ibu": "30",
//       "glasswareId": 5,
//       "availableId": 5,
//       "styleId": 10,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/OpMVbb/upload_bdX6PI-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/OpMVbb/upload_bdX6PI-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/OpMVbb/upload_bdX6PI-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:47",
//       "updateDate": "2015-12-15 21:53:04",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 5,
//         "name": "Spring",
//         "description": "Available during the spring months."
//       },
//       "style": {
//         "id": 10,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "English-Style Pale Mild Ale",
//         "shortName": "English Pale Mild",
//         "description": "English pale mild ales range from golden to amber in color. Malt flavor dominates the flavor profile with little hop bitterness or flavor. Hop aroma can be light. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "10",
//         "ibuMax": "20",
//         "abvMin": "3.2",
//         "abvMax": "4",
//         "srmMin": "8",
//         "srmMax": "17",
//         "ogMin": "1.03",
//         "fgMin": "1.004",
//         "fgMax": "1.008",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:20:35"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "xsnJ3o",
//       "name": "Jeffrey Hudson Bitter",
//       "nameDisplay": "Jeffrey Hudson Bitter",
//       "description": "A golden beer whose aroma is dominated by hops that give characteristic citrus notes. Hops and fruit on the palate are balanced by malt and a bitter base. Dry hoppy finish with soft fruit flavours.",
//       "abv": "3.8",
//       "availableId": 1,
//       "styleId": 3,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/xsnJ3o/upload_4YobTh-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/xsnJ3o/upload_4YobTh-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/xsnJ3o/upload_4YobTh-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:31",
//       "updateDate": "2015-12-15 21:46:25",
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 3,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Ordinary Bitter",
//         "shortName": "Bitter",
//         "description": "Ordinary bitter is gold to copper colored with medium bitterness, light to medium body, and low to medium residual malt sweetness. Hop flavor and aroma character may be evident at the brewer's discretion. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character and very low diacetyl (butterscotch) character are acceptable in aroma and flavor, but should be minimized in this form of bitter. Chill haze is allowable at cold temperatures. (English and American hop character may be specified in subcategories.)",
//         "ibuMin": "20",
//         "ibuMax": "35",
//         "abvMin": "3",
//         "abvMax": "4.1",
//         "srmMin": "5",
//         "srmMax": "12",
//         "ogMin": "1.033",
//         "fgMin": "1.006",
//         "fgMax": "1.012",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:18:39"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "uQZmHI",
//       "name": "Sunrye",
//       "nameDisplay": "Sunrye",
//       "availableId": 2,
//       "styleId": 117,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/uQZmHI/upload_bRvqLz-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/uQZmHI/upload_bRvqLz-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/uQZmHI/upload_bRvqLz-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:20",
//       "updateDate": "2015-12-15 22:21:05",
//       "available": {
//         "id": 2,
//         "name": "Limited",
//         "description": "Limited availability."
//       },
//       "style": {
//         "id": 117,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Rye Ale or Lager with or without Yeast",
//         "shortName": "Rye Ale",
//         "description": "Rye beers can be made using either ale or lager yeast. It should be brewed with at least 20 percent rye malt, and low to medium perception of hop bitterness. Hop aroma and flavor can be low to medium-high. These are often versions of classic styles that contain noticeable rye character in balance with other qualities of the beer. A spicy, fruity-estery aroma and flavor are typical but at low levels; however, phenolic, clove-like characteristics should not be perceived. Color is straw to amber, and the body should be light to medium in character. Diacetyl should not be perceived. If this style is packaged and served without yeast, no yeast characters should be evident in mouthfeel, flavor, or aroma. A low level of tannin derived astringency may be perceived. If this style is served with yeast, the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of rye and barley malt and hops. Darker versions of this style will be dark amber to dark brown, and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like, caramel, or biscuit-like characters may be part of the overall flavor/aroma profile. As in the lighter colored versions, diacetyl should not be perceived. Competition directors may create specific styles of rye beer, such as Rye Pale Ale or Rye Brown Ale. A statement by the brewer indicating if the beer is based on a classic style is essential for accurate judging.",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:44:12"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "sitjIr",
//       "name": "Old Jock Ale",
//       "nameDisplay": "Old Jock Ale",
//       "styleId": 1,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:51",
//       "updateDate": "2015-05-29 17:38:18",
//       "style": {
//         "id": 1,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Classic English-Style Pale Ale",
//         "shortName": "English Pale",
//         "description": "Classic English pale ales are golden to copper colored and display earthy, herbal English-variety hop character. Note that \"earthy, herbal English-variety hop character\" is the perceived end, but may be a result of the skillful use of hops of other national origins. Medium to high hop bitterness, flavor, and aroma should be evident. This medium-bodied pale ale has low to medium malt flavor and aroma. Low caramel character is allowable. Fruity-ester flavors and aromas are moderate to strong. Chill haze may be in evidence only at very cold temperatures. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.",
//         "ibuMin": "20",
//         "ibuMax": "40",
//         "abvMin": "4.5",
//         "abvMax": "5.5",
//         "srmMin": "5",
//         "srmMax": "5",
//         "ogMin": "1.04",
//         "fgMin": "1.008",
//         "fgMax": "1.016",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:18:23"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "tqnE1Q",
//       "name": "Scotch Ale",
//       "nameDisplay": "Scotch Ale",
//       "glasswareId": 5,
//       "styleId": 14,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/tqnE1Q/upload_OANlrc-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/tqnE1Q/upload_OANlrc-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/tqnE1Q/upload_OANlrc-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:11",
//       "updateDate": "2015-12-15 22:13:20",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "style": {
//         "id": 14,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Strong Ale",
//         "shortName": "Strong Ale",
//         "description": "Light amber to mid-range brown in color, strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich, often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong.)",
//         "ibuMin": "30",
//         "ibuMax": "65",
//         "abvMin": "7",
//         "abvMax": "11",
//         "srmMin": "8",
//         "srmMax": "21",
//         "ogMin": "1.06",
//         "fgMin": "1.014",
//         "fgMax": "1.04",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:21:05"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "knxeTj",
//       "name": "Imperial Stout",
//       "nameDisplay": "Imperial Stout",
//       "description": "A Limited Release Seasonal offering, Imperial Stout is a big, boldly-flavored beer fit for royalty! True to style, Imperial Stout is full-bodied and warming, with a creamy texture. Boasting rich, roasty aromas and flavors of roasted coffee, black currants, plums, and bittersweet cocoa, this beer certainly packs a punch. A generous hop addition adds a level of complexity and balance, along with a pleasant bitterness.\r\n\r\nThis extraordinary stout will continue to mature nicely with age. Flavors tend to mellow and become more rounded after a year or two. Buy as much as you can and lay some down in the cellar for a few years to taste multiple vintages vertically.\r\nRecommended Foods: Roquefort Sheep's Milk Cheese, Molten Chocolate Cake, Robust Game Meats. Try with a fine Maduro-wrapped cigar!",
//       "abv": "8.4",
//       "ibu": "59",
//       "glasswareId": 5,
//       "availableId": 2,
//       "styleId": 43,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/knxeTj/upload_ZdMMaI-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/knxeTj/upload_ZdMMaI-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/knxeTj/upload_ZdMMaI-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:28",
//       "updateDate": "2015-12-15 22:15:01",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 2,
//         "name": "Limited",
//         "description": "Limited availability."
//       },
//       "style": {
//         "id": 43,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Imperial Stout",
//         "shortName": "American Imperial Stout",
//         "description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
//         "ibuMin": "50",
//         "ibuMax": "80",
//         "abvMin": "7",
//         "abvMax": "12",
//         "srmMin": "40",
//         "srmMax": "40",
//         "ogMin": "1.08",
//         "fgMin": "1.02",
//         "fgMax": "1.03",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:28:49"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "kIi8qg",
//       "name": "Nut Brown",
//       "nameDisplay": "Nut Brown",
//       "description": "Nut Brown Ale is our Fall/Winter Seasonal, an easy-drinking medium-bodied English-style Brown Ale. Six varieties of premium malted barley provide the beer with a deep, mahogany color and a rich flavor. Hints of cocoa, dates, freshly-baked biscuits and toasted almonds come to the forefront, while the malty, sweet finish is balanced by a smooth bitterness, subtle fruitiness and a mild hop aroma.\r\n\r\nAlthough quite smooth and easy on the palate, Nut Brown Ale boasts flavors rich enough to stand up to many hearty foods throughout the cooler months. Look for strong, caramelized malt flavors from the roasted barley that share similar characteristics with the flavors of roasted or grilled meats.\r\nRecommended Foods: Aged Gouda, Creamy Soups, Chili, Steak and Potatoes, Venison Sausage, Grilled Meats, Grilled Roof Vegetables, Brownies",
//       "abv": "5.6",
//       "ibu": "26",
//       "glasswareId": 5,
//       "availableId": 4,
//       "styleId": 37,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/kIi8qg/upload_y32gev-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/kIi8qg/upload_y32gev-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/kIi8qg/upload_y32gev-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:47",
//       "updateDate": "2015-12-15 22:26:44",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 4,
//         "name": "Seasonal",
//         "description": "Available at the same time of year, every year."
//       },
//       "style": {
//         "id": 37,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Brown Ale",
//         "shortName": "American Brown",
//         "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "25",
//         "ibuMax": "45",
//         "abvMin": "4",
//         "abvMax": "6.4",
//         "srmMin": "15",
//         "srmMax": "26",
//         "ogMin": "1.04",
//         "fgMin": "1.01",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:35"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "McQx07",
//       "name": "London Porter",
//       "nameDisplay": "London Porter",
//       "description": "This is our version of an 18th Century \"Smoked Porter\". Our London Porter has a subtle accent of beechwood smoked malt, which comes through nicely in the aroma and the flavor. Brewed using seven varieties of premium European malted barley, this full-bodied beer is characterized by hints of chocolate and coffee, and balanced by a long-lingering hoppy bitterness.\r\n\r\nIn a style that generally focuses on malt alone, our London Porter is unique in its rich, smoky, peaty characteristics. It has earthy, grassy notes as well, courtesy of UK Goldings hops.\r\nRecommended Foods: Sharp Cheddar, Smoked Salmon, BBQ or Smoked Meats, Oysters, Mushrooms, Tiramisu, Apple Tart",
//       "abv": "7.2",
//       "ibu": "42",
//       "glasswareId": 5,
//       "availableId": 1,
//       "styleId": 18,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/McQx07/upload_IYVtK3-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/McQx07/upload_IYVtK3-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/McQx07/upload_IYVtK3-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:38",
//       "updateDate": "2015-12-15 22:15:25",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 18,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Brown Porter",
//         "shortName": "Brown Porter",
//         "description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
//         "ibuMin": "20",
//         "ibuMax": "30",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "20",
//         "srmMax": "35",
//         "ogMin": "1.04",
//         "fgMin": "1.006",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:21:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "yw9l9Y",
//       "name": "Starboard Stout",
//       "nameDisplay": "Starboard Stout",
//       "description": "This Irish oat malt stout is brewed with a generous portion of malted oats, imparting a unique flavor and texture which distinguishes it from most dry stouts. It is robust yet well-balanced, with a chocolatey, roasted malt character and a creamy mouthfeel. The subtle yet complex hop flavor is provided by Willamette hops. This is the only brand we brew exclusively as a nitrogenated draft.",
//       "abv": "5.6",
//       "ibu": "29",
//       "availableId": 1,
//       "styleId": 21,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/yw9l9Y/upload_RSxRtk-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/yw9l9Y/upload_RSxRtk-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/yw9l9Y/upload_RSxRtk-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:17",
//       "updateDate": "2015-12-15 22:14:56",
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 21,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Oatmeal Stout",
//         "shortName": "Oatmeal Stout",
//         "description": "Oatmeal stouts include oatmeal in their grist, resulting in a pleasant, full flavor and a smooth profile that is rich without being grainy. A roasted malt character which is caramel-like and chocolate-like should be evident - smooth and not bitter. Coffee-like roasted barley and roasted malt aromas (chocolate and nut-like) are prominent. Color is dark brown to black. Bitterness is moderate, not high. Hop flavor and aroma are optional but should not overpower the overall balance if present. This is a medium- to full- bodied beer, with minimal fruity esters. Diacetyl should be absent or at extremely low levels. Original gravity range and alcohol levels are indicative of English tradition of oatmeal stout.",
//         "ibuMin": "20",
//         "ibuMax": "40",
//         "abvMin": "3.8",
//         "abvMax": "6",
//         "srmMin": "20",
//         "srmMax": "20",
//         "ogMin": "1.038",
//         "fgMin": "1.008",
//         "fgMax": "1.02",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:22:53"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "bFsZIz",
//       "name": "Arcadia ESB",
//       "nameDisplay": "Arcadia ESB",
//       "styleId": 5,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:43",
//       "updateDate": "2015-06-03 21:46:02",
//       "style": {
//         "id": 5,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Extra Special Bitter",
//         "shortName": "ESB",
//         "description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
//         "ibuMin": "30",
//         "ibuMax": "45",
//         "abvMin": "4.8",
//         "abvMax": "5.8",
//         "srmMin": "8",
//         "srmMax": "14",
//         "ogMin": "1.046",
//         "fgMin": "1.01",
//         "fgMax": "1.016",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:19:20"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "DZbNSQ",
//       "name": "Anglers Ale",
//       "nameDisplay": "Anglers Ale",
//       "description": "Our original flagship ale! First brewed in 1996, Angler's Ale is a strikingly authentic English-style Pale Ale. Medium-bodied and easy-drinking, this clean, crisp ale boasts well-balanced flavors of caramel, toffee, and toasted malt, with just the right amount of bitterness. A delicate herbal hop finish is provided by Goldings whole leaf hops.\r\n\r\nTruly a study in balance, Angler's Ale is clean enough to be a perfect thirst-quencher on a hot day, yet complex enough to pair with a wide array of intensely flavored foods.\r\nRecommended Foods: Buffalo Burger, Pizza, Club Sandwiches, Fried Chicken, Aged Sharp Cheddar, Roast Beef with Vidalia Onions.",
//       "abv": "5.4",
//       "ibu": "34",
//       "glasswareId": 5,
//       "availableId": 1,
//       "styleId": 25,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/DZbNSQ/upload_RFA2Jj-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/DZbNSQ/upload_RFA2Jj-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/DZbNSQ/upload_RFA2Jj-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:42",
//       "updateDate": "2015-12-15 22:22:09",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 25,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Pale Ale",
//         "shortName": "American Pale",
//         "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "30",
//         "ibuMax": "42",
//         "abvMin": "4.5",
//         "abvMax": "5.6",
//         "srmMin": "6",
//         "srmMax": "14",
//         "ogMin": "1.044",
//         "fgMin": "1.008",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:25:18"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "BbwYWa",
//       "name": "Old Crustacean Barleywine",
//       "nameDisplay": "Old Crustacean Barleywine (2006)",
//       "abv": "11.5",
//       "srmId": 25,
//       "styleId": 34,
//       "isOrganic": "N",
//       "year": 2006,
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:50",
//       "updateDate": "2014-12-12 17:00:10",
//       "srm": {
//         "id": 25,
//         "name": "25",
//         "hex": "7B1A00"
//       },
//       "style": {
//         "id": 34,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Barley Wine Ale",
//         "shortName": "American Barleywine",
//         "description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "60",
//         "ibuMax": "100",
//         "abvMin": "8.4",
//         "abvMax": "12",
//         "srmMin": "11",
//         "srmMax": "22",
//         "ogMin": "1.09",
//         "fgMin": "1.024",
//         "fgMax": "1.028",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:08"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "eNaHVH",
//       "name": "Toleration",
//       "nameDisplay": "Toleration",
//       "abv": "4.4",
//       "styleId": 127,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/eNaHVH/upload_ATWLZh-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/eNaHVH/upload_ATWLZh-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/eNaHVH/upload_ATWLZh-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:23",
//       "updateDate": "2015-05-12 20:39:39",
//       "style": {
//         "id": 127,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Gluten-Free Beer",
//         "shortName": "Gluten-Free Beer",
//         "description": "A beer (lager, ale or other) that is made from fermentable sugars, grains and converted carbohydrates. Ingredients do not contain gluten, in other words zero gluten (No barley, wheat, spelt, oats, rye, etc). May or may not contain malted grains that do not contain gluten. Brewers may or may not design and identify these beers along other style guidelines with regard to flavor, aroma and appearance profile. The beer's overall balance and character should be based on its own merits and not necessarily compared with traditional styles of beer. In competitions, brewers identify ingredients and fermentation type. NOTE: These guidelines do not supersede any government regulations. Wine, mead, flavored malt beverages or beverages other than beer as defined by the TTB (U.S. Trade and Tax Bureau) are not considered \"gluten-free beer\" under these guidelines.",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:45:08"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "srxoYV",
//       "name": "Mortality Stout",
//       "nameDisplay": "Mortality Stout",
//       "abv": "7.5",
//       "styleId": 42,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:44",
//       "updateDate": "2015-04-09 18:34:44",
//       "style": {
//         "id": 42,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Stout",
//         "shortName": "American Stout",
//         "description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
//         "ibuMin": "35",
//         "ibuMax": "60",
//         "abvMin": "5.7",
//         "abvMax": "8.8",
//         "srmMin": "40",
//         "srmMax": "40",
//         "ogMin": "1.05",
//         "fgMin": "1.01",
//         "fgMax": "1.022",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:28:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "zLgP7J",
//       "name": "Old Crustacean Barleywine",
//       "nameDisplay": "Old Crustacean Barleywine (2005)",
//       "styleId": 34,
//       "isOrganic": "N",
//       "year": 2005,
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:50",
//       "updateDate": "2014-11-20 03:02:12",
//       "style": {
//         "id": 34,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Barley Wine Ale",
//         "shortName": "American Barleywine",
//         "description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "60",
//         "ibuMax": "100",
//         "abvMin": "8.4",
//         "abvMax": "12",
//         "srmMin": "11",
//         "srmMax": "22",
//         "ogMin": "1.09",
//         "fgMin": "1.024",
//         "fgMax": "1.028",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:08"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "RNHfY1",
//       "name": "Nightmare",
//       "nameDisplay": "Nightmare",
//       "description": "This is an extra stout porter but unlike many stouts, Nightmare is not harsh or overly bitter. This smooth, massively flavoured creamy drink is best served on the ‘warm’ side, allowing full appreciation of this four malt brew. Strong malts dominate, but hoppiness rears out of this complex blend. Nightmare has won the Gold Award at SIBA (North) Festival in 1999, 2003 and 2006 .",
//       "abv": "5",
//       "styleId": 18,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/RNHfY1/upload_mMwTeA-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/RNHfY1/upload_mMwTeA-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/RNHfY1/upload_mMwTeA-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:46",
//       "updateDate": "2015-12-15 20:57:11",
//       "style": {
//         "id": 18,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Brown Porter",
//         "shortName": "Brown Porter",
//         "description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
//         "ibuMin": "20",
//         "ibuMax": "30",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "20",
//         "srmMax": "35",
//         "ogMin": "1.04",
//         "fgMin": "1.006",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:21:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "ZiwDNN",
//       "name": "Hopluia",
//       "nameDisplay": "Hopluia",
//       "styleId": 25,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:26",
//       "updateDate": "2014-10-13 17:08:04",
//       "style": {
//         "id": 25,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Pale Ale",
//         "shortName": "American Pale",
//         "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "30",
//         "ibuMax": "42",
//         "abvMin": "4.5",
//         "abvMax": "5.6",
//         "srmMin": "6",
//         "srmMax": "14",
//         "ogMin": "1.044",
//         "fgMin": "1.008",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:25:18"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "opTwlP",
//       "name": "Saint Rogue Red Ale",
//       "nameDisplay": "Saint Rogue Red Ale",
//       "description": "Reddish copper in color, a roasty malty flavor, with a hoppy-spruce finish.\r\n\r\nBehind great beer there is a brewer, and behind great beef there is a bull. Fukutsuru (Fuku to his friends) is that bull. Ranked the top marbling bull in the U.S., Fuku is a Japanese Wagyu bull whose offspring produce premium grade American Kobe Beef that is served with St. Rogue Red. Over 50,000 units of Fuku’s pride is in the freezer for future breeding. In his final days, Fuku was given the opportunity to “socialize” with some fine, young cows. Instead, he chose to take a nap. We dedicate this beer to Fuku — a rogue to the very end.",
//       "abv": "5.1",
//       "ibu": "44",
//       "glasswareId": 5,
//       "srmId": 27,
//       "availableId": 4,
//       "styleId": 32,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/opTwlP/upload_sE2wKh-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/opTwlP/upload_sE2wKh-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/opTwlP/upload_sE2wKh-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:44:08",
//       "updateDate": "2015-12-16 03:08:39",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "srm": {
//         "id": 27,
//         "name": "27",
//         "hex": "701400"
//       },
//       "available": {
//         "id": 4,
//         "name": "Seasonal",
//         "description": "Available at the same time of year, every year."
//       },
//       "style": {
//         "id": 32,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Amber/Red Ale",
//         "shortName": "Amber",
//         "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
//         "ibuMin": "30",
//         "ibuMax": "40",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "11",
//         "srmMax": "18",
//         "ogMin": "1.048",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:52"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "3SvZ4H",
//       "name": "American Amber Ale",
//       "nameDisplay": "American Amber Ale",
//       "description": "Tawny amber in color with a coffee aroma and tight head. A delicate roasted malt accent, generous use of hops and a smooth finish. \r\n\r\nAmerican Amber, originally known as Ashland Amber (created at Rogues original brewpub in Ashland, Oregon which was destroyed by flooding several years ago).",
//       "abv": "5.6",
//       "ibu": "53",
//       "glasswareId": 5,
//       "availableId": 1,
//       "styleId": 32,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/3SvZ4H/upload_KbwI0F-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/3SvZ4H/upload_KbwI0F-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/3SvZ4H/upload_KbwI0F-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:41",
//       "updateDate": "2016-01-18 18:06:22",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 32,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Amber/Red Ale",
//         "shortName": "Amber",
//         "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
//         "ibuMin": "30",
//         "ibuMax": "40",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "11",
//         "srmMax": "18",
//         "ogMin": "1.048",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:52"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "fmeNDi",
//       "name": "Artisan Lager",
//       "nameDisplay": "Artisan Lager",
//       "description": "A vienna style lager",
//       "styleId": 97,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:43",
//       "updateDate": "2012-03-22 13:04:58",
//       "style": {
//         "id": 97,
//         "categoryId": 8,
//         "category": {
//           "id": 8,
//           "name": "North American Lager",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Premium Lager",
//         "shortName": "American Premium Lager",
//         "description": "This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \"premium\" (based on price) may not fit this definition.",
//         "ibuMin": "6",
//         "ibuMax": "15",
//         "abvMin": "4.3",
//         "abvMax": "5",
//         "srmMin": "2",
//         "srmMax": "6",
//         "ogMin": "1.044",
//         "fgMin": "1.01",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:40:04"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "I6NBN9",
//       "name": "Brutal IPA",
//       "nameDisplay": "Brutal IPA",
//       "description": "An Imperial bitter with exotic traditional floor malts, citrusy, hoppy flavor, stupendous hop aroma.\r\n\r\nDedicated to Justin Fisch, the Shade Man, and the official beer of the Rogue Nation. Brutal combines Oregon hops with English Malts. The Oregon grown Crystal hop is a triploid variety developed from the German Hallertau aroma hop variety with contributions from Cascade, Brewers Gold, and Early Green. Crystal is the only hop used in brewing Brutal and it provides a massive amount of aroma without dry-hopping.",
//       "abv": "6.5",
//       "ibu": "59",
//       "glasswareId": 5,
//       "availableId": 1,
//       "styleId": 30,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/I6NBN9/upload_5bpY2T-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/I6NBN9/upload_5bpY2T-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/I6NBN9/upload_5bpY2T-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:55",
//       "updateDate": "2015-12-16 03:11:12",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 30,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style India Pale Ale",
//         "shortName": "American IPA",
//         "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
//         "ibuMin": "50",
//         "ibuMax": "70",
//         "abvMin": "6.3",
//         "abvMax": "7.5",
//         "srmMin": "6",
//         "srmMax": "14",
//         "ogMin": "1.06",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:37"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "uQ5zWa",
//       "name": "Charlie 1981",
//       "nameDisplay": "Charlie 1981",
//       "description": "An unfiltered strong ale that is amber in color and has an intense piney hop aroma. The beer is named in honor of Charlie Papazian, president of the Association of Brewers, founder of the American Homebrewers Association and homebrewing guru. John Maier, Brewmaster for Rogue Ales, made his first batch of beer in 1981 using Papazians influential book \\The New Complete Joy of Homebrewing.\"",
//       "abv": "8.5",
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:58",
//       "updateDate": "2012-03-22 13:04:58",
//       "type": "beer"
//     },
//     {
//       "id": "Wjong1",
//       "name": "Chipotle Ale",
//       "nameDisplay": "Chipotle Ale",
//       "description": "Roasted chipotle peppers produce an eye opening chile flavor in this deep golden ale with a malty, smoky aroma and smooth, crisp flavor.\r\n\r\nDedicated to Spanish author Juan de la Cueva, who, in 1575, wrote of a Mexican dish that combined seedless chipotles with beer: Chipotle Ale is based on Rogue’s American Amber Ale, but delicately spiced with smoked chipotle chile peppers. Blend it with Rogue Chocolate Stout and create a Mole black and tan!",
//       "abv": "5.5",
//       "ibu": "35",
//       "glasswareId": 5,
//       "srmId": 23,
//       "availableId": 1,
//       "styleId": 32,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/Wjong1/upload_JPUJK7-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/Wjong1/upload_JPUJK7-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/Wjong1/upload_JPUJK7-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:42:59",
//       "updateDate": "2015-12-16 03:08:36",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "srm": {
//         "id": 23,
//         "name": "23",
//         "hex": "882300"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 32,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Amber/Red Ale",
//         "shortName": "Amber",
//         "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
//         "ibuMin": "30",
//         "ibuMax": "40",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "11",
//         "srmMax": "18",
//         "ogMin": "1.048",
//         "fgMin": "1.012",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:52"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "lNGPyt",
//       "name": "Hazelnut Brown Nectar",
//       "nameDisplay": "Hazelnut Brown Nectar",
//       "description": "A nutty twist to a traditional European Brown Ale. Dark brown in color with a hazelnut aroma, a rich nutty flavor and a smooth malty finish.\r\n\r\nDedicated to the homebrewer in each of us! The homebrewer who inspired this creation is Chris Studach, a friend of Rogue’s resident wizard John Maier, who added a Northwest twist to the classic style by adding hazelnuts for the host homebrew at the 1993 American Homebrewers Association convention. Chris put the nut in nut brown!",
//       "abv": "6",
//       "ibu": "33",
//       "glasswareId": 5,
//       "srmId": 36,
//       "availableId": 1,
//       "styleId": 37,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/lNGPyt/upload_1IIL3Y-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/lNGPyt/upload_1IIL3Y-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/lNGPyt/upload_1IIL3Y-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "originalGravity": "1.057",
//       "createDate": "2012-01-03 02:43:20",
//       "updateDate": "2015-12-16 03:06:49",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "srm": {
//         "id": 36,
//         "name": "36",
//         "hex": "440607"
//       },
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 37,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Brown Ale",
//         "shortName": "American Brown",
//         "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "25",
//         "ibuMax": "45",
//         "abvMin": "4",
//         "abvMax": "6.4",
//         "srmMin": "15",
//         "srmMax": "26",
//         "ogMin": "1.04",
//         "fgMin": "1.01",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:35"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "NgzE8K",
//       "name": "Honey Cream Ale",
//       "nameDisplay": "Honey Cream Ale",
//       "description": "Honey Cream Ale is fermented warm like traditional cream ales but features an added twist--wildflower honey from Oregon. Honey imparts a dry, refreshing character to the beer because it ferments almost completely. The honey comes from a beekeeper in Blodgett, a tiny town 20 miles east of Newport.\r\n\r\nRogues Honey Cream Ale is a light, smooth, medium bodied ale, with a creamy head, hints of honey and a crisp light finish. Brewed with two-row Harrington, Klages and Munich malts and Crystal hops. Discontined for distribution in late 2005, available on tap only at Rogue Ales Public Houses.",
//       "abv": "5.5",
//       "styleId": 109,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/NgzE8K/upload_gs6Yxs-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/NgzE8K/upload_gs6Yxs-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/NgzE8K/upload_gs6Yxs-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:24",
//       "updateDate": "2015-12-16 03:33:57",
//       "style": {
//         "id": 109,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "American-Style Cream Ale or Lager",
//         "shortName": "Cream Ale",
//         "description": "Mild, pale, light-bodied ale, made using a warm fermentation (top or bottom) and cold lagering. Hop bitterness and flavor range from very low to low. Hop aroma is often absent. Sometimes referred to as cream ales, these beers are crisp and refreshing. Pale malt character predominates. Caramelized malt character should be absent. A fruity or estery aroma may be perceived. Diacetyl and chill haze should not be perceived. Sulfur character and/or sweet corn-like dimethylsulfide (DMS) should be extremely low or absent from this style of beer.",
//         "ibuMin": "10",
//         "ibuMax": "22",
//         "abvMin": "4.2",
//         "abvMax": "5.6",
//         "srmMin": "2",
//         "srmMax": "5",
//         "ogMin": "1.044",
//         "fgMin": "1.004",
//         "fgMax": "1.01",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:42:30"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "00i2Hl",
//       "name": "XS Imperial India Pale Ale",
//       "nameDisplay": "XS Imperial India Pale Ale",
//       "description": "Above and beyond an India Pale Ale--I2PA is radically hopped with an intense aroma and hop bitterness. Unfiltered and aged for 9 months before it leaves the brewery--not for the faint of heart. I2PA is brewed with two-row Pipkin Pale malts, Saaz, Cascade and Northwest Golding hops. I2PA is available in a new 750ml Silkscreened black ceramic bottle and on draft.",
//       "abv": "9.5",
//       "styleId": 31,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/00i2Hl/upload_MxBQZH-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/00i2Hl/upload_MxBQZH-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/00i2Hl/upload_MxBQZH-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:27",
//       "updateDate": "2015-12-16 03:34:10",
//       "style": {
//         "id": 31,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Imperial or Double India Pale Ale",
//         "shortName": "Imperial IPA",
//         "description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
//         "ibuMin": "65",
//         "ibuMax": "100",
//         "abvMin": "7.5",
//         "abvMax": "10.5",
//         "srmMin": "5",
//         "srmMax": "13",
//         "ogMin": "1.075",
//         "fgMin": "1.012",
//         "fgMax": "1.02",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:26:46"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "cKQqRC",
//       "name": "Juniper Pale Ale",
//       "nameDisplay": "Juniper Pale Ale",
//       "description": "Juniper Pale Ale: the new package for Yellow Snow Ale (winter 2004/2005). While the recipe (a pale ale infused with whole juniper berries) on the label remain the same, the name and label are new for 2005. Juniper Pale Ale is available in the classic 22-ounce bottle and on draft.",
//       "abv": "5.3",
//       "srmId": 9,
//       "styleId": 124,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/cKQqRC/upload_4eqPj2-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/cKQqRC/upload_4eqPj2-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/cKQqRC/upload_4eqPj2-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:32",
//       "updateDate": "2015-12-16 03:13:23",
//       "srm": {
//         "id": 9,
//         "name": "9",
//         "hex": "E58500"
//       },
//       "style": {
//         "id": 124,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Herb and Spice Beer",
//         "shortName": "Spice Beer",
//         "description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
//         "ibuMin": "5",
//         "ibuMax": "70",
//         "abvMin": "2.5",
//         "abvMax": "12",
//         "srmMin": "5",
//         "srmMax": "50",
//         "ogMin": "1.03",
//         "fgMin": "1.006",
//         "fgMax": "1.03",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:44:45"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "Ee9ead",
//       "name": "Mom Hefeweizen",
//       "nameDisplay": "Mom Hefeweizen",
//       "description": "Half-e-Weizen (formerly Mo Ale), was inspired by, and dedicated to, Mo and Dutch Niemi, real people inspiring a real product. Mo was a restaurateur and raconteur whose clam chowder is world-famous; Dutch a leader by example for coastal fisherman. Together their spirit indelibly shapes the daily lives of the Newport, OR waterfront.\r\n\r\nHalf-e-Weizen is a refreshing, unfiltered fusion of wheat and Northwest Harrington malts, coriander, ginger, and Saaz hops in the Belgium style. Half-e-Weizen is available in the classic 22-ounce bottle and on draft.",
//       "abv": "4.8",
//       "styleId": 61,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/Ee9ead/upload_Pmcwfh-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/Ee9ead/upload_Pmcwfh-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/Ee9ead/upload_Pmcwfh-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:43",
//       "updateDate": "2016-01-20 17:28:27",
//       "style": {
//         "id": 61,
//         "categoryId": 5,
//         "category": {
//           "id": 5,
//           "name": "Belgian And French Origin Ales",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Belgian-Style Blonde Ale",
//         "shortName": "Belgian Blonde",
//         "description": "Belgian-style blond ales are characterized by low yet evident hop bitterness, flavor, and sometimes aroma. Light to medium body and low malt aroma with a sweet, spiced and a low to medium fruity-ester character orchestrated in flavor and aroma. Sugar may be used to lighten perceived body. They are blonde to golden in color. Noble-type hops are commonly used. Low levels of phenolic spiciness from yeast byproducts may be perceived. Diacetyl should not be perceived. Acidic character should not be present. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "15",
//         "ibuMax": "30",
//         "abvMin": "6",
//         "abvMax": "7.8",
//         "srmMin": "4",
//         "srmMax": "7",
//         "ogMin": "1.054",
//         "fgMin": "1.008",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:32:01"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "qxsSk4",
//       "name": "Mocha Porter",
//       "nameDisplay": "Mocha Porter",
//       "description": "Dedicated to the chocolate lover in each of us. Mocha Porter was once known as New Porter, in honor of the town of Newport, Oregon and home of Rogue Ales. The January/February 1995 issue of Mens Health magazine features a bottle of Rogue New Porter (todays Mocha Porter) in the Fifth Annual Collection of Good Advise, Health News, Dire Warnings, Notable Folks and Unsolicited Opinion. New Porter is described as the Best New Beer for 1994! The caption reads: Oha bittersweet balance of malt and hops with a light cream finish. Mocha Porter is made from Northwest Harrington and Klages; 135-165, 95-115 and 70-80 Crystal; Beeston Chocolate Black Munich and Carastan malts. Perle and Centennial hops. Mocha Porter is available in a 12-ounce 6-pack the classic 22-ounce bottle and on draft.",
//       "abv": "5.3",
//       "ibu": "54",
//       "availableId": 1,
//       "styleId": 18,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/qxsSk4/upload_mHhtqG-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/qxsSk4/upload_mHhtqG-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/qxsSk4/upload_mHhtqG-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:43",
//       "updateDate": "2015-12-16 03:40:28",
//       "available": {
//         "id": 1,
//         "name": "Year Round",
//         "description": "Available year round as a staple beer."
//       },
//       "style": {
//         "id": 18,
//         "categoryId": 1,
//         "category": {
//           "id": 1,
//           "name": "British Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "Brown Porter",
//         "shortName": "Brown Porter",
//         "description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
//         "ibuMin": "20",
//         "ibuMax": "30",
//         "abvMin": "4.5",
//         "abvMax": "6",
//         "srmMin": "20",
//         "srmMax": "35",
//         "ogMin": "1.04",
//         "fgMin": "1.006",
//         "fgMax": "1.014",
//         "createDate": "2012-03-21 20:06:45",
//         "updateDate": "2015-04-07 15:21:43"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "THbGtV",
//       "name": "Mogul Madness Ale",
//       "nameDisplay": "Mogul Madness Ale",
//       "description": "Hoppy, caramel aroma, dark burgundy in color with an off white head. Intense flavors of citrus hops, and complex notes of nuts, berries and mocha. It finishes long and lingers for at least 15 seconds.",
//       "abv": "6.25",
//       "ibu": "68",
//       "glasswareId": 5,
//       "availableId": 8,
//       "styleId": 124,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/THbGtV/upload_TlePg9-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/THbGtV/upload_TlePg9-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/THbGtV/upload_TlePg9-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "foodPairings": "Poultry, Spicy",
//       "originalGravity": "1.068",
//       "createDate": "2012-01-03 02:43:43",
//       "updateDate": "2015-12-16 03:13:53",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "available": {
//         "id": 8,
//         "name": "Winter",
//         "description": "Available during the winter months."
//       },
//       "style": {
//         "id": 124,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Herb and Spice Beer",
//         "shortName": "Spice Beer",
//         "description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
//         "ibuMin": "5",
//         "ibuMax": "70",
//         "abvMin": "2.5",
//         "abvMax": "12",
//         "srmMin": "5",
//         "srmMax": "50",
//         "ogMin": "1.03",
//         "fgMin": "1.006",
//         "fgMax": "1.03",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:44:45"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "5bK52w",
//       "name": "Monk Madness Ale",
//       "nameDisplay": "Monk Madness Ale",
//       "description": "Let us give praise to our maker and glory to his bounty by learning about beer.\\ ~ Friar Tuck\nThe debut of Monk Madness began with the Johns Locker Stock draft program before being released to the Rogue Nation in the autumn of 2006 in 22-ounce bottles and kegs. Five layers of malt create a complex slightly sweet flavor balanced by five different hop varieties. A versatile and robust ale we recommend pairing this with spicy foods stong cheeses and/or with dessert. \nMonk Madness Ale is brewed with 12 ingredients: 2-row Pale Belgian Munich Belgian Special B Weyermann Melonodon and Amber Malts; Belgian Nobles Chinook Amarillo Centennial and Summit Hops; along with free-range coastal water and Rogues proproetary PacMan Yeast. Available in 22 ounce bottles and kegs. Note Monk Madness was not brewed in the winter of 2007-2008 due to shortages of the speciality malts.\"\"",
//       "abv": "7.4",
//       "styleId": 37,
//       "isOrganic": "N",
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:43",
//       "updateDate": "2014-10-10 19:00:52",
//       "style": {
//         "id": 37,
//         "categoryId": 3,
//         "category": {
//           "id": 3,
//           "name": "North American Origin Ales",
//           "createDate": "2012-03-21 20:06:45"
//         },
//         "name": "American-Style Brown Ale",
//         "shortName": "American Brown",
//         "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
//         "ibuMin": "25",
//         "ibuMax": "45",
//         "abvMin": "4",
//         "abvMax": "6.4",
//         "srmMin": "15",
//         "srmMax": "26",
//         "ogMin": "1.04",
//         "fgMin": "1.01",
//         "fgMax": "1.018",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:27:35"
//       },
//       "type": "beer"
//     },
//     {
//       "id": "hv2tCN",
//       "name": "Morimoto Black Obi Soba",
//       "nameDisplay": "Morimoto Black Obi Soba",
//       "description": "A richer version of our Soba Ale with the addition of specialty malts and a special blend of hops to give it a fuller, nutty flavor while retaining a clean, crisp finish.\r\n\r\nBlack Obi Soba Ale is dedicated to Phred Kaufmann, Rogue’s Distributor in Japan for the past decade—an International Rogue who runs Beer Inn Mugishutei in the city of Sapporo.",
//       "abv": "5",
//       "ibu": "30",
//       "glasswareId": 5,
//       "srmId": 36,
//       "availableId": 4,
//       "styleId": 125,
//       "isOrganic": "N",
//       "labels": {
//         "icon": "https://s3.amazonaws.com/brewerydbapi/beer/hv2tCN/upload_tPaKz9-icon.png",
//         "medium": "https://s3.amazonaws.com/brewerydbapi/beer/hv2tCN/upload_tPaKz9-medium.png",
//         "large": "https://s3.amazonaws.com/brewerydbapi/beer/hv2tCN/upload_tPaKz9-large.png"
//       },
//       "status": "verified",
//       "statusDisplay": "Verified",
//       "createDate": "2012-01-03 02:43:44",
//       "updateDate": "2015-12-16 03:17:02",
//       "glass": {
//         "id": 5,
//         "name": "Pint",
//         "createDate": "2012-01-03 02:41:33"
//       },
//       "srm": {
//         "id": 36,
//         "name": "36",
//         "hex": "440607"
//       },
//       "available": {
//         "id": 4,
//         "name": "Seasonal",
//         "description": "Available at the same time of year, every year."
//       },
//       "style": {
//         "id": 125,
//         "categoryId": 11,
//         "category": {
//           "id": 11,
//           "name": "Hybrid/mixed Beer",
//           "createDate": "2012-03-21 20:06:46"
//         },
//         "name": "Specialty Beer",
//         "shortName": "Specialty",
//         "description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
//         "ibuMax": "100",
//         "abvMin": "2.5",
//         "abvMax": "25",
//         "srmMin": "1",
//         "srmMax": "100",
//         "ogMin": "1.03",
//         "fgMin": "1.006",
//         "fgMax": "1.03",
//         "createDate": "2012-03-21 20:06:46",
//         "updateDate": "2015-04-07 15:44:53"
//       },
//       "type": "beer"
//     }
//
// ]
//
//
//
//
//
//
//   Beer.remove({}, function goodByeBeerss(err, succ) {
// 	if (err) {
// 		return console.log("ERR: ", err);
// 	}
//
// 	Beer.create(beers, function hoorayForBeer(err, succBeers) {
// 			if (err) {
// 				return console.log("ERR: ", err);
// 			}
// 			console.log(succBeers.length + " beers made");
// 	});
// });
