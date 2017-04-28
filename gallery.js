/* Jeremiah Howell */

var current;
var chico = [
	{description:"Bear Hole",picture:"http://www.chico.ca.us/general_services_department/images/bear_hole.jpg",
	 from:"http://www.chico.ca.us/general_services_department/park_division/images_of_bidwell_park.asp"},
	{description:"Covered Bridge",picture:"https://c1.staticflickr.com/7/6218/6281896287_730b7c6627_b.jpg",
	 from:"https://www.flickr.com/photos/webdoc/6281896287"},
	{description:"Upper Park",picture:"http://bidwellpark.org/wp-content/uploads/2014/12/California-Poppies-in-Bidwell-Park.jpg",
	 from:"http://bidwellpark.org/upper-park/"},
	{description:"In N Out",picture:"https://s3-media1.fl.yelpcdn.com/bphoto/YaZEFzUDt00-sGNTbrbOBw/o.jpg",
	 from:"https://www.yelp.com/biz_photos/in-n-out-burger-chico?select=YaZEFzUDt00-sGNTbrbOBw"},
	{description:"Old 32",picture:"http://image.chicoer.com/storyimage/NA/20161119/NEWS/161119661/AR/0/AR-161119661.jpg&maxh=400&maxw=667",
	 from:"http://www.chicoer.com/article/NA/20161119/NEWS/161119661"}
];

function shuffleGallery() {
  var randomIndex;
  do {
  	randomIndex = Math.floor(Math.random() * chico.length);
  }while (randomIndex == current );
		current = randomIndex;
		document.getElementById("picture").src = chico[current].picture;
  	document.getElementById("caption").innerHTML = chico[current].description;
  	document.getElementById("source").innerHTML = "image courtesy of: " + chico[current].from;
}
