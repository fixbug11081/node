console.log("start");

function login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Now we have user");
        resolve({userEmail:email});
        }, 5000);
    });
}

function getVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(["video1", "video2", "videos3"]);
        }, 2000);
  });
}

function videosDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              resolve("the title of videos");
        }, 2000);
  });
}

//
// login("ajeet@gmail.com", 123232)
// .then(user => getVideos(user.userEmail))
// .then(videos => videosDetails(videos[0]))
// .then(detail => console.log(detail));


async function displayStuff(){
  try{
      const logged = await login('ajeet@gmail.com', 121212);
      const videos = await getVideos(logged.userEmail);
      const detail = await videosDetails(videos[0]);
      console.log(detail);
    }catch(err){
      console.log("Error");
    }
}

displayStuff();
console.log("finis");
