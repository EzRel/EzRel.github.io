var entpw = "";
var pw = "2222";
var d = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var shdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var shMon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var allApps = "Photos[`-]aos_photos[`-]https://material.io/icons/static/images/icons-180x180.png[~-]Calc...[`-]aos_calculator[`-]https://img.talkandroid.com/uploads/2016/03/Google_stock_calculator_app_icon.png[~-]Clock[`-]aos_clock[`-]http://www.iconarchive.com/download/i94298/bokehlicia/captiva/clock.ico";
var currApps = "";
var upd = setInterval(function () { showApps(); }, 10);

function showApps() {
  if(allApps != currApps) {
    currApps = allApps;
    var currapps = allApps.split("[~-]");
    var o = "";
    for(i = 0; i < currapps.length; i++) {
      var currapp = currapps[i].split("[`-]");
      o = o + "<button class='app-icon' id='app-" + currapp[0] + "' onclick='toApp(\"" + currapp[1] + "\")' style='background: url(" + currapp[2] + "); background-size: 3.53em; background-repeat: no-repeat;'>" + currapp[0] + "</button><span style='color: transparent;'>__</span>";
    }
    document.getElementById("os-app-list").innerHTML = o;
  }
}

function toApp(appid) {
  document.getElementById("os-body-in").style.opacity = "0";
  setTimeout(function () { location.replace("../app_" + appid); }, 200);
}

$("input[type=range]")
  .on("input", function(e) {
    var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

    $(e.target).css({
      backgroundSize: (val - min) * 100 / (max - min) + "% 100%"
    });
  })
  .trigger("input");

function toggleVolumeVis() {
  document.getElementById("os-volume-wrap").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("os-volume-wrap").style.opacity = "0";
  }, 5000);
}

function startPasscode() {
  document.getElementById("os-body-in").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("os-body-in").innerHTML =
      "<h1 class='os-text os-text-title'>Enter passcode</h1><p class='os-text'>The following action requires your password.</p><br> <div id='progress-length-wrap' class='progress-length-wrap'> <div id='progress-length-unlock' class='progress-length' style='width: 0%;'></div></div><br><br> <div id='passkeys'></div>";
    createPasscodeKeys();
  }, 200);

  setTimeout(function() {
    document.getElementById("os-body-in").style.opacity = "1";
  }, 300);
  document.getElementById("os-body").onclick = function() {
    console.log("Attempted to do an action, aborted!");
  };
}

/*function refreshDateandTime() {
  d = new Date()
  document.getElementById("os-date").innerHTML =
    shdays[d.getDay()] + ", " + d.getDate() + " " + shMon[d.getMonth()] + ", " + d.getFullYear();
  document.getElementById("os-time").innerHTML = d.getHours() + ":" + d.getMinutes();
}
*/