const yt = new Promise(resolve =>{
  setTimeout(() => {
    console.log("all videos");
    resolve({videos:[1,2,3,3,4]});
  },2000);
});

const fb =  new Promise(resolve =>{
  setTimeout(() => {
    console.log("print name");
    resolve({name:"ajeet"});
  },2000);
});

Promise.all([fb,yt]).then(result => {
  console.log(result);
});
