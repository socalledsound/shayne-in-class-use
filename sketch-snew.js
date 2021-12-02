const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let carouselImages = []
let effect1Images = []
let counter = 0
let effect1Running = false

//const rightArrowHeight = 100, rightArrowWidth = 100
//const rightArrowPosition = {
//    x: canvasWidth - canvasWidth/4,
//    y: canvasHeight/2 - 50,
//}

// const leftArrowHeight = 100, leftArrowWidth = 100
// const leftArrowPosition = {
//     x: canvasWidth/2 - canvasWidth/4 - 95,
//     y: canvasHeight/2 - 50,
// }

const controlCircleSize = 40
let circlePositions
let randomImagePositions
let initX = canvasWidth/2, initY = canvasHeight/2
let destinationX, destinationY
let x = initX, y = initY
let distx
let disty
let trace
let hovering = false
function preload(){
    

    for(let i = 1; i < 11; i++){
        console.log(`${i}.0.png`) 
        carouselImages.push(loadImage(`assets/img/${i}.0.png`))
    }

    for(let i = 0; i < 10; i++){
        effect1Images.push(loadImage(`assets/1/1.${i}.jpg`))
    }
}

function setup (){
    createCanvas(canvasWidth, canvasHeight)
    destinationX = random(0, canvasWidth - 10), destinationY = random(0, canvasHeight - 10)
    circlePositions = Array.from({length: carouselImages.length}, (el, i) => {
        const x = canvasWidth/3 + (i * 1.25) * controlCircleSize
        const y = canvasHeight - canvasHeight/6
        return {
            x,y
        }
    })

    imageStartPositions = Array.from({length: 100}, () => {
        const x = random(canvasWidth/3, canvasWidth/4 + canvasWidth/4)
        const y = random(canvasHeight/4, canvasHeight/4 + canvasHeight/4)
        return {
            x, y
        }
    })

    imageCurrentPositions = Array.from({length: 100}, () => {
        const x = random(canvasWidth/3, canvasWidth/4 + canvasWidth/4)
        const y = random(canvasHeight/4, canvasHeight/4 + canvasHeight/4)
        return {
            x, y
        }
    })

    imageDestinationPositions = Array.from({length: 100}, () => {
        const x = random(canvasWidth/3, canvasWidth/4 + canvasWidth/4)
        const y = random(canvasHeight/4, canvasHeight/4 + canvasHeight/4)
        return {
            x, y
        }
    })
}

function draw(){
    background(255)
    hovering = checkHover()
    if(hovering){
        runImageEffect(counter)
    }else{

        drawControlCircles()
        image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
        
    }
    






}






function mousePressed(){
    checkCircles(mouseX, mouseY)
    if(mouseX > rightArrowPosition.x &&
        mouseX < rightArrowPosition.x + rightArrowWidth &&
        mouseY > rightArrowPosition.y &&
        mouseY < rightArrowPosition.y + rightArrowHeight){
            counter++
        }
    checkCircles(mouseX, mouseY)
        if(mouseX > leftArrowPosition.x &&
            mouseX < leftArrowPosition.x + rightArrowWidth &&
            mouseY > leftArrowPosition.y &&
            mouseY < leftArrowPosition.y + rightArrowHeight){
                if (counter > 0){
                    counter --
                }else{
                    counter = carouselImages.length - 1
                }
            }
}

const checkCircles = (mX, mY) => {
    circlePositions.forEach((circlePosition, idx) => {
        if(mouseX > circlePosition.x - controlCircleSize/2 &&
            mouseX < circlePosition.x + controlCircleSize/2 &&
            mouseY > circlePosition.y - controlCircleSize/2 &&
            mouseY < circlePosition.y + controlCircleSize/2){
                counter = idx
            }
    })
}

const drawControlCircles = () => {
    circlePositions.forEach((position, idx) => {
        stroke(0)
        if(idx === counter % carouselImages.length){
            fill(0)
        }else{
            noFill()
        }
        
        ellipse(position.x, position.y, 30)
    })
}

// const drawRightArrow = () => {

//     fill(130)
//     //rect(rightArrowPosition.x, rightArrowPosition.y, rightArrowHeight, rightArrowWidth)
// //     fill(0)
// //     textSize(50)
// //     text('>', rightArrowPosition.x + 30, rightArrowPosition.y + 65) 
//  }

// const drawLeftArrow = () => {
//     fill(130)
//     //rect(leftArrowPosition.x, leftArrowPosition.y, leftArrowHeight, leftArrowWidth)
// //     fill(0)
// //     textSize(50)
// //     text('<', leftArrowPosition.x + 30, leftArrowPosition.y + 65)
//  }

const runImageEffect = (counter) => {
    // decide which effect to use
    switch(counter){
        case 0 : 
        //do one thing
            effect1()
           
            return
        case 1 : 
        // do another thing

            return
        default : 
            return
    
    }
}


const checkHover = () => {
    if(mouseX > canvasWidth/4 && 
        mouseX < canvasWidth/4 + canvasWidth/2 &&
        mouseY > canvasHeight/4 && 
        mouseY < canvasHeight/4 + canvasHeight/2){
            return true
        }else{
            return false
        }
}


const effect1  = () => {
    background(255)
    
    imageCurrentPositions.forEach((pos, i) => {
        const distX = 100
        const distY = 100
        const { x, y } = pos
        const newX = x + distX/100
        const newY = y + distY/100
        imageCurrentPositions[i] = {x: newX, y: newY}
        image(carouselImages[0], newX, newY, 100, 100)

    })
}



const effect2 = () => {
        trace = color(255)
        trace.setAlpha(50)
        background(trace)
        image(carouselImages[counter], x, y, 100, 100)
        distx=destinationX-x
        disty=destinationY-y
        x+=distx/10
        image(carouselImages[counter], x, y, 100, 100)
        y+=disty/10
}


    //instead of this if then
    // we will create a function called imageEffect and pass in the counter value

    // if(counter % carouselImages.length === 0){
    //     if (checkHover()&&!hovering){
    //         hovering = true
    //         image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
    //         effect1()
    //         effect2()
    //     }else if(!checkHover()){
    //         hovering = false 
    //         image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
    //     }

    // }else {
    //     image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
    // }
   


    //CAROUSEL
    // depending on which item there will be a different effect