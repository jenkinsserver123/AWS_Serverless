const AWS = require('aws-sdk');
const step_function = new AWS.StepFunctions();
//process.env.Author

exports.handler = (event, context, callback) => {
    
  console.log("Got event : " + JSON.stringify(event));
  console.log("Env variable author : " + process.env.Author);

  var bucket = event.bucket;
  var key = event.key;
  console.log("bucket " + bucket + " key : " + key);

  var result = {};
  result.bucket = bucket;
  result.key = key;
  if(key.endsWith(".jpg")){
    result.isJpg = true;
  }
  else if(key.endsWith(".png")) {
    result.isPng = true;
  }
  else if(key.endsWith(".gif")) {
    result.isGif = true;
  }
  else{
      console.log("Unknown file type. Ignore for now!");
  }

  callback(null, result);

};