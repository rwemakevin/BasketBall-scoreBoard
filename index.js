let homeCountParagraph = document.getElementById("homeCountParagraph");
let guestCountParagraph = document.getElementById("guestCountParagraph");
let homeCount = 0;
let guestCount = 0;

//HOME
function count1Home(){
    let homePoints = 1;
    homeCount += homePoints;
    homeCountParagraph.textContent = homeCount;
    
}

function count2Home(){
    homePoints = 2;
    homeCount += homePoints;
    homeCountParagraph.textContent = homeCount;
}

function count3Home(){
    homePoints = 3;
    homeCount += homePoints;
    homeCountParagraph.textContent = homeCount;
}

function resetHome(){
    homeCount = 0;
    homeCountParagraph.textContent = homeCount;
}


//GUEST (Away)
function count1Guest(){
    let guestPoints = 1;
    guestCount += guestPoints;
    guestCountParagraph.textContent = guestCount;
}

function count2Guest(){
    guestPoints = 2;
    guestCount += guestPoints;
    guestCountParagraph.textContent = guestCount;
}

function count3Guest(){
    guestPoints = 3;
    guestCount += guestPoints;
    guestCountParagraph.textContent = guestCount;
}

function resetGuest(){
    guestCount = 0;
    guestCountParagraph.textContent = guestCount;
}














