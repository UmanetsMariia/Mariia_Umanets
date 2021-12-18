XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class api
{
    Upload()
    {
        let data = "test";

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
          xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/Newfile.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
          xhr.setRequestHeader("Authorization", "Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz");
          
          xhr.send(data);
        }

    GetFileMetadata()
    {
        let data = JSON.stringify({
            "path": "/Newfile.txt"
        });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "https://api.dropboxapi.com/2/files/get_metadata");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("Authorization", "Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz");
          
          xhr.send(data);
        }        


    DeleteFile()
    {
        let data = JSON.stringify({
                "path": "/Newfile.txt"
        });

        let xhr = new XMLHttpRequest();
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
        }        

}
test = new api();


setTimeout(test.Upload,1000);
setTimeout(function(){console.log('\n')},2000);

setTimeout(test.GetFileMetadata,3000);
setTimeout(function(){console.log('\n')},4000);

setTimeout(test.DeleteFile,5000);
setTimeout(function(){console.log('\n')},6000);

