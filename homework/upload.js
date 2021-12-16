var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

var data = "text";
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log("UPLOAD");
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
xhr.setRequestHeader("Dropbox-API-Arg", " {\"path\":\"/NewFile.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
xhr.setRequestHeader("Content-Type", "application/octet-stream");
xhr.setRequestHeader("Authorization", "Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz");

xhr.send(data);

