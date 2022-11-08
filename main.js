var gameData = {
    love: 0,
    lovePerClick: 1,
    lovePerTick: 1,
    lovePerClickCost: 10,
    buyDinnerCost: 50,
    buyFlowersCost: 200,
    buyArboretumCost: 1000
}

function earnLoveTick() {
    gameData.love += gameData.lovePerTick
    document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
    document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
}

function earnLoveClick() {
    gameData.love += gameData.lovePerClick
    document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
    document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
}

function buyLovePerClick() {
    if (gameData.love >= gameData.lovePerClickCost) {
        gameData.love -= gameData.lovePerClickCost
        gameData.lovePerClick += 1
        gameData.lovePerClickCost *= 2
        document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Kiss Power (Current Level " + gameData.lovePerClick + ") Cost: " + gameData.lovePerClickCost + " Love"
        document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
    }
}

function buyDinner() {
    if (gameData.love >= gameData.buyDinnerCost) {
        gameData.love -= gameData.buyDinnerCost
        gameData.lovePerTick += 1
        gameData.buyDinnerCost *= 12/10
        document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
        document.getElementById("earnUpgrade1").innerHTML = "Buy Dinner (Current Level " + gameData.lovePerTick + ") Cost: " + gameData.buyDinnerCost + " Love"
        document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
    }
}

function buyFlowers() {
    if (gameData.love >= gameData.buyFlowersCost) {
        gameData.love -= gameData.buyFlowersCost
        gameData.lovePerTick += 5
        gameData.buyFlowersCost *= 12/10
        document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
        document.getElementById("earnUpgrade2").innerHTML = "Buy Flowers (Current Level " + gameData.lovePerTick + ") Cost: " + gameData.buyFlowersCost + " Love"
        document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
    }
}

function buyArboretum() {
    if (gameData.love >= gameData.buyArboretumCost) {
        gameData.love -= gameData.buyArboretumCost
        gameData.lovePerTick += 20
        gameData.buyFlowersCost *= 12/10
        document.getElementById("loveEarned").innerHTML = gameData.love + " Love Earned"
        document.getElementById("earnUpgrade3").innerHTML = "Go to Arboretum (Current Level " + gameData.lovePerTick + ") Cost: " + gameData.buyArboretumCost + " Love"
        document.getElementById("lovePer").innerHTML = gameData.lovePerTick + " Love Per Second&emsp;&emsp;" + gameData.lovePerClick + " Love Per Click"
    }
}

var mainGameLoop = window.setInterval(function() {
    earnLoveTick()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("anniversarySave". JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("anniversarySave"))
if (savegame !== null) {
    gameData = savegame
}

function tab(tab) {
    document.getElementById("showAll").style.display = "none"
    document.getElementById("earnLoveMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

tab("showAll").style.display = "none"