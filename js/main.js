const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function getVid() {
    if (urlParams.has("v")) {
        selectedVid = urlParams.get("v");
    }
    else {
        selectedVid = Math.floor(Math.random()*vids.length);
    }
    return selectedVid;
}

var vidID = getVid();
var vidFile = vids[vidID];
var vidStr = vidFile.slice(0, -4);
var vidURL = "https://binvids.s3.us-east-2.amazonaws.com/" + vidFile;
var vidPlayer = document.getElementById("vidPlayer");
var vidTitle = document.getElementById("vidTitle");  

function createBin(){
    var para = document.createTextNode(vidStr);

    // Player
    vidPlayer.setAttribute("src", vidURL);
    vidPlayer.setAttribute("controls", "controls"); 

    // Title
    vidTitle.appendChild(para);
    document.title = vidStr + " :: BASEMENT.ORG";
    window.history.pushState(null, null, "?v=" + vidID);

    // Event listeners to remove display
    vidPlayer.addEventListener("ended", (event) => {
        console.log("Get another!");
    });
}

function toggleTitle() {
    if (vidTitle.textContent = vidStr) {
        vidTitle.textContent = "";
    }
    else {
        vidTitle.textContent = vidStr;
    }
}
/*
// Event listeners to remove display
vidPlayer.addEventListener("play", (event) => {
    toggleTitle();
});
*/

createBin();    