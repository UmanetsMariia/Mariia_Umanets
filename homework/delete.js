var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var data = JSON.stringify({
    "path": "/NewFile.txt"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz");
  
  xhr.send(data);