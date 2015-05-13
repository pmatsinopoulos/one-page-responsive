var myProjects = [ { title: "Portfolio Page", pic: "img/portfolio-site-example.jpg" }, {title: "Personal blog", pic: "img/music-blog-example.jpg" }, { title: "Work in progress", pic: "img/solid-black.jpg" }, { title: "Coming soon", pic: "img/solid-black.jpg" }, ];

$(document).ready(function() {

  for(var i=0; i<myProjects.length; ++i) {
      $( "#" + i ).css("background-image", "url(" + myProjects[i].pic + ")" );
	};
	$(".image").mouseenter( function() {
		$(this).html("<p class='info'><span class='proj.title'>Title:</span> " + myProjects[this.id].title + "</p>");
	}).mouseleave( function() {
		$(this).html("");
	});

	
	$("#submit-btn").on("click", function() {
		var comment = $(".comment-box").val();
		$("#visible-comment").html("Your comment:<br>" + comment);
		$("#visible-comment").css("text-transform", "uppercase").css("background-color", "blue");
		var visibleComment = $("#visible-comment").html();
	});

	$(".comment-box").on("keyup", function() {
		var charCount = $(".comment-box").val().length;
		$("#char-count").html(charCount);
		if (charCount > 50) {
			$("#char-count").css("color", "red");
		} else {
			$("#char-count").css("color", "black");
		};
	});


  var map;
	function initialize() {
  	var mapOptions = {
      center: new google.maps.LatLng(52.523380,13.353701),
      zoom: 8
  	};    
  	map = new google.maps.Map(document.getElementById("map-canvas"), 
    mapOptions);

	  var marker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: "Click to zoom"
		});

		google.maps.event.addListener(marker, 'click', function() {
			map.setZoom(15);
			map.setCenter(marker.getPosition());
		});
  };

	google.maps.event.addDomListener(window, 'load', initialize);

});