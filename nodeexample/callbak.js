const user = false;
const userWatch = true;

function userWatchVideo(callback, errorCallback) {

  if (user) {
    errorCallback({
      name: "ajeet",
      message: "test it now"
    });
  } else if (userWatch) {
    errorCallback({
      name: "prakash",
      message: "test it here"
    });
  }else {
      callback("Print thumb");
    }
  }

 userWatchVideo((message) => {
   console.log("return: "+message);
 }, (error)=>{
   console.log("return: " +error.name);
 });
