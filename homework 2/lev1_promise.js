let isMomHappy = true;
let phone = {
    brand : 'Samsung',
    color : 'black'
};

var willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        console.log(phone);
        resolve();
    }
    else{
        console.log("mom is not happy")
        reject(new Error("mom is not happy"));
    }
});