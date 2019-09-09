// ----------------------------------------Display current time
(function currentTime(){
	
	var time = new Date(),
		year = time.getFullYear(),
		month = time.getMonth()+1,
		day = time.getDate(),
		hour = time.getHours(),
		minutes = time.getMinutes();
		seconds = time.getSeconds();
	function addFormat(){
		if (day < 10) {
			day = '0' + day;
		};
		if (hour < 10) {
			hour = '0' + hour;
		};
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
	}
	addFormat();

	timeBox = document.querySelector('#current-time');
	timeBox.innerHTML = day + "/" + month + "/" + year + ", " + hour + ":" + minutes + ":" + seconds;

	setTimeout(currentTime, 1000);
})();
// ----------------------------------------Display which browser do you visit site
(function visitBrowser(){

	var browser = document.querySelector("#browser");

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        browser.innerHTML = "Opera";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        browser.innerHTML = "Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        browser.innerHTML = "Safari";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        browser.innerHTML = "Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      browser.innerHTML = "Inrenet Explorer" ;
    }  
    else 
    {
       browser.innerHTML = "Unknown browser"
    }

})();
// ----------------------------------------Current weather request
(function weatherApi(){

	var api = 'http://api.openweathermap.org/data/2.5/weather?q=',
		city,
		apikey = '&APPID=673dc5799ec44bdbd03917d17cdaba93',
		metric = '&units=metric',
		message = document.querySelector('#message'); 

	function weatherSetup(event){
		event.preventDefault();
		city = document.querySelector('#city').value;
		url = api + city + apikey + metric;
		message.innerHTML = "";
		$.ajax({
	        url: url,
	        dataType: 'json',
	        success: function (data) {
// ----------------------------------------Select fields	         
	        	var box = document.querySelector('#info'),
					cityName = document.querySelector('#city-name'),
					temp = document.querySelector('#temp'),
					cloud = document.querySelector('#cloud'),
					maxTemp = document.querySelector('#max-temp'),
					minTemp = document.querySelector('#min-temp'),
					humidity = document.querySelector('#humidity'),
					wind = document.querySelector('#wind'),
					pressure = document.querySelector('#pressure');
					iconBox = document.querySelector('#icon')
					icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
// ----------------------------------------Put values in fields
				box.style.display = "flex";
				cityName.innerHTML = data.name + ", " + data.sys.country;
				temp.innerHTML = Math.round(data.main.temp) + "°C";
				iconBox.innerHTML = icon;
				cloud.innerHTML = data.weather[0].description;
				maxTemp.innerHTML = Math.round(data.main.temp_max) + "°C";
				minTemp.innerHTML = Math.round(data.main.temp_min) + "°C";
				humidity.innerHTML = data.main.humidity + "%";
				wind.innerHTML = data.wind.speed + "m/s";
				pressure.innerHTML = data.main.pressure + "hpa";

				document.getElementById("forecast-box").innerHTML = "";//initial state of forecast box
	        },
	        error: function(){
			    message.innerHTML = "Please input a valid city!";
			}
	    })
	};
// ----------------------------------------On click do curent weather request
	function formSubmit(){
		var submit = document.querySelector('#submit').addEventListener('click', weatherSetup);
	}; 
	formSubmit();

})();
// ----------------------------------------Forecast request
(function forecastApi(){

	var api = 'http://api.openweathermap.org/data/2.5/forecast?q=',
		city,
		apikey = '&APPID=673dc5799ec44bdbd03917d17cdaba93',
		metric = '&units=metric';

	function forecastSetup(event){
		event.preventDefault();
		city = document.querySelector('#city').value;
		url = api + city + apikey + metric;
		arr = [];
		$.ajax({
	        url: url,
	        dataType: 'json',
	        success: function (data) {

	        	document.getElementById("forecast-box").innerHTML = ""; //initial state of forecast box

				for (var i = 0; i < data.list.length; i+=8) {
					arr.push(data.list[i]);
				};

				for(var j = 1; j< arr.length; j++) {
					var forecastTemp = Math.round(arr[j].main.temp) + "°C",
					    forecastIcon = ("http://openweathermap.org/img/w/" + arr[j].weather[0].icon + ".png"),
					    forecastCloud = arr[j].weather[0].description,
					    forecastWind = arr[j].wind.speed + "m/s",
					    forecastHumidity = arr[j].main.humidity + "%",
					    forecastPressure = arr[j].main.pressure + "hpa";

					addList(forecastTemp, forecastIcon, forecastCloud, forecastWind, forecastHumidity, forecastPressure);
				};

	        }
	    })
	};
// ----------------------------------------On click do forecast request
	function formSubmit(){
		var more = document.querySelector('#more').addEventListener('click', forecastSetup);
	}; 
	formSubmit();
// ----------------------------------------5 days forecast creating ULs
	function addList(forecastTemp, forecastIcon, forecastCloud, forecastWind, forecastHumidity, forecastPressure){

		ulBody = document.querySelector("#forecast-box");
		row = document.createElement("ul");
		row.setAttribute("class", "day-list col-sm-3");
		listItem = document.createElement("li");
		listItem2 = document.createElement("li");
		listItem3 = document.createElement("li");
		listItem4 = document.createElement("li");
		listItem5 = document.createElement("li");
		listItem6 = document.createElement("li");
		listContent = document.createTextNode(forecastTemp);
		listContent2 = document.createElement("img");
		listContent2.src = forecastIcon;
		listContent3 = document.createTextNode(forecastCloud);
		listContent4 = document.createTextNode(forecastWind);
		listContent5 = document.createTextNode(forecastHumidity);
		listContent6 = document.createTextNode(forecastPressure);
		listItem.appendChild(listContent);
		listItem2.appendChild(listContent2);
		listItem3.appendChild(listContent3);
		listItem4.appendChild(listContent4);
		listItem5.appendChild(listContent5);
		listItem6.appendChild(listContent6);
		row.appendChild(listItem);
		row.appendChild(listItem2);
		row.appendChild(listItem3);
		row.appendChild(listItem4);
		row.appendChild(listItem5);
		row.appendChild(listItem6);
		ulBody.appendChild(row);

	};

})();












