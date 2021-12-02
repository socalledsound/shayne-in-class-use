const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const controlCircleSize = 20
let circlePositions
let randomImagePositions
let initX = canvasWidth/2, initY = canvasHeight/2
let destinationX, destinationY
let x = initX, y = initY
let distx
let disty
let trace


let carouselImages = []
let effect1Images = []
let counter = 0
let effectRunning = false
let runningEffects = []



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
        const x = canvasWidth/3 + (i * 2) * controlCircleSize
        const y = canvasHeight - canvasHeight/6
        return {
            x,y
        }
    })

    // randomImagePositions = Array.from({length: 10}, () => {
    //     const x = random(canvasWidth/4, canvasWidth - canvasWidth/4 - 100)
    //     const y = random(canvasHeight/4, canvasHeight - canvasHeight/4 - 100)
    //     return {
    //         x, y
    //     }
    // })
}

function draw(){
    background(255)
    if(!checkHover()){
        // drawRightArrow()
        // drawLeftArrow()
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
    

    //instead of this if then
    // we will create a function called imageEffect and pass in the counter value

    
        if(checkHover()){
            // image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
            // effect1()
            // effect2()
            if(!effectRunning){
                runImageEffect(counter)
                effectRunning = true
            }
           
        }else{
            image(carouselImages[counter % carouselImages.length], canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
            effectRunning = false
        }
   


    //CAROUSEL
    // depending on which item there will be a different effect
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

// const imageEffect = (counter) => {
//     // decide which effect to use
//     switch(counter){
//         case '0' : //do one thing
//         case '1' : // do another thing
//     }
// }

const runImageEffect = (counter) => {
    console.log(counter)
    // decide which effect to use
    switch(counter){
        case 0 : {
            if(!effect1Running){
                effect1.reset()
                effect1.run()
                effect1Running = true
                runningEffects.push(effect1)
            }
           
            return
        }
        case 1 : {
            effect2()
            return
        }
        default: 
            return
    }
}



const effect1 = () => {

}



// const effect1  = () => {
//     effect1Images.forEach((img, i) => {
//         image(img, randomImagePositions[i].x, randomImagePositions[i].y, 150, 150)
//         background(255)
//         image(carouselImages[counter], x, y, 100, 100)
//         distx=destinationX-x
//         disty=destinationY-y
//         x+=distx/10
//         image(carouselImages[counter], x, y, 100, 100)
//         y+=disty/10
//     })
// }



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