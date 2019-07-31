<!--nasa_api-->
	var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event)
		{
					/*if the user press enter then only request will be sent*/
					var len = document.getElementById("myInput").value;
					if(len.length != 0)
					{
							if (event.keyCode === 13) {
									event.preventDefault();
									add();

								}
					}
					else{
					alert("search box cannot be empty!!!");
					}
		});
function reload(){
	document.location.reload(true);
	}

/*function to add background image ,it will take few seconds*/	
var xhr= new XMLHttpRequest();
function dog(){
xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=FQNny3zHhnUQVZNvhyGhDAikbHC8Zy7wb7NWq8Hx',true);


xhr.send();
xhr.onreadystatechange = function(){
	
if(this.readyState == 4 && this.status==200){
	

									var result= JSON.parse(xhr.responseText);

									console.dir(result);

 
									document.getElementById("bd").background = result.url;
									document.getElementById("notice").style.display = "none";
									/*sometimes instead of the url, for pic of the day(.jpg format) ,this api provied the url of a video ,
									which is not supported as a background image so if the background image is not opening please do check
									from the console if the url provied by this api on that particular time is of .jpg fromat or a video*/ 
										}


};
}
