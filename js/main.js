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
var vidURL = "https://binvids.s3.us-east-2.amazonaws.com/" + vidID + ".mp4";
var vidInfo = vids[vidID-1].split("|");
var vidInfoTitle = vidInfo[1];

var vidPlayer = document.getElementById("vidPlayer");
var vidTitle = document.getElementById("vidTitle");  

function createBin(){
    var para = document.createTextNode(vidInfoTitle);

    // Player
    vidPlayer.src = vidURL;

    // Title applied everywhere
    vidTitle.appendChild(para);
    document.title = vidInfoTitle + " :: BASEMENT BIN";
    
    document.querySelector('meta[property="og:title"]').setAttribute("content", vidInfoTitle);
    document.querySelector('meta[name="description"]').setAttribute("content", vidInfoTitle);
    window.history.pushState(null, null, "?v=" + vidID);

    // Get another when it's done
    vidPlayer.addEventListener("ended", (event) => {
        location.href = "/";
    });
}
createBin();
