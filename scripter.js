let touchstarty = 0
let mpage = 1
let charcode = 64

const startSwipe = (event) => {
    touchstarty = event.touches[0].clientY;
}

const endSwipe = (event) => {
    const swipeDirection = touchstarty - event.changedTouches[0].clientY
    if(Math.abs(swipeDirection) > 49) {
        if(mpage == 1) flipPage('face', '180deg')
        else if(mpage !== 15) flipPage(`${String.fromCharCode(64+mpage)}1`, `${180-(mpage*2)}deg`)
        mpage++
    } else {
        if(mpage == 15) flipPage('m1', '0deg')
        else if(mpage == 2) flipPage('face', '0deg')
        else if(mpage !== 1) flipPage(`${62+mpage}1`, `0deg`)
        mpage--
    }
}

function turnPage(e, turn) {
    const element = document.getElementById(`${e}`)
    element.style.transform = `rotateY(${turn})`
}

function flipPage(e, turn) {
    const element = document.getElementById(`${e}`)
    element.style.transform = `rotateX(${turn})`
    if(turn == '0deg' && mpage > 1) mpage--
    else { if(mpage < 15) mpage++ } 
}