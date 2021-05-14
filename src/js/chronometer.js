// variable
let text = document.querySelector('h2');
let btnStart = document.querySelector('button#start');
let countMs = 0;
let countS = 0;
let countM = 0;


// Start the chronometer
function start(){
    setInterval(() => {
        if(countMs <= 99){
            countMs++
        }else if (countS < 59){
            countMs = 0;
            countS++
        }else{
            countMs = 0;
            countS = 0;
            countM++
        }
        text.innerHTML = `${countM < 10 ? '0' + countM : countM}:${countS < 10 ? '0' + countS : countS}:${countMs < 10 ? '0' + countMs : countMs}`;
    }, 10);
}

// clear the chronometer
function clearCode(){
    console.log('ERROR')
}
