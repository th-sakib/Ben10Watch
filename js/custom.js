const aliens = ["Ripjaws", "WildMutt", "GhostFreak", "GreyMatter", "FourArms", "StinkFly", "HeatBlast", "DiamondHead", "Upgrade", "XLR8"]
let counter = 0;
const body = document.getElementById('r3');
body.addEventListener('click', function () {
    if (counter < 10) {
        document.getElementById('alien').innerHTML = aliens[counter]
        counter++;
    }else {
        counter = 0;
    }
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
    document.getElementById('alien').innerHTML = 'Alien'
})
