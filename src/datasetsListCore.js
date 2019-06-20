import React from "react";
const cropNameList = [];

const riceList = [];
const maizeList = [];
const wheatList = [];
const potatoList = [];
const bananaList = [];
const barleyList = [];
const cassavaList = [];
const chickpeaList = [];
const arabicaCoffeeList = [];
const robustaCoffeeList = [];
const cowpeaList = [];
const lentilList = [];
const pearlMilletList = [];
const pigeonpeaList = [];
const sorghumList = [];
const yamsList = [];
const beanList = [];
const cocoaList = [];
const groundnutList = [];
const plantainList = [];
const smallMilletList = [];
const soybeanList = [];
const sweetPotatoList = [];
const genesysCropList = [];

genesysCropList.push({id: 1, name: `Apple (19272 accessions)`, crop: "apple", placeholder: "Genesys"});
genesysCropList.push({id: 2, name: `Banana (2913 accessions)`, crop: "banana", placeholder: "Genesys"});
genesysCropList.push({id: 3, name: `Barley (179969 accessions)`, crop: "barley", placeholder: "Genesys"});
genesysCropList.push({id: 4, name: `Breadfruit (284 accessions)`, crop: "breadfruit", placeholder: "Genesys"});
genesysCropList.push({id: 5, name: `Cassava (13962 accessions)`, crop: "cassava", placeholder: "Genesys"});
genesysCropList.push({id: 6, name: `Chickpea (64138 accessions)`, crop: "chickpea", placeholder: "Genesys"});
genesysCropList.push({id: 7, name: `Coconut (168 accessions)`, crop: "coconut", placeholder: "Genesys"});
genesysCropList.push({id: 8, name: `Coffee (1990 accessions)`, crop: "coffee", placeholder: "Genesys"});
genesysCropList.push({id: 9, name: `Cowpea (34784 accessions)`, crop: "cowpea", placeholder: "Genesys"});
genesysCropList.push({id: 10, name: `Eggplant (5290 accessions)`, crop: "eggplant", placeholder: "Genesys"});
genesysCropList.push({id: 11, name: `Faba bean (24332 accessions)`, crop: "faba bean", placeholder: "Genesys"});
genesysCropList.push({id: 12, name: `Finger millet (2161 accessions)`, crop: "finger millet", placeholder: "Genesys"});
genesysCropList.push({id: 13, name: `Grass pea (2347 accessions)`, crop: "grass pea", placeholder: "Genesys"});
genesysCropList.push({id: 14, name: `Lentil (30669 accessions)`, crop: "lentil", placeholder: "Genesys"});
genesysCropList.push({id: 15, name: `Lettuce (8249 accessions)`, crop: "lettuce", placeholder: "Genesys"});
genesysCropList.push({id: 16, name: `Maize (94080 accessions)`, crop: "maize", placeholder: "Genesys"});
genesysCropList.push({id: 17, name: `Pearl millet (2712 accessions)`, crop: "pearl millet", placeholder: "Genesys"});
genesysCropList.push({id: 18, name: `Pigeonpea (15579 accessions)`, crop: "pigeonpea", placeholder: "Genesys"});
genesysCropList.push({id: 19, name: `Potato (23834 accessions)`, crop: "potato", placeholder: "Genesys"});
genesysCropList.push({id: 20, name: `Rice (213844 accessions)`, crop: "rice", placeholder: "Genesys"});
genesysCropList.push({id: 21, name: `Sorghum (109620 accessions)`, crop: "sorghum", placeholder: "Genesys"});
genesysCropList.push({id: 22, name: `Sunflower (10859 accessions)`, crop: "sunflower", placeholder: "Genesys"});
genesysCropList.push({id: 23, name: `Taro (1194 accessions)`, crop: "taro", placeholder: "Genesys"});
genesysCropList.push({id: 24, name: `Test (2181 accessions)`, crop: "test", placeholder: "Genesys"});
genesysCropList.push({id: 25, name: `Tomato (34971 accessions)`, crop: "tomato", placeholder: "Genesys"});
genesysCropList.push({id: 26, name: `Wheat (324098 accessions)`, crop: "wheat", placeholder: "Genesys"});
genesysCropList.push({id: 27, name: `Yam (6367 accessions)`, crop: "yam", placeholder: "Genesys"});


arabicaCoffeeList.push({
    id: 252,
    name: `Total Harvested Area (ha) `,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#19ffff",
    maxColor: "#067b75",
    minDatasetValue: "1",
    maxDatasetValue: "6179"
});
arabicaCoffeeList.push({
    id: 325,
    name: `Irrigated Harvested Area (ha) `,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#3e8cff",
    maxColor: "#0e216d",
    minDatasetValue: "1",
    maxDatasetValue: "4459"
});
arabicaCoffeeList.push({
    id: 406,
    name: `Rainfed Harvested Area (ha) `,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#69ffff",
    maxColor: "#194962",
    minDatasetValue: "1",
    maxDatasetValue: "6177"
});
arabicaCoffeeList.push({
    id: 504,
    name: `Total Production (mt)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#9dffff",
    maxColor: "#257956",
    minDatasetValue: "1",
    maxDatasetValue: "8485"
});
arabicaCoffeeList.push({
    id: 584,
    name: `Irrigated Production (mt)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#c591ff",
    maxColor: "#2e234c",
    minDatasetValue: "1",
    maxDatasetValue: "6604"
});
arabicaCoffeeList.push({
    id: 664,
    name: `Rainfed Production (mt)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#f0ffff",
    maxColor: "#394a42",
    minDatasetValue: "1",
    maxDatasetValue: "8485"
});
arabicaCoffeeList.push({
    id: 776,
    name: `Total Yield (kg/ha)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#ff0fdc",
    maxColor: "#470334",
    minDatasetValue: "5",
    maxDatasetValue: "4828"
});
arabicaCoffeeList.push({
    id: 857,
    name: `Irrigated Yield (kg/ha)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#ffb5b1",
    maxColor: "#512b2a",
    minDatasetValue: "29",
    maxDatasetValue: "7254"
});
arabicaCoffeeList.push({
    id: 936,
    name: `Rainfed Yield (kg/ha)`,
    crop: "arabica coffee",
    placeholder: "Arabica coffee",
    minColor: "#ffff87",
    maxColor: "#5b5120",
    minDatasetValue: "9",
    maxDatasetValue: "4000"
});
bananaList.push({
    id: 253,
    name: `Total Harvested Area (ha) `,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#19ffff",
    maxColor: "#067b75",
    minDatasetValue: "1",
    maxDatasetValue: "8170"
});
bananaList.push({
    id: 326,
    name: `Irrigated Harvested Area (ha) `,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#408eff",
    maxColor: "#0f226c",
    minDatasetValue: "1",
    maxDatasetValue: "4167"
});
bananaList.push({
    id: 407,
    name: `Rainfed Harvested Area (ha) `,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#69ffff",
    maxColor: "#194962",
    minDatasetValue: "1",
    maxDatasetValue: "8170"
});
bananaList.push({
    id: 505,
    name: `Total Production (mt)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#9dffff",
    maxColor: "#257956",
    minDatasetValue: "1",
    maxDatasetValue: "299639"
});
bananaList.push({
    id: 585,
    name: `Irrigated Production (mt)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#c894ff",
    maxColor: "#2f234c",
    minDatasetValue: "1",
    maxDatasetValue: "150361"
});
bananaList.push({
    id: 665,
    name: `Rainfed Production (mt)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#f0ffff",
    maxColor: "#394a42",
    minDatasetValue: "1",
    maxDatasetValue: "299639"
});
bananaList.push({
    id: 777,
    name: `Total Yield (kg/ha)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#ff11d9",
    maxColor: "#470433",
    minDatasetValue: "180",
    maxDatasetValue: "158986"
});
bananaList.push({
    id: 858,
    name: `Irrigated Yield (kg/ha)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#ffb6b1",
    maxColor: "#512b2a",
    minDatasetValue: "180",
    maxDatasetValue: "149883"
});
bananaList.push({
    id: 937,
    name: `Rainfed Yield (kg/ha)`,
    crop: "banana",
    placeholder: "Banana",
    minColor: "#ffff87",
    maxColor: "#5b5220",
    minDatasetValue: "250",
    maxDatasetValue: "159000"
});
barleyList.push({
    id: 1027,
    name: `Rainfed Yield (kg/ha)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#ff0558",
    maxColor: "#660115",
    minDatasetValue: "47",
    maxDatasetValue: "18631"
});
barleyList.push({
    id: 254,
    name: `Total Harvested Area (ha) `,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#19ffff",
    maxColor: "#067b75",
    minDatasetValue: "1",
    maxDatasetValue: "5573"
});
barleyList.push({
    id: 327,
    name: `Irrigated Harvested Area (ha) `,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#4090ff",
    maxColor: "#0f226c",
    minDatasetValue: "1",
    maxDatasetValue: "3653"
});
barleyList.push({
    id: 408,
    name: `Rainfed Harvested Area (ha) `,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#6bffff",
    maxColor: "#194a62",
    minDatasetValue: "1",
    maxDatasetValue: "5573"
});
barleyList.push({
    id: 506,
    name: `Total Production (mt)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#9effff",
    maxColor: "#257a56",
    minDatasetValue: "1",
    maxDatasetValue: "17528"
});
barleyList.push({
    id: 586,
    name: `Irrigated Production (mt)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#c896ff",
    maxColor: "#2f234c",
    minDatasetValue: "1",
    maxDatasetValue: "17528"
});
barleyList.push({
    id: 666,
    name: `Rainfed Production (mt)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#f0ffff",
    maxColor: "#394a42",
    minDatasetValue: "1",
    maxDatasetValue: "11716"
});
barleyList.push({
    id: 778,
    name: `Total Yield (kg/ha)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#ff14d9",
    maxColor: "#470433",
    minDatasetValue: "48",
    maxDatasetValue: "18667"
});
barleyList.push({
    id: 859,
    name: `Irrigated Yield (kg/ha)`,
    crop: "barley",
    placeholder: "Barley",
    minColor: "#ffb9ae",
    maxColor: "#512c2a",
    minDatasetValue: "48",
    maxDatasetValue: "15478"
});
beanList.push({
    id: 255,
    name: `Total Harvested Area (ha) `,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#1cffff",
    maxColor: "#067c75",
    minDatasetValue: "1",
    maxDatasetValue: "8225"
});
beanList.push({
    id: 328,
    name: `Irrigated Harvested Area (ha) `,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#4091ff",
    maxColor: "#0f236c",
    minDatasetValue: "1",
    maxDatasetValue: "3068"
});
beanList.push({
    id: 409,
    name: `Rainfed Harvested Area (ha) `,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#6bffff",
    maxColor: "#194a62",
    minDatasetValue: "1",
    maxDatasetValue: "8225"
});
beanList.push({
    id: 507,
    name: `Total Production (mt)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#9effff",
    maxColor: "#257a56",
    minDatasetValue: "1",
    maxDatasetValue: "7311"
});
beanList.push({
    id: 587,
    name: `Irrigated Production (mt)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#c898ff",
    maxColor: "#2f244c",
    minDatasetValue: "1",
    maxDatasetValue: "5942"
});
beanList.push({
    id: 667,
    name: `Rainfed Production (mt)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#f2ffff",
    maxColor: "#3a4b41",
    minDatasetValue: "1",
    maxDatasetValue: "7311"
});
beanList.push({
    id: 779,
    name: `Total Yield (kg/ha)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#ff15d9",
    maxColor: "#470433",
    minDatasetValue: "15",
    maxDatasetValue: "8845"
});
beanList.push({
    id: 860,
    name: `Irrigated Yield (kg/ha)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#ffbbae",
    maxColor: "#512c2a",
    minDatasetValue: "16",
    maxDatasetValue: "8881"
});
beanList.push({
    id: 938,
    name: `Rainfed Yield (kg/ha)`,
    crop: "bean",
    placeholder: "Bean",
    minColor: "#ffff86",
    maxColor: "#5b5220",
    minDatasetValue: "11",
    maxDatasetValue: "6500"
});
cassavaList.push({
    id: 1036,
    name: `Irrigated Harvested Area (ha) `,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#ff1852",
    maxColor: "#680513",
    minDatasetValue: "1",
    maxDatasetValue: "2935"
});
cassavaList.push({
    id: 256,
    name: `Total Harvested Area (ha) `,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#1c00ff",
    maxColor: "#060075",
    minDatasetValue: "1",
    maxDatasetValue: "12777"
});
cassavaList.push({
    id: 410,
    name: `Rainfed Harvested Area (ha) `,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#6bffff",
    maxColor: "#194a62",
    minDatasetValue: "1",
    maxDatasetValue: "12777"
});
cassavaList.push({
    id: 508,
    name: `Total Production (mt)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#9effff",
    maxColor: "#257b56",
    minDatasetValue: "1",
    maxDatasetValue: "173824"
});
cassavaList.push({
    id: 588,
    name: `Irrigated Production (mt)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#c89aff",
    maxColor: "#2f254c",
    minDatasetValue: "1",
    maxDatasetValue: "67891"
});
cassavaList.push({
    id: 668,
    name: `Rainfed Production (mt)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#f2ffff",
    maxColor: "#3a4c41",
    minDatasetValue: "1",
    maxDatasetValue: "173824"
});
cassavaList.push({
    id: 780,
    name: `Total Yield (kg/ha)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#ff18d9",
    maxColor: "#470533",
    minDatasetValue: "195",
    maxDatasetValue: "79294"
});
cassavaList.push({
    id: 861,
    name: `Irrigated Yield (kg/ha)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#ffbcae",
    maxColor: "#512d2a",
    minDatasetValue: "362",
    maxDatasetValue: "79294"
});
cassavaList.push({
    id: 939,
    name: `Rainfed Yield (kg/ha)`,
    crop: "cassava",
    placeholder: "Cassava",
    minColor: "#ffff86",
    maxColor: "#5b5320",
    minDatasetValue: "125",
    maxDatasetValue: "56000"
});
chickpeaList.push({
    id: 257,
    name: `Total Harvested Area (ha) `,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#1c05ff",
    maxColor: "#060075",
    minDatasetValue: "1",
    maxDatasetValue: "7555"
});
chickpeaList.push({
    id: 329,
    name: `Irrigated Harvested Area (ha) `,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#4094ff",
    maxColor: "#0f236c",
    minDatasetValue: "1",
    maxDatasetValue: "1673"
});
chickpeaList.push({
    id: 411,
    name: `Rainfed Harvested Area (ha) `,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#6bffff",
    maxColor: "#194b62",
    minDatasetValue: "1",
    maxDatasetValue: "7555"
});
chickpeaList.push({
    id: 509,
    name: `Total Production (mt)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#9effff",
    maxColor: "#257b56",
    minDatasetValue: "1",
    maxDatasetValue: "8198"
});
chickpeaList.push({
    id: 589,
    name: `Irrigated Production (mt)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#c99dff",
    maxColor: "#30254b",
    minDatasetValue: "1",
    maxDatasetValue: "2527"
});
chickpeaList.push({
    id: 669,
    name: `Rainfed Production (mt)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#f2ffff",
    maxColor: "#3a4c41",
    minDatasetValue: "1",
    maxDatasetValue: "8191"
});
chickpeaList.push({
    id: 781,
    name: `Total Yield (kg/ha)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#ff19d7",
    maxColor: "#480633",
    minDatasetValue: "26",
    maxDatasetValue: "17233"
});
chickpeaList.push({
    id: 862,
    name: `Irrigated Yield (kg/ha)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#ffbfae",
    maxColor: "#512d2a",
    minDatasetValue: "28",
    maxDatasetValue: "17233"
});
chickpeaList.push({
    id: 940,
    name: `Rainfed Yield (kg/ha)`,
    crop: "chickpea",
    placeholder: "Chickpea",
    minColor: "#ffff86",
    maxColor: "#5b5420",
    minDatasetValue: "25",
    maxDatasetValue: "13000"
});
cocoaList.push({
    id: 1078,
    name: `Total Harvested Area (ha) `,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#ff6e3e",
    maxColor: "#6d190e",
    minDatasetValue: "1",
    maxDatasetValue: "8548"
});
cocoaList.push({
    id: 331,
    name: `Irrigated Harvested Area (ha) `,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#4398ff",
    maxColor: "#10246b",
    minDatasetValue: "1",
    maxDatasetValue: "2667"
});
cocoaList.push({
    id: 413,
    name: `Rainfed Harvested Area (ha) `,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#6effff",
    maxColor: "#194c62",
    minDatasetValue: "1",
    maxDatasetValue: "8548"
});
cocoaList.push({
    id: 511,
    name: `Total Production (mt)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#a0ffff",
    maxColor: "#267c55",
    minDatasetValue: "1",
    maxDatasetValue: "4217"
});
cocoaList.push({
    id: 591,
    name: `Irrigated Production (mt)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#c9a0ff",
    maxColor: "#30264b",
    minDatasetValue: "1",
    maxDatasetValue: "2062"
});
cocoaList.push({
    id: 671,
    name: `Rainfed Production (mt)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#f4ffff",
    maxColor: "#3a4d41",
    minDatasetValue: "1",
    maxDatasetValue: "4217"
});
cocoaList.push({
    id: 783,
    name: `Total Yield (kg/ha)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#ff1ed7",
    maxColor: "#480733",
    minDatasetValue: "12",
    maxDatasetValue: "5228"
});
cocoaList.push({
    id: 864,
    name: `Irrigated Yield (kg/ha)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#ffc3ac",
    maxColor: "#522e29",
    minDatasetValue: "36",
    maxDatasetValue: "2421"
});
cocoaList.push({
    id: 942,
    name: `Rainfed Yield (kg/ha)`,
    crop: "cocoa",
    placeholder: "Cocoa",
    minColor: "#ffff83",
    maxColor: "#5c541f",
    minDatasetValue: "10",
    maxDatasetValue: "5000"
});
cowpeaList.push({
    id: 1015,
    name: `Total Production (mt)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#ffff5f",
    maxColor: "#647816",
    minDatasetValue: "1",
    maxDatasetValue: "1929"
});
cowpeaList.push({
    id: 260,
    name: `Total Harvested Area (ha) `,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#1e07ff",
    maxColor: "#070174",
    minDatasetValue: "1",
    maxDatasetValue: "3504"
});
cowpeaList.push({
    id: 333,
    name: `Irrigated Harvested Area (ha) `,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#439dff",
    maxColor: "#10256b",
    minDatasetValue: "1",
    maxDatasetValue: "1258"
});
cowpeaList.push({
    id: 415,
    name: `Rainfed Harvested Area (ha) `,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#6effff",
    maxColor: "#194d62",
    minDatasetValue: "1",
    maxDatasetValue: "3504"
});
cowpeaList.push({
    id: 593,
    name: `Irrigated Production (mt)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#caa4ff",
    maxColor: "#31274a",
    minDatasetValue: "1",
    maxDatasetValue: "1676"
});
cowpeaList.push({
    id: 673,
    name: `Rainfed Production (mt)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#f4ffff",
    maxColor: "#3a4e41",
    minDatasetValue: "1",
    maxDatasetValue: "1929"
});
cowpeaList.push({
    id: 785,
    name: `Total Yield (kg/ha)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#ff22d6",
    maxColor: "#480733",
    minDatasetValue: "16",
    maxDatasetValue: "8743"
});
cowpeaList.push({
    id: 866,
    name: `Irrigated Yield (kg/ha)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#ffc8ac",
    maxColor: "#522f29",
    minDatasetValue: "98",
    maxDatasetValue: "5012"
});
cowpeaList.push({
    id: 944,
    name: `Rainfed Yield (kg/ha)`,
    crop: "cowpea",
    placeholder: "Cowpea",
    minColor: "#ffff83",
    maxColor: "#5c561f",
    minDatasetValue: "13",
    maxDatasetValue: "9000"
});
groundnutList.push({
    id: 261,
    name: `Total Harvested Area (ha) `,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#1e0aff",
    maxColor: "#070274",
    minDatasetValue: "1",
    maxDatasetValue: "8438"
});
groundnutList.push({
    id: 334,
    name: `Irrigated Harvested Area (ha) `,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#449eff",
    maxColor: "#10256b",
    minDatasetValue: "1",
    maxDatasetValue: "6239"
});
groundnutList.push({
    id: 416,
    name: `Rainfed Harvested Area (ha) `,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#6fffff",
    maxColor: "#1a4e61",
    minDatasetValue: "1",
    maxDatasetValue: "8438"
});
groundnutList.push({
    id: 513,
    name: `Total Production (mt)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#a005ff",
    maxColor: "#260055",
    minDatasetValue: "1",
    maxDatasetValue: "33792"
});
groundnutList.push({
    id: 594,
    name: `Irrigated Production (mt)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#caa7ff",
    maxColor: "#31274a",
    minDatasetValue: "1",
    maxDatasetValue: "33792"
});
groundnutList.push({
    id: 674,
    name: `Rainfed Production (mt)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#f4ffff",
    maxColor: "#3a4f41",
    minDatasetValue: "1",
    maxDatasetValue: "17502"
});
groundnutList.push({
    id: 786,
    name: `Total Yield (kg/ha)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#ff23d6",
    maxColor: "#480833",
    minDatasetValue: "18",
    maxDatasetValue: "18943"
});
groundnutList.push({
    id: 867,
    name: `Irrigated Yield (kg/ha)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#ffc9ab",
    maxColor: "#523028",
    minDatasetValue: "34",
    maxDatasetValue: "18943"
});
groundnutList.push({
    id: 945,
    name: `Rainfed Yield (kg/ha)`,
    crop: "groundnut",
    placeholder: "Groundnut",
    minColor: "#ffff83",
    maxColor: "#5c561f",
    minDatasetValue: "18",
    maxDatasetValue: "12000"
});
lentilList.push({
    id: 262,
    name: `Total Harvested Area (ha) `,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#1e0bff",
    maxColor: "#070274",
    minDatasetValue: "1",
    maxDatasetValue: "3310"
});
lentilList.push({
    id: 335,
    name: `Irrigated Harvested Area (ha) `,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#44a0ff",
    maxColor: "#10266b",
    minDatasetValue: "1",
    maxDatasetValue: "616"
});
lentilList.push({
    id: 417,
    name: `Rainfed Harvested Area (ha) `,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#6fffff",
    maxColor: "#1a4e61",
    minDatasetValue: "1",
    maxDatasetValue: "3310"
});
lentilList.push({
    id: 514,
    name: `Total Production (mt)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#a205ff",
    maxColor: "#270054",
    minDatasetValue: "1",
    maxDatasetValue: "2989"
});
lentilList.push({
    id: 595,
    name: `Irrigated Production (mt)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#caa8ff",
    maxColor: "#31284a",
    minDatasetValue: "1",
    maxDatasetValue: "924"
});
lentilList.push({
    id: 675,
    name: `Rainfed Production (mt)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#f5ffff",
    maxColor: "#3a4f41",
    minDatasetValue: "1",
    maxDatasetValue: "2988"
});
lentilList.push({
    id: 787,
    name: `Total Yield (kg/ha)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#ff26d6",
    maxColor: "#480933",
    minDatasetValue: "25",
    maxDatasetValue: "9374"
});
lentilList.push({
    id: 868,
    name: `Irrigated Yield (kg/ha)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#ffcaab",
    maxColor: "#523128",
    minDatasetValue: "9",
    maxDatasetValue: "9374"
});
lentilList.push({
    id: 946,
    name: `Rainfed Yield (kg/ha)`,
    crop: "lentil",
    placeholder: "Lentil",
    minColor: "#ffff82",
    maxColor: "#5d561e",
    minDatasetValue: "27",
    maxDatasetValue: "7000"
});
maizeList.push({
    id: 263,
    name: `Total Harvested Area (ha) `,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#1f0eff",
    maxColor: "#070274",
    minDatasetValue: "1",
    maxDatasetValue: "11389"
});
maizeList.push({
    id: 336,
    name: `Irrigated Harvested Area (ha) `,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#44a2ff",
    maxColor: "#10276b",
    minDatasetValue: "1",
    maxDatasetValue: "7567"
});
maizeList.push({
    id: 418,
    name: `Rainfed Harvested Area (ha) `,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#6fffff",
    maxColor: "#1a4f61",
    minDatasetValue: "1",
    maxDatasetValue: "11389"
});
maizeList.push({
    id: 515,
    name: `Total Production (mt)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#a205ff",
    maxColor: "#270154",
    minDatasetValue: "1",
    maxDatasetValue: "91304"
});
maizeList.push({
    id: 596,
    name: `Irrigated Production (mt)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#caabff",
    maxColor: "#31284a",
    minDatasetValue: "1",
    maxDatasetValue: "67877"
});
maizeList.push({
    id: 676,
    name: `Rainfed Production (mt)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#f5ffff",
    maxColor: "#3a4f41",
    minDatasetValue: "1",
    maxDatasetValue: "66097"
});
maizeList.push({
    id: 788,
    name: `Total Yield (kg/ha)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#ff28d6",
    maxColor: "#480933",
    minDatasetValue: "17",
    maxDatasetValue: "40239"
});
maizeList.push({
    id: 869,
    name: `Irrigated Yield (kg/ha)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#ffcdab",
    maxColor: "#523128",
    minDatasetValue: "56",
    maxDatasetValue: "40239"
});
maizeList.push({
    id: 947,
    name: `Rainfed Yield (kg/ha)`,
    crop: "maize",
    placeholder: "Maize",
    minColor: "#ffff82",
    maxColor: "#5d571e",
    minDatasetValue: "15",
    maxDatasetValue: "22000"
});
pearlMilletList.push({
    id: 272,
    name: `Total Harvested Area (ha) `,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#231fff",
    maxColor: "#080773",
    minDatasetValue: "1",
    maxDatasetValue: "8323"
});
pearlMilletList.push({
    id: 345,
    name: `Irrigated Harvested Area (ha) `,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#48b5ff",
    maxColor: "#112b6a",
    minDatasetValue: "1",
    maxDatasetValue: "2696"
});
pearlMilletList.push({
    id: 427,
    name: `Rainfed Harvested Area (ha) `,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#73ffff",
    maxColor: "#1b535f",
    minDatasetValue: "1",
    maxDatasetValue: "8323"
});
pearlMilletList.push({
    id: 524,
    name: `Total Production (mt)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#a718ff",
    maxColor: "#270554",
    minDatasetValue: "1",
    maxDatasetValue: "7258"
});
pearlMilletList.push({
    id: 604,
    name: `Irrigated Production (mt)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#d2bbff",
    maxColor: "#322c49",
    minDatasetValue: "1",
    maxDatasetValue: "6986"
});
pearlMilletList.push({
    id: 684,
    name: `Rainfed Production (mt)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#faffff",
    maxColor: "#3c543f",
    minDatasetValue: "1",
    maxDatasetValue: "6861"
});
pearlMilletList.push({
    id: 797,
    name: `Total Yield (kg/ha)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#ff3acf",
    maxColor: "#4a0e31",
    minDatasetValue: "20",
    maxDatasetValue: "8523"
});
pearlMilletList.push({
    id: 878,
    name: `Irrigated Yield (kg/ha)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#ffe0a7",
    maxColor: "#543527",
    minDatasetValue: "160",
    maxDatasetValue: "4945"
});
pearlMilletList.push({
    id: 956,
    name: `Rainfed Yield (kg/ha)`,
    crop: "pearl millet",
    placeholder: "Pearl millet",
    minColor: "#ffff7d",
    maxColor: "#5d5b1e",
    minDatasetValue: "20",
    maxDatasetValue: "8000"
});
pigeonpeaList.push({
    id: 270,
    name: `Total Harvested Area (ha) `,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#221cff",
    maxColor: "#070673",
    minDatasetValue: "1",
    maxDatasetValue: "3562"
});
pigeonpeaList.push({
    id: 343,
    name: `Irrigated Harvested Area (ha) `,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#48b1ff",
    maxColor: "#112a6a",
    minDatasetValue: "1",
    maxDatasetValue: "486"
});
pigeonpeaList.push({
    id: 425,
    name: `Rainfed Harvested Area (ha) `,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#73ffff",
    maxColor: "#1b525f",
    minDatasetValue: "1",
    maxDatasetValue: "3562"
});
pigeonpeaList.push({
    id: 522,
    name: `Total Production (mt)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#a714ff",
    maxColor: "#270454",
    minDatasetValue: "1",
    maxDatasetValue: "6107"
});
pigeonpeaList.push({
    id: 602,
    name: `Irrigated Production (mt)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#cfb6ff",
    maxColor: "#312b4a",
    minDatasetValue: "1",
    maxDatasetValue: "754"
});
pigeonpeaList.push({
    id: 682,
    name: `Rainfed Production (mt)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#f8ffff",
    maxColor: "#3b5240",
    minDatasetValue: "1",
    maxDatasetValue: "6107"
});
pigeonpeaList.push({
    id: 795,
    name: `Total Yield (kg/ha)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#ff36d2",
    maxColor: "#490c32",
    minDatasetValue: "41",
    maxDatasetValue: "3170"
});
pigeonpeaList.push({
    id: 876,
    name: `Irrigated Yield (kg/ha)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#ffdca7",
    maxColor: "#543427",
    minDatasetValue: "31",
    maxDatasetValue: "3472"
});
pigeonpeaList.push({
    id: 954,
    name: `Rainfed Yield (kg/ha)`,
    crop: "pigeonpea",
    placeholder: "Pigeonpea",
    minColor: "#ffff7d",
    maxColor: "#5d5b1e",
    minDatasetValue: "33",
    maxDatasetValue: "3333"
});
plantainList.push({
    id: 271,
    name: `Total Harvested Area (ha) `,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#231eff",
    maxColor: "#080773",
    minDatasetValue: "1",
    maxDatasetValue: "13642"
});
plantainList.push({
    id: 344,
    name: `Irrigated Harvested Area (ha) `,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#48b2ff",
    maxColor: "#112a6a",
    minDatasetValue: "1",
    maxDatasetValue: "853"
});
plantainList.push({
    id: 426,
    name: `Rainfed Harvested Area (ha) `,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#73ffff",
    maxColor: "#1b525f",
    minDatasetValue: "1",
    maxDatasetValue: "13642"
});
plantainList.push({
    id: 523,
    name: `Total Production (mt)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#a715ff",
    maxColor: "#270454",
    minDatasetValue: "1",
    maxDatasetValue: "86445"
});
plantainList.push({
    id: 603,
    name: `Irrigated Production (mt)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#cfb9ff",
    maxColor: "#312c4a",
    minDatasetValue: "1",
    maxDatasetValue: "9374"
});
plantainList.push({
    id: 683,
    name: `Rainfed Production (mt)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#faffff",
    maxColor: "#3c533f",
    minDatasetValue: "1",
    maxDatasetValue: "86445"
});
plantainList.push({
    id: 796,
    name: `Total Yield (kg/ha)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#ff39d2",
    maxColor: "#490d32",
    minDatasetValue: "312",
    maxDatasetValue: "54891"
});
plantainList.push({
    id: 877,
    name: `Irrigated Yield (kg/ha)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#ffdda7",
    maxColor: "#543527",
    minDatasetValue: "708",
    maxDatasetValue: "62990"
});
plantainList.push({
    id: 955,
    name: `Rainfed Yield (kg/ha)`,
    crop: "plantain",
    placeholder: "Plantain",
    minColor: "#ffff7d",
    maxColor: "#5d5b1e",
    minDatasetValue: "250",
    maxDatasetValue: "52744"
});
potatoList.push({
    id: 1059,
    name: `Total Yield (kg/ha)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#ff4747",
    maxColor: "#6b1010",
    minDatasetValue: "214",
    maxDatasetValue: "207012"
});
potatoList.push({
    id: 273,
    name: `Total Harvested Area (ha) `,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#2322ff",
    maxColor: "#080773",
    minDatasetValue: "1",
    maxDatasetValue: "7250"
});
potatoList.push({
    id: 346,
    name: `Irrigated Harvested Area (ha) `,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#4ab6ff",
    maxColor: "#112b69",
    minDatasetValue: "1",
    maxDatasetValue: "4284"
});
potatoList.push({
    id: 428,
    name: `Rainfed Harvested Area (ha) `,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#75ffff",
    maxColor: "#1c545f",
    minDatasetValue: "1",
    maxDatasetValue: "7250"
});
potatoList.push({
    id: 525,
    name: `Total Production (mt)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#a719ff",
    maxColor: "#270654",
    minDatasetValue: "1",
    maxDatasetValue: "214555"
});
potatoList.push({
    id: 605,
    name: `Irrigated Production (mt)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#d2bcff",
    maxColor: "#322d49",
    minDatasetValue: "1",
    maxDatasetValue: "111903"
});
potatoList.push({
    id: 685,
    name: `Rainfed Production (mt)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#faffff",
    maxColor: "#3c543f",
    minDatasetValue: "1",
    maxDatasetValue: "214555"
});
potatoList.push({
    id: 879,
    name: `Irrigated Yield (kg/ha)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#ffe1a4",
    maxColor: "#543527",
    minDatasetValue: "184",
    maxDatasetValue: "207012"
});
potatoList.push({
    id: 957,
    name: `Rainfed Yield (kg/ha)`,
    crop: "potato",
    placeholder: "Potato",
    minColor: "#ffff7c",
    maxColor: "#5e5c1d",
    minDatasetValue: "166",
    maxDatasetValue: "138103"
});
riceList.push({
    id: 277,
    name: `Total Harvested Area (ha) `,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#262aff",
    maxColor: "#090972",
    minDatasetValue: "1",
    maxDatasetValue: "15456"
});
riceList.push({
    id: 350,
    name: `Irrigated Harvested Area (ha) `,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#4dbfff",
    maxColor: "#122d69",
    minDatasetValue: "1",
    maxDatasetValue: "14885"
});
riceList.push({
    id: 432,
    name: `Rainfed Harvested Area (ha) `,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#78ffff",
    maxColor: "#1c565f",
    minDatasetValue: "1",
    maxDatasetValue: "14924"
});
riceList.push({
    id: 529,
    name: `Total Production (mt)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#a822ff",
    maxColor: "#280753",
    minDatasetValue: "1",
    maxDatasetValue: "110439"
});
riceList.push({
    id: 608,
    name: `Irrigated Production (mt)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#d3c3ff",
    maxColor: "#322e49",
    minDatasetValue: "1",
    maxDatasetValue: "110350"
});
riceList.push({
    id: 689,
    name: `Rainfed Production (mt)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#fcffff",
    maxColor: "#3c563f",
    minDatasetValue: "1",
    maxDatasetValue: "52637"
});
riceList.push({
    id: 801,
    name: `Total Yield (kg/ha)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#ff43cd",
    maxColor: "#4a1031",
    minDatasetValue: "43",
    maxDatasetValue: "26284"
});
riceList.push({
    id: 883,
    name: `Irrigated Yield (kg/ha)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#ffeaa2",
    maxColor: "#543827",
    minDatasetValue: "99",
    maxDatasetValue: "26284"
});
riceList.push({
    id: 961,
    name: `Rainfed Yield (kg/ha)`,
    crop: "rice",
    placeholder: "Rice",
    minColor: "#ffff79",
    maxColor: "#5e5e1d",
    minDatasetValue: "42",
    maxDatasetValue: "12766"
});
robustaCoffeeList.push({
    id: 1062,
    name: `Irrigated Production (mt)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#ff4d47",
    maxColor: "#6b1210",
    minDatasetValue: "1",
    maxDatasetValue: "3347"
});
robustaCoffeeList.push({
    id: 275,
    name: `Total Harvested Area (ha) `,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#2626ff",
    maxColor: "#090972",
    minDatasetValue: "1",
    maxDatasetValue: "8563"
});
robustaCoffeeList.push({
    id: 348,
    name: `Irrigated Harvested Area (ha) `,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#4abbff",
    maxColor: "#112c69",
    minDatasetValue: "1",
    maxDatasetValue: "2739"
});
robustaCoffeeList.push({
    id: 430,
    name: `Rainfed Harvested Area (ha) `,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#75ffff",
    maxColor: "#1c545f",
    minDatasetValue: "1",
    maxDatasetValue: "8563"
});
robustaCoffeeList.push({
    id: 527,
    name: `Total Production (mt)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#a81eff",
    maxColor: "#280753",
    minDatasetValue: "1",
    maxDatasetValue: "8781"
});
robustaCoffeeList.push({
    id: 687,
    name: `Rainfed Production (mt)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#fcffff",
    maxColor: "#3c553f",
    minDatasetValue: "1",
    maxDatasetValue: "8781"
});
robustaCoffeeList.push({
    id: 799,
    name: `Total Yield (kg/ha)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#ff3ecf",
    maxColor: "#4a0e31",
    minDatasetValue: "17",
    maxDatasetValue: "6969"
});
robustaCoffeeList.push({
    id: 881,
    name: `Irrigated Yield (kg/ha)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#ffe6a4",
    maxColor: "#543727",
    minDatasetValue: "145",
    maxDatasetValue: "10174"
});
robustaCoffeeList.push({
    id: 959,
    name: `Rainfed Yield (kg/ha)`,
    crop: "robusta coffee",
    placeholder: "Robusta coffee",
    minColor: "#ffff7c",
    maxColor: "#5e5d1d",
    minDatasetValue: "17",
    maxDatasetValue: "3789"
});
smallMilletList.push({
    id: 279,
    name: `Total Harvested Area (ha) `,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#282dff",
    maxColor: "#090b72",
    minDatasetValue: "1",
    maxDatasetValue: "9642"
});
smallMilletList.push({
    id: 352,
    name: `Irrigated Harvested Area (ha) `,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#4dc3ff",
    maxColor: "#122e69",
    minDatasetValue: "1",
    maxDatasetValue: "9642"
});
smallMilletList.push({
    id: 434,
    name: `Rainfed Harvested Area (ha) `,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#78ffff",
    maxColor: "#1c565f",
    minDatasetValue: "1",
    maxDatasetValue: "8375"
});
smallMilletList.push({
    id: 531,
    name: `Total Production (mt)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#ab26ff",
    maxColor: "#280952",
    minDatasetValue: "1",
    maxDatasetValue: "14212"
});
smallMilletList.push({
    id: 610,
    name: `Irrigated Production (mt)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#d3c8ff",
    maxColor: "#322f49",
    minDatasetValue: "1",
    maxDatasetValue: "13997"
});
smallMilletList.push({
    id: 691,
    name: `Rainfed Production (mt)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#feffff",
    maxColor: "#3c573e",
    minDatasetValue: "1",
    maxDatasetValue: "14212"
});
smallMilletList.push({
    id: 803,
    name: `Total Yield (kg/ha)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#ff47cd",
    maxColor: "#4a1031",
    minDatasetValue: "41",
    maxDatasetValue: "4436"
});
smallMilletList.push({
    id: 885,
    name: `Irrigated Yield (kg/ha)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#ffeea2",
    maxColor: "#543827",
    minDatasetValue: "88",
    maxDatasetValue: "4436"
});
smallMilletList.push({
    id: 963,
    name: `Rainfed Yield (kg/ha)`,
    crop: "small millet",
    placeholder: "Small millet",
    minColor: "#ffff79",
    maxColor: "#5e5f1d",
    minDatasetValue: "38",
    maxDatasetValue: "4285"
});
sorghumList.push({
    id: 280,
    name: `Total Harvested Area (ha) `,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#2830ff",
    maxColor: "#090b72",
    minDatasetValue: "1",
    maxDatasetValue: "7278"
});
sorghumList.push({
    id: 353,
    name: `Irrigated Harvested Area (ha) `,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#4ec5ff",
    maxColor: "#122e69",
    minDatasetValue: "1",
    maxDatasetValue: "4533"
});
sorghumList.push({
    id: 435,
    name: `Rainfed Harvested Area (ha) `,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#78ffff",
    maxColor: "#1c575f",
    minDatasetValue: "1",
    maxDatasetValue: "7278"
});
sorghumList.push({
    id: 532,
    name: `Total Production (mt)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#ab28ff",
    maxColor: "#280952",
    minDatasetValue: "1",
    maxDatasetValue: "35128"
});
sorghumList.push({
    id: 611,
    name: `Irrigated Production (mt)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#d3c9ff",
    maxColor: "#323049",
    minDatasetValue: "1",
    maxDatasetValue: "24663"
});
sorghumList.push({
    id: 692,
    name: `Rainfed Production (mt)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#feffff",
    maxColor: "#3c573e",
    minDatasetValue: "1",
    maxDatasetValue: "30490"
});
sorghumList.push({
    id: 804,
    name: `Total Yield (kg/ha)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#ff48ca",
    maxColor: "#4a1131",
    minDatasetValue: "14",
    maxDatasetValue: "22544"
});
sorghumList.push({
    id: 886,
    name: `Irrigated Yield (kg/ha)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#fff0a2",
    maxColor: "#543927",
    minDatasetValue: "56",
    maxDatasetValue: "16739"
});
sorghumList.push({
    id: 964,
    name: `Rainfed Yield (kg/ha)`,
    crop: "sorghum",
    placeholder: "Sorghum",
    minColor: "#ffff79",
    maxColor: "#5e5f1d",
    minDatasetValue: "13",
    maxDatasetValue: "23000"
});
soybeanList.push({
    id: 281,
    name: `Total Harvested Area (ha) `,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#2832ff",
    maxColor: "#090b72",
    minDatasetValue: "1",
    maxDatasetValue: "8210"
});
soybeanList.push({
    id: 354,
    name: `Irrigated Harvested Area (ha) `,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#4ec8ff",
    maxColor: "#122f69",
    minDatasetValue: "1",
    maxDatasetValue: "5832"
});
soybeanList.push({
    id: 436,
    name: `Rainfed Harvested Area (ha) `,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#79ffff",
    maxColor: "#1d575e",
    minDatasetValue: "1",
    maxDatasetValue: "8210"
});
soybeanList.push({
    id: 533,
    name: `Total Production (mt)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#ab2aff",
    maxColor: "#280952",
    minDatasetValue: "1",
    maxDatasetValue: "25850"
});
soybeanList.push({
    id: 612,
    name: `Irrigated Production (mt)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#d6caff",
    maxColor: "#333148",
    minDatasetValue: "1",
    maxDatasetValue: "13306"
});
soybeanList.push({
    id: 693,
    name: `Rainfed Production (mt)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#feffff",
    maxColor: "#3c583e",
    minDatasetValue: "1",
    maxDatasetValue: "25850"
});
soybeanList.push({
    id: 805,
    name: `Total Yield (kg/ha)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#ff4aca",
    maxColor: "#4a1131",
    minDatasetValue: "6",
    maxDatasetValue: "7470"
});
soybeanList.push({
    id: 887,
    name: `Irrigated Yield (kg/ha)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#fff2a0",
    maxColor: "#553a26",
    minDatasetValue: "1",
    maxDatasetValue: "8525"
});
soybeanList.push({
    id: 965,
    name: `Rainfed Yield (kg/ha)`,
    crop: "soybean",
    placeholder: "Soybean",
    minColor: "#ffff78",
    maxColor: "#5f5f1c",
    minDatasetValue: "20",
    maxDatasetValue: "7416"
});
sweetPotatoList.push({
    id: 284,
    name: `Total Harvested Area (ha) `,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#2a39ff",
    maxColor: "#090d72",
    minDatasetValue: "1",
    maxDatasetValue: "7814"
});
sweetPotatoList.push({
    id: 358,
    name: `Irrigated Harvested Area (ha) `,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#51cfff",
    maxColor: "#133168",
    minDatasetValue: "1",
    maxDatasetValue: "600"
});
sweetPotatoList.push({
    id: 440,
    name: `Rainfed Harvested Area (ha) `,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#7cffff",
    maxColor: "#1d595e",
    minDatasetValue: "1",
    maxDatasetValue: "7814"
});
sweetPotatoList.push({
    id: 537,
    name: `Total Production (mt)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#ac32ff",
    maxColor: "#290b52",
    minDatasetValue: "1",
    maxDatasetValue: "237797"
});
sweetPotatoList.push({
    id: 616,
    name: `Irrigated Production (mt)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#d7d3ff",
    maxColor: "#333248",
    minDatasetValue: "1",
    maxDatasetValue: "5877"
});
sweetPotatoList.push({
    id: 697,
    name: `Rainfed Production (mt)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#ffffff",
    maxColor: "#3d5a3e",
    minDatasetValue: "1",
    maxDatasetValue: "237797"
});
sweetPotatoList.push({
    id: 809,
    name: `Total Yield (kg/ha)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#ff52c9",
    maxColor: "#4b1330",
    minDatasetValue: "144",
    maxDatasetValue: "136235"
});
sweetPotatoList.push({
    id: 891,
    name: `Irrigated Yield (kg/ha)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#fffa9e",
    maxColor: "#563c25",
    minDatasetValue: "322",
    maxDatasetValue: "91782"
});
sweetPotatoList.push({
    id: 968,
    name: `Rainfed Yield (kg/ha)`,
    crop: "sweet potato",
    placeholder: "Sweet potato",
    minColor: "#ffff78",
    maxColor: "#5f621c",
    minDatasetValue: "111",
    maxDatasetValue: "136234"
});
wheatList.push({
    id: 1018,
    name: `Total Harvested Area (ha) `,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ffff5c",
    maxColor: "#657a16",
    minDatasetValue: "1",
    maxDatasetValue: "11752"
});
wheatList.push({
    id: 364,
    name: `Irrigated Harvested Area (ha) `,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#52dcff",
    maxColor: "#133468",
    minDatasetValue: "1",
    maxDatasetValue: "8144"
});
wheatList.push({
    id: 446,
    name: `Rainfed Harvested Area (ha) `,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#7dffff",
    maxColor: "#1e5d5d",
    minDatasetValue: "1",
    maxDatasetValue: "11550"
});
wheatList.push({
    id: 541,
    name: `Total Production (mt)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ae3aff",
    maxColor: "#2a0e51",
    minDatasetValue: "1",
    maxDatasetValue: "61505"
});
wheatList.push({
    id: 622,
    name: `Irrigated Production (mt)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#d9e0ff",
    maxColor: "#333547",
    minDatasetValue: "1",
    maxDatasetValue: "53054"
});
wheatList.push({
    id: 703,
    name: `Rainfed Production (mt)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ffffff",
    maxColor: "#3e5d3d",
    minDatasetValue: "1",
    maxDatasetValue: "49185"
});
wheatList.push({
    id: 814,
    name: `Total Yield (kg/ha)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ff5cc8",
    maxColor: "#4c162f",
    minDatasetValue: "38",
    maxDatasetValue: "21007"
});
wheatList.push({
    id: 897,
    name: `Irrigated Yield (kg/ha)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ffff9d",
    maxColor: "#563e25",
    minDatasetValue: "69",
    maxDatasetValue: "21007"
});
wheatList.push({
    id: 974,
    name: `Rainfed Yield (kg/ha)`,
    crop: "wheat",
    placeholder: "Wheat",
    minColor: "#ffff73",
    maxColor: "#5f641b",
    minDatasetValue: "37",
    maxDatasetValue: "15531"
});
yamsList.push({
    id: 1037,
    name: `Total Harvested Area (ha) `,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ff1952",
    maxColor: "#680613",
    minDatasetValue: "1",
    maxDatasetValue: "3846"
});
yamsList.push({
    id: 1060,
    name: `Irrigated Harvested Area (ha) `,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ff4847",
    maxColor: "#6b1110",
    minDatasetValue: "1",
    maxDatasetValue: "1"
});
yamsList.push({
    id: 447,
    name: `Rainfed Harvested Area (ha) `,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#7dffff",
    maxColor: "#1e5d5d",
    minDatasetValue: "1",
    maxDatasetValue: "3846"
});
yamsList.push({
    id: 542,
    name: `Total Production (mt)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#b13cff",
    maxColor: "#2a0e51",
    minDatasetValue: "1",
    maxDatasetValue: "47658"
});
yamsList.push({
    id: 623,
    name: `Irrigated Production (mt)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#d9e1ff",
    maxColor: "#333547",
    minDatasetValue: "1",
    maxDatasetValue: "24"
});
yamsList.push({
    id: 704,
    name: `Rainfed Production (mt)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ffffff",
    maxColor: "#3e5d3d",
    minDatasetValue: "1",
    maxDatasetValue: "47658"
});
yamsList.push({
    id: 815,
    name: `Total Yield (kg/ha)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ff5fc8",
    maxColor: "#4c162f",
    minDatasetValue: "205",
    maxDatasetValue: "30221"
});
yamsList.push({
    id: 898,
    name: `Irrigated Yield (kg/ha)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ffff9d",
    maxColor: "#563f25",
    minDatasetValue: "1216",
    maxDatasetValue: "31216"
});
yamsList.push({
    id: 975,
    name: `Rainfed Yield (kg/ha)`,
    crop: "yams",
    placeholder: "Yams",
    minColor: "#ffff73",
    maxColor: "#5f641b",
    minDatasetValue: "166",
    maxDatasetValue: "30241"
});



cropNameList.push("Arabica coffee");
cropNameList.push("Banana");
cropNameList.push("Barley");
cropNameList.push("Bean");
cropNameList.push("Cassava");
cropNameList.push("Chickpea");
cropNameList.push("Cocoa");
cropNameList.push("Groundnut");
cropNameList.push("Lentil");
cropNameList.push("Maize");
cropNameList.push("Pearl millet");
cropNameList.push("Pigeonpea");
cropNameList.push("Plantain");
cropNameList.push("Potato");
cropNameList.push("Rice");
cropNameList.push("Robusta coffe");
cropNameList.push("Small millet");
cropNameList.push("Sorghum");
cropNameList.push("Soybean");
cropNameList.push("Sweet potato");
cropNameList.push("Wheat");
cropNameList.push("Yams");






const ifpriCropList = [];


ifpriCropList.push(arabicaCoffeeList);
ifpriCropList.push(bananaList);
ifpriCropList.push(barleyList);
ifpriCropList.push(beanList);
ifpriCropList.push(cassavaList);
ifpriCropList.push(chickpeaList);
ifpriCropList.push(cocoaList);
ifpriCropList.push(groundnutList);
ifpriCropList.push(lentilList);
ifpriCropList.push(maizeList);
ifpriCropList.push(pearlMilletList);
ifpriCropList.push(pigeonpeaList);
ifpriCropList.push(plantainList);
ifpriCropList.push(potatoList);
ifpriCropList.push(riceList);
ifpriCropList.push(robustaCoffeeList);
ifpriCropList.push(smallMilletList);
ifpriCropList.push(sorghumList);
ifpriCropList.push(soybeanList);
ifpriCropList.push(sweetPotatoList);
ifpriCropList.push(wheatList);
ifpriCropList.push(yamsList);


class DatasetsListCore extends React.Component {


    static ifpriCropNameList() {


        return cropNameList;


    }


    static ifpriCropArray() {


        return ifpriCropList;


    }

    static genesysCropArray() {


        return genesysCropList;


    }


}


export default DatasetsListCore;
