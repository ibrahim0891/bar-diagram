var title = 'make bars appear in random color and size(height)'
var getRandomNumber = (min,max) => {
    return Math.floor(Math.random()* (max-min)+min)
}
var colorList = ['red','blue','indigo','mediumseagreen','teal','green','black','orange','lemon','indigo',"tomato",'','#4caf50']
var changeBarHeight = () => {
    var bars = document.querySelectorAll('.bars')
    bars.forEach((value) => {
        value.style.height = Math.floor(Math.random() * 100) + '%'
        value.innerText = value.style.height
        value.style.background = colorList[getRandomNumber(0,colorList.length-1)]
    })
}