let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Pass");
  } else {
    reject("reject");
  }
});


p.then((message) => {
      console.log("Pass the messae" + message);
    }).catch((message) => {
      console.log("failed the message" + message);
    });
