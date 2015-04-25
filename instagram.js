// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=aba575d7e1504dbeba059b8a345b26d9&redirect_uri=http://brmayes.com/static/j586/project-four&response_type=token
//to get authorization!!!

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id


$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/fishermanswharf/media/recent?access_token=26533789.aba575d.fa5050cc779741628bd2fbaab4dc3e85&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);

			$.each(json.data,function(i,data){
				//html += '<p>Filter:"'+ data.filter+'"</p>';
				html += '<a href="' + data.images.low_resolution.url + '"><img src ="' + data.images.low_resolution.url + '"height="120px" width="120px"></a>'
			});

			console.log(html);
			$(".social-insta").append(html);

		}

 });
