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
var upd = setInterval(refreshDateandTime, 10);

function updatePasscodeStatus(x) {
  document.getElementById("passkey-" + x).style.background = "#fff";
  document.getElementById("passkey-" + x).style.color = "rgba(0, 0, 0, .5)";
  setTimeout(function() {
    document.getElementById("passkey-" + x).style.background =
      "rgba(0, 0, 0, .5)";
    document.getElementById("passkey-" + x).style.color = "#fff";
  }, 200);
  document.getElementById("progress-length-unlock").style.width =
    parseInt(
      document
        .getElementById("progress-length-unlock")
        .style.width.replace("%", "")
    ) +
    25 +
    "%";
  entpw = entpw + x;
  if (parseInt(entpw) > 999) {
    if (entpw == pw) {
      document.getElementById("os-body-in").style.filter = "blur(13px)";
      document.getElementById("os-body-in").style.opacity = "0";
      location.replace("../aosupscene");
      /*setTimeout(function() {
        document.getElementById("os-body-in").innerHTML =
          "<h1 class='os-text os-text-title'>Logged in.</h1><br><br><br><p class='os-text' id='app-mang' style='opacity: 0; transition: .2s linear;'>There are no apps installed, yet.</p>";
        document.getElementById("os-body-in").style.opacity = "1";
        document.getElementById("os-body-in").style.filter = "blur(0px)";
      }, 200);

      setTimeout(function() {
        document.getElementById("app-mang").style.opacity = "1";
      }, 1000);

      setTimeout(function() {
        document.getElementById("app-mang").style.opacity = "0";
      }, 2000);

      setTimeout(function() {
        document.getElementById("app-mang").innerHTML =
          "Thanks for playing the aerialOS preview.";
        document.getElementById("app-mang").style.opacity = "1";
      }, 2200);*/
    } else {
      document.getElementById("os-body-in").style.filter = "blur(0px)";
      entpw = "";
      document.getElementById("progress-length-wrap").style.background =
        "#f4414a";
      document.getElementById("progress-length-unlock").style.background =
        "#f4414a";
      document.getElementById("progress-length-unlock").style.width = "0%";
      setTimeout(function() {
        document.getElementById("progress-length-wrap").style.background =
          "#ededed";
        document.getElementById("progress-length-unlock").style.background =
          "#3498db";
      }, 200);
    }
  }
}
function createPasscodeKeys() {
  var o = "";
  var currI;
  for (i = 1; i <= 10; i++) {
    if (i == 10) {
      currI = 0;
    } else {
      currI = i;
    }
    o =
      o +
      "<button class='button-round' onclick='updatePasscodeStatus(" +
      currI +
      ")' id='passkey-" +
      currI +
      "'><span class='os-text' style='font-size: 30px;'>" +
      currI +
      "</span></button><span style='color: transparent;'>__</span>";
    if (i % 3 == 0) {
      o = o + "<br><br>";
    }
  }
  document.getElementById("passkeys").innerHTML = o;
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
      "<h1 class='os-text os-text-title'>Enter passcode</h1><br> <div id='progress-length-wrap' class='progress-length-wrap'> <div id='progress-length-unlock' class='progress-length' style='width: 0%;'></div></div><br><br> <div id='passkeys'></div>";
    createPasscodeKeys();
  }, 200);

  setTimeout(function() {
    document.getElementById("os-body-in").style.opacity = "1";
  }, 300);
  document.getElementsByTagName("body")[0].onclick = function() {
    console.log("Attempted to do an action, aborted!");
  };
}

function refreshDateandTime() {
  d = new Date()
  document.getElementById("os-date").innerHTML = shdays[d.getDay()] + ", " + d.getDate() + " " + shMon[d.getMonth()] + ", " + d.getFullYear();
  document.getElementById("os-time").innerHTML = d.getHours() + ":" + d.getMinutes();
}