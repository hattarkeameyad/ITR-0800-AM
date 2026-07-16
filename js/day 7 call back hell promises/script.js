
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


let firstpromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        console.log("THe promise is successfull")
        resolve("The promise has been successfull");
    }
    else {
        reject("The promise is failed");
    }
});
firstpromise.then(result => {
    console.log(result);
}
);
firstpromise.catch(error => {
    console.log(error);
});



let promise2 = new Promise((resolve, reject) => {
    let mood = "Good"

    if (mood === "Good") {
        setTimeout(() => {
            console.log("Take 1 lakh rupees");
            resolve("Money is provided");
        }, 5000);

    }
    else {
        setTimeout(() => {
            console.log("Low balance")
            reject("Low balance Alert");
        }, 3000)
    }
});
promise2.then(result => console.log(result))
promise2.catch(error => console.log(result))


let callingfromanapi = () => {

    //blockof code 
    //blockof code 
    //blockof code 
    //blockof code 
    setTimeout(() => {




        console.log("Waiting for some code execution on which my code is dependent 1st block");
        //blockof code 
        //blockof code 
        //blockof code 
        //blockof code 
        setTimeout(() => {
            //block of code
            //block  of code
            console.log("Waiting for some code execution on which my code is dependent 2nd block");

            //block of code

            //block of code
            //block of code
            setTimeout(() => {
                console.log("Waiting for some code execution on which my code is dependent 3rd block block");
                //blockof code 
                //blockof code 
                //blockof code 
                //blockof code 
                setTimeout(() => {
                    //block of code
                    //block  of code
                    console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                    //block of code

                    //block of code
                    //block of code
                    setTimeout(() => {
                        //block of code
                        //block  of code
                        console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                        //block of code

                        //block of code
                        //block of code
                        setTimeout(() => {
                            //block of code
                            //block  of code
                            console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                            //block of code
                            setTimeout(() => {
                                //block of code
                                //block  of code
                                console.log("Waiting for some code execution on which my code is dependent 2nd block");

                                //block of code

                                //block of code
                                //block of code
                                setTimeout(() => {
                                    console.log("Waiting for some code execution on which my code is dependent 3rd block block");
                                    //blockof code 
                                    //blockof code 
                                    //blockof code 
                                    //blockof code 
                                    setTimeout(() => {
                                        //block of code
                                        //block  of code
                                        console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                        //block of code

                                        //block of code
                                        //block of code
                                        setTimeout(() => {
                                            //block of code
                                            //block  of code
                                            console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                            //block of code

                                            //block of code
                                            //block of code
                                            setTimeout(() => {
                                                //block of code
                                                //block  of code
                                                console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                //block of code
                                                setTimeout(() => {
                                                    //block of code
                                                    //block  of code
                                                    console.log("Waiting for some code execution on which my code is dependent 2nd block");

                                                    //block of code

                                                    //block of code
                                                    //block of code
                                                    setTimeout(() => {
                                                        console.log("Waiting for some code execution on which my code is dependent 3rd block block");
                                                        //blockof code 
                                                        //blockof code 
                                                        //blockof code 
                                                        //blockof code 
                                                        setTimeout(() => {
                                                            //block of code
                                                            //block  of code
                                                            console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                            //block of code

                                                            //block of code
                                                            //block of code
                                                            setTimeout(() => {
                                                                //block of code
                                                                //block  of code
                                                                console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                                //block of code

                                                                //block of code
                                                                //block of code
                                                                setTimeout(() => {
                                                                    //block of code
                                                                    //block  of code
                                                                    console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                                    //block of code
                                                                    setTimeout(() => {
                                                                        //block of code
                                                                        //block  of code
                                                                        console.log("Waiting for some code execution on which my code is dependent 2nd block");

                                                                        //block of code

                                                                        //block of code
                                                                        //block of code
                                                                        setTimeout(() => {
                                                                            console.log("Waiting for some code execution on which my code is dependent 3rd block block");
                                                                            //blockof code 
                                                                            //blockof code 
                                                                            //blockof code 
                                                                            //blockof code 
                                                                            setTimeout(() => {
                                                                                //block of code
                                                                                //block  of code
                                                                                console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                                                //block of code

                                                                                //block of code
                                                                                //block of code
                                                                                setTimeout(() => {
                                                                                    //block of code
                                                                                    //block  of code
                                                                                    console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                                                    //block of code

                                                                                    //block of code
                                                                                    //block of code
                                                                                    setTimeout(() => {
                                                                                        //block of code
                                                                                        //block  of code
                                                                                        console.log("Waiting for some code execution on which my code is dependent 4th  block block");
                                                                                        //block of code

                                                                                        //block of code
                                                                                        //block of code

                                                                                    }, 1000)
                                                                                }, 1000)
                                                                            }, 1000)

                                                                        }, 2000);

                                                                    }, 1000)
                                                                    //block of code
                                                                    //block of code

                                                                }, 1000)
                                                            }, 1000)
                                                        }, 1000)

                                                    }, 2000);

                                                }, 1000)
                                                //block of code
                                                //block of code

                                            }, 1000)
                                        }, 1000)
                                    }, 1000)

                                }, 2000);

                            }, 1000)
                            //block of code
                            //block of code

                        }, 1000)
                    }, 1000)
                }, 1000)

            }, 2000);

        }, 1000)

    }, 2000);



}

callingfromanapi();
