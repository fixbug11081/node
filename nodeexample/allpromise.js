const recordVideo1 = new Promise((resolve,reject)=>{
  resolve("Run video 1");
});
const recordVideo2 = new Promise((resolve,reject)=>{
  resolve("Run video 1");
});
const recordVideo3 = new Promise((resolve,reject)=>{
  resolve("Run video 1");
});

Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((message)=>{
  console.log("message" +message);
});
