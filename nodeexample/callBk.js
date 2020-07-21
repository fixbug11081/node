console.log("start");

function login(email, password) {
        setTimeout(() => {
          callback({userEmail:email});
          }, 5000);
}

function getVideos(email,callback){
    setTimeout(() => {
      callback(["video1", "video2", "videos3"]);
    }, 2000);
}
const loggedin = login("ajeet@gmail.com", 123232, (user)=>{
      console.log("Show user email: "+ user.userEmail);
      getVideos(user.userEmail, (videos)=>{
        console.log(videos);
      })
});

console.log("finis");
