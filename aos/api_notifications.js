var allApps = "Photos[`-]aos_photos[`-]https://material.io/icons/static/images/icons-180x180.png[~-]Calc...[`-]aos_calculator[`-]https://img.talkandroid.com/uploads/2016/03/Google_stock_calculator_app_icon.png[~-]Clock[`-]aos_clock[`-]http://www.iconarchive.com/download/i94298/bokehlicia/captiva/clock.ico";

function sendNotification (title, desc, app) {
	var currApps = allApps.split("[~-]");
	var appIcon = "";
	for(i = 0; i < currApps.length; i++) {
		if(currApps[i].split("[`-]")[1] == app) {
			appIcon = currApps[i].split("[`-]")[2];
			break;
		}
	}

	document.getElementById("notification-center").innerHTML = document.getElementById("notification-center").innerHTML + "<div class='notification'><p class='os-text'><img src='" + appIcon + "' style='height: 20px; width: 30px; vertical-align: middle; padding-right: 10px;'>" + title + "</p><p class='os-text' style='text-align: left;'>" + desc + "</p></div><br>"; 
}