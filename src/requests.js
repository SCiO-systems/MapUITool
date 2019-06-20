import React from "react";
const gardianIpOrDomain = "http://52.15.188.4";
// const gardianIpOrDomain = "http://localhost";

const pathOfGeoJsons ="/countries/";

class Requests extends React.Component {


    static async getCountryCode(lat, lng) {

        const json = await fetch(gardianIpOrDomain+'/proxyGeoInfo.php/countryCodeJSON?lat=' + lat + '&lng=' + lng + '&username=gardian', {
        // const json = await fetch('http://api.geonames.org/countryCodeJSON?lat=' + lat + '&lng=' + lng + '&username=gardian', {
            crossDomain: true

        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let country = myJson.countryCode;
                return country.trim();

            }).catch(function (exception) {
                console.log(exception);
                return "null";
            });


        return json;

    }

    static async getCountryIsoAlpha3(countryCode) {

        //const json = await fetch('http://api.geonames.org/countryInfoJSON?&country=' + countryCode + '&username=gardian', {

        const json = await fetch(gardianIpOrDomain+'/proxyGeoInfo.php/countryInfoJSON?&country=' + countryCode + '&username=gardian', {

            crossDomain: true

        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {

                try {
                    let countryIsoAlpha3 = myJson.geonames[0].isoAlpha3;

                    return countryIsoAlpha3.trim();
                } catch (e) {

                    return "not a country";
                }

            }).catch(function (exception) {
                console.log(exception);
            });


        return json;

    }

    static async getPolygon(fileName) {


        let url = gardianIpOrDomain+ pathOfGeoJsons + fileName + ".geo.json";

        const json = await fetch(url, {})
            .then(function (response) {
                // console.log(response.json());
                return response.json();
            })
            .then(function (myJson) {
                try {

                    let myPolygon = myJson.features[0].geometry.coordinates;

                    return myPolygon;
                } catch (e) {

                    return "not a polygon";
                }

            }).catch(function (exception) {
                console.log(exception);
            });


        return json;
    }


    static async getTypeOfPolygon(fileName) {

        let url = gardianIpOrDomain+ pathOfGeoJsons + fileName + ".geo.json";


        const json = await fetch(url, {})
            .then(function (response) {
                // console.log(response.json());
                return response.json();
            })
            .then(function (myJson) {
                try {

                    let myPolygon = myJson.features[0].geometry.type;

                    return myPolygon;
                } catch (e) {

                    return "not a polygon";
                }

            }).catch(function (exception) {
                console.log(exception);
            });


        return json;
    }


    static async getGeotrellisPolygonFormat(fileName) {


        let url = gardianIpOrDomain+ pathOfGeoJsons + fileName + ".geo.json";

        const json = await fetch(url, {})
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                try {

                    let myPolygon = myJson.features[0].geometry.coordinates;
                    let coordinates = myPolygon;

                    //make an array for universal format when country has one || many polygons
                    let poly = [];
                    if (typeof coordinates[0][0][0] === 'number') {
                        poly.push(coordinates);
                    } else {
                        poly = coordinates
                    }
                    let curStr = '';
                    let polyStr = '';
                    let curPoly = null;
                    for (let p = 0; p < poly.length; p++) {
                        curPoly = poly[p][0];
                        curStr = 'POLYGON((';
                        for (let i = 0; i < curPoly.length; i++) {
                            curStr = curStr.concat(curPoly[i][0]);
                            curStr = curStr.concat(' ', curPoly[i][1], ',');
                        }
                        curStr = curStr.concat(curPoly[0][0]);
                        curStr = curStr.concat(' ', curPoly[0][1], '))');
                        polyStr = polyStr.concat(curStr + ';');
                    }
                    polyStr = polyStr.substring(0, polyStr.length - 1);


                    return polyStr;
                } catch (e) {

                    return "not a polygon";
                }

            }).catch(function (exception) {
                console.log(exception);
            });


        return json;
    }


    static async getGeotrellisStatistics(body, datasetsArray) {

        let datasetIdStringBuilder = [];

        for (let i = 0; i < datasetsArray.length; i++) {
            let datasetId = datasetsArray[i].id;
            datasetIdStringBuilder.push(datasetId);
            // console.log(datasetId);
        }

        //let url = "http://localhost:9007/polygon?id=" + datasetIdStringBuilder.join(",");
        let url = gardianIpOrDomain+"/proxyPolygon.php/polygon?id=" + datasetIdStringBuilder.join(",");

        const json = await fetch(url, {
            method: "POST",
            body: body,
        }).then(function (response) {

            return response.json();
        })
            .then(function (myJson) {
                try {

                    // console.log("Geotrellis : ", myJson.length);
                    return myJson;

                } catch (e) {

                    return "not a polygon";
                }

            }).catch(function (exception) {
                console.log(exception);
            });


        return json;
    }



}

export default Requests;
