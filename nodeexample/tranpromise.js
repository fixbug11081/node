const user = false;
const userWatch = false;

function userWatchVideoPromises() {
  return new Promise((resolve, reject)=>{
          if (user) {
            reject({
              name: "ajeet",
              message: "test it now"
            })
          } else if (userWatch) {
            reject({
              name: "prakash",
              message: "test it here"
            })
          } else {
            resolve("Print thumb")
          }

      })
}


userWatchVideoPromises().then((message) => {
  console.log("return: " + message);
}).catch((error) => {
  console.log("return: " + error.name);
});
