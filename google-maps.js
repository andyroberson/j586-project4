function initialize() { //can call this whateva you want like createMap

 //*********************************** lats and longs *********************************//

  var pier39 =  { lat: 37.8107, lng: -122.4112 }
  //need to declare myLatlng for adding marker;

  var alcatraz =  { lat: 37.8078, lng: -122.4046 }

  var musee = { lat: 37.8092, lng: -122.4159 }

  var aquarium = { lat: 37.8088, lng: -122.4093 }

  var hyde = { lat: 37.8092 , lng: -122.42145 }

  var maritime = { lat: 37.8065, lng:  -122.4237 }

  var pampanito = { lat: 37.8100, lng: -122.4165 }

  var ghirardelli = { lat: 37.8057, lng: -122.4223 }

  var aquatic = { lat: 37.8069, lng: -122.4211 }

  var dungeon = { lat: 37.80813, lng: -122.41455 }

  var mapOptions = {
    center: { lat: 37.80813, lng: -122.41455 },
    zoom: 16,
    scrollwheel: false,
    //highest is 22?
    mapTypeId: google.maps.MapTypeId.TERRAIN

  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),    //calls in google maps code, puts it in #map-canvas
      mapOptions);

  //********************************** content strings ******************************************//

  var pier39_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Pier 39</h1>'+
  '<div id="bodyContent">'+
  '<p>Visit Pier 39 to get a glimpse of <b>sea lions!</b>' +
  'This location also has many small shops and restaraunts along the way, in case sea lion watching wears you out.</p>'+
  '</div>'+
  '</div>';

  var alcatraz_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Alcatraz</h1>'+
  '<div id="bodyContent">'+
  '<p><b>At this location</b>, you can buy Alcatraz tickets! Alcatraz is the famous prisoner island of California.'+
  'Though it is no longer in use, it is frequently toured. Be sure to buy tickets at least a month in advance,'+
  'because these tours fill up quickly!</p>'+
  '</div>'+
  '</div>';

  var musee_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Musee Mecanique</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Musee Mecanique</b> is a museum filled with old arcade games and penny slots.'+
  'It has free admission so if you like video games, it is definitely a worthwhile visit!</p>'+
  '</div>'+
  '</div>';

  var aquarium_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Aquarium at the Bay</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Aquarium at the Bay</b> houses many sea animals common in the San Francisco Bay.'+
  'You can observe these animals in various tanks, and there is even a glass tunnel which makes you feel like you are walking'+
  'underwater among the sea creatures! </p>'+
  '</div>'+
  '</div>';

  var hyde_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Hyde Street Pier</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Hyde Street Pier</b> boasts a fabulous view of Alcatraz, as well as several historical ships.'+
  'You can pay a small admission fee to get a tour of the ships and learn more about them!</p>'+
  '</div>'+
  '</div>';

  var maritime_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Maritime Museum</h1>'+
  '<div id="bodyContent">'+
  '<p>If you are interested in <b>boats or history</b> definitely make a stop here!</p>'+
  '</div>'+
  '</div>';

  var pampanito_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">USS Pampanito</h1>'+
  '<div id="bodyContent">'+
  '<p><b>This submarine</b> was named after the pompano fish, and completed 6 war time tours.'+
  'Today, you can tour the tight quarters of the submarine - claustrophobic people should probably avoid this tour.</p>'+
  '</div>'+
  '</div>';

  var ghirardelli_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Ghirardelli Square</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Chocolate paradise!</b> Not only do you get to see where the famous Ghirardelli chocolates got their start, but you'+
  'get a free chocolate square on entering the building. You can also buy some huge packages of Ghirardelli bars or'+
  'treat yourself to some delicious Ghirardelli ice cream</p>'+
  '</div>'+
  '</div>';

  var aquatic_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Aquatic Park</h1>'+
  '<div id="bodyContent">'+
  '<p>Here, you will find plenty of grass to sit on and relax. If you are feeling adventurous,'+
  'there are also many street vendors and caricature artists along the sidewalks.</p>'+
  '</div>'+
  '</div>';

  var dungeon_contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">San Francisco Dungeon</h1>'+
  '<div id="bodyContent">'+
  '<p>If you enjoy thrilling underground boat rides, schedule a visit here!'+
  '</div>'+
  '</div>';

  //***************************************infow windows*****************************************//


  var pier39infowindow = new google.maps.InfoWindow({
           content: pier39_contentString
  });

  var alcatrazinfowindow = new google.maps.InfoWindow({
           content: alcatraz_contentString
  });

  var museeinfowindow = new google.maps.InfoWindow({
           content: musee_contentString
  });

  var aquariuminfowindow = new google.maps.InfoWindow({
           content: aquarium_contentString
  });

  var hydeinfowindow = new google.maps.InfoWindow({
           content: hyde_contentString
  });

  var maritimeinfowindow = new google.maps.InfoWindow({
           content: maritime_contentString
  });

  var pampanitoinfowindow = new google.maps.InfoWindow({
           content: pampanito_contentString
  });

  var ghirardelliinfowindow = new google.maps.InfoWindow({
           content: ghirardelli_contentString
  });

  var aquaticinfowindow = new google.maps.InfoWindow({
           content: aquatic_contentString
  });

  var dungeoninfowindow = new google.maps.InfoWindow({
           content: dungeon_contentString
  });

  //**************************************MARKERS**********************************************//

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  var marker = new google.maps.Marker({
      position: pier39,
      map: map,              //what map you put it on? put it on map called map
      title:"pier39",
      icon: 'images/mammal7.png'

  });

 var marker2 = new google.maps.Marker({
      position: alcatraz,
      map: map,
      title: "marker2222",
      icon: 'images/prisoner1.png'
  });

  var marker3 = new google.maps.Marker({
       position: musee,
       map: map,
       title: "musee",
       icon: 'images/arcade.png'
  });

  var marker4 = new google.maps.Marker({
       position: aquarium,
       map: map,
       title: "aquarium at the bay",
       icon: 'images/fish21.png'
  });

  var marker5 = new google.maps.Marker({
       position: hyde,
       map: map,
       title: "hyde",
       icon: 'images/sea8.png'
  });

  var marker6 = new google.maps.Marker({
       position: maritime,
       map: map,
       title: "maritime",
       icon: 'images/anchor40.png'
  });

  var marker7 = new google.maps.Marker({
       position: pampanito,
       map: map,
       title: "USS pampanito",
       icon: 'images/submarine4.png'
  });

  var marker8 = new google.maps.Marker({
       position: ghirardelli,
       map: map,
       title: "ghirardelli square",
       icon: 'images/soft1.png'
  });

  var marker9 = new google.maps.Marker({
       position: aquatic,
       map: map,
       title: "aquatic park",
       icon: 'images/trees25.png'
  });

  var marker10 = new google.maps.Marker({
       position: dungeon,
       map: map,
       title: "dungeony wungeony",
       icon: 'images/horror2.png'
  });

  //************************************ADD EVENTS / CLICKING AND CLOSING**********************//

  google.maps.event.addListener(marker, 'click', function() {
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    pier39infowindow.open(map,marker);
  });

  google.maps.event.addListener(marker2, 'click', function() {
    pier39infowindow.close(map,marker);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    alcatrazinfowindow.open(map,marker2);
  });

  google.maps.event.addListener(marker3, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    museeinfowindow.open(map,marker3);
  });

  google.maps.event.addListener(marker4, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    aquariuminfowindow.open(map,marker4);
  });

  google.maps.event.addListener(marker5, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    hydeinfowindow.open(map,marker5);
  });

  google.maps.event.addListener(marker6, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    maritimeinfowindow.open(map,marker6);
  });

  google.maps.event.addListener(marker7, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    pampanitoinfowindow.open(map,marker7);
  });

  google.maps.event.addListener(marker8, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.close(map,marker10);
    ghirardelliinfowindow.open(map,marker8);
  });

  google.maps.event.addListener(marker9, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    dungeoninfowindow.close(map,marker10);
    aquaticinfowindow.open(map,marker9);
  });

  google.maps.event.addListener(marker10, 'click', function() {
    pier39infowindow.close(map,marker);
    alcatrazinfowindow.close(map,marker2);
    museeinfowindow.close(map,marker3);
    aquariuminfowindow.close(map,marker4);
    hydeinfowindow.close(map,marker5);
    maritimeinfowindow.close(map,marker6);
    pampanitoinfowindow.close(map,marker7);
    ghirardelliinfowindow.close(map,marker8);
    aquaticinfowindow.close(map,marker9);
    dungeoninfowindow.open(map,marker10);
  });


  //*************************************map styles********************************************//

  var styles = [
    {
      featureType: "water",
      stylers: [
        { color: "#A7DBD8" }
      ]
    },{
      featureType: "road",
      elementType: "all",
      stylers: [
        { hue: "#524236" },
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "transit",
      elementType: "all",
      stylers: [
        { hue: "#524236" },
        { saturation: 100 }
      ]
    },{
      featureType: "landscape",
      elememtType: "all",
      stylers: [
        { hue: "#d9c180" },
        { saturation: 100 }
      ]
    },{
      featureType: "administrative",
      elememtType: "all",
      stylers: [
        { hue: "#d9c180" },
        { saturation: 100 }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);
