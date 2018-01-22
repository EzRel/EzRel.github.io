var appBody = "Bookmarks can change code ;)";

function searchInside(x) {
	var y = "DONE!";
	document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + y;
	appBody = x + y;
}

function spaceEmoji() {
	document.getElementsByTagName("body")[0].innerHTML = appBody.replace(" ", maChoose(["&#128512;", "&#128513;", "&#128514;", "&#128515;", "&#128516;", "&#128517;", "&#128518;"]);
}

function maChoose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}