var onloadFunc = function() {
    var form = document.getElementById("uploadImgForm");
    var imgUploadElement = document.getElementById("imgFileuploadInput");
    var uploadImgButton = document.getElementById("uploadImgButton");
    var errorDiv = document.getElementById("errorDiv");
    console.log(errorDiv);
    errorDiv.style.display = "none";

    var imageListDiv = document.getElementById("imgListDiv");

    
    /*
    uploadImg =  function () {  
      var fileList =   imgUploadElement.files;
      console.log("Upload file name : " + fileList);
      if(fileList == null || fileList[0] == null || fileList[0].name == null) {
        console.log("Invalid file selected");
        errorDiv.innerHTML="Invalid file selected";
        errorDiv.style.display = "block";
        return;
      }
      else {
        console.log("Submitting form");
        errorDiv.style.display = "none";
        $.ajax({
            url: "https://lv8ztgx1nk.execute-api.us-east-1.amazonaws.com/qa/athakur-test/" + fileList[0].name,
            type: 'put',
            data: JSON.stringify(""),
            headers: {
            },
            success: function(result) {
                console.log("Success: " + JSON.stringify(result));
            }
        });
      }
    };    

    imgUploadElement.addEventListener('change', function(event){
        errorDiv.style.display = "none";
        console.log("Files changed");
        var fileName =   imgUploadElement.files[0].name;
        console.log("Upload file name : " + fileName);
    });
    */

   fetchImgList = function() {

    var bucketName = "athakur-test";
    $.ajax({
        url: "https://lv8ztgx1nk.execute-api.us-east-1.amazonaws.com/dev/" + bucketName,
        type: 'get',
        headers: {
            "content-type": "application/json"
        },
        success: function(result) {
            console.log("Success: " + JSON.stringify(result));
            debugger;
            if(result == null || result.body == null){
                imageListDiv.innerHTML = "No image files found for bucket " + bucketName;
            }
            else {
                var body = JSON.parse(result.body);
                if(!Array.isArray(body) || body.length == 0){
                    imageListDiv.innerHTML = "No image files found for bucket " + bucketName;
                }
                else {
                    var htmlContent = "";
                    body.forEach(item => {
                        var link = "https://s3.amazonaws.com/" + bucketName + "/" + item;
                        var htmlItemContent = "<img src='" +  link + "'/>";
                        htmlContent = htmlContent + htmlItemContent + "<br/><p>---</p><br/>";
                    });
                    imageListDiv.innerHTML = htmlContent;
                }
            }

        }
    });
}

};



