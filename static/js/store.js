// Section 2 symplos and changing images----------------------------

// first div---
let basket1 = document.getElementById("basket-1");
let basketSpan = document.getElementById("basket-span");

basket1.addEventListener("mouseenter" , () => {
    basketSpan.style.opacity = "1";
    basket1.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket1.addEventListener("mouseout" , () => {
    basketSpan.style.opacity = "0";
});

let eye1 = document.getElementById("eye1");
let eyeSpan = document.getElementById("eye-span");
eye1.addEventListener("mouseenter" , () => {
    eyeSpan.style.opacity = "1";
    eye1.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye1.addEventListener("mouseout" , () => {
    eyeSpan.style.opacity = "0";
});


let changeimg1 = document.getElementById("changeimg1");
let img1 = document.getElementById("img1");
let transtionImg1 = document.getElementById("transtionImg1");

changeimg1.onmouseover = () => {
    img1.style.opacity = "0";
    transtionImg1.style.opacity = "1";
    basket1.style.opacity = "0.5";
    eye1.style.opacity = "0.5";
}
changeimg1.onmouseout = () => {
    img1.style.opacity = "1";
    transtionImg1.style.opacity = "0";
    basket1.style.opacity = "0";
    eye1.style.opacity = "0";
}





// second div---
let basket2 = document.getElementById("basket-2");
let basketSpan2 = document.getElementById("basket-span-2");

basket2.addEventListener("mouseenter" , () => {
    basketSpan2.style.opacity = "1";
    basket2.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket2.addEventListener("mouseout" , () => {
    basketSpan2.style.opacity = "0";
});

let eye2 = document.getElementById("eye2");
let eyeSpan2 = document.getElementById("eye-span-2");
eye2.addEventListener("mouseenter" , () => {
    eyeSpan2.style.opacity = "1";
    eye2.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye2.addEventListener("mouseout" , () => {
    eyeSpan2.style.opacity = "0";
});


let changeimg2 = document.getElementById("changeimg2");
let img2 = document.getElementById("img2");
let transtionImg2 = document.getElementById("transtionImg2");

changeimg2.onmouseover = () => {
    img2.style.opacity = "0";
    transtionImg2.style.opacity = "1"
    basket2.style.opacity = "0.5";
    eye2.style.opacity = "0.5";
}
changeimg2.onmouseout = () => {
    img2.style.opacity = "1";
    transtionImg2.style.opacity = "0";
    basket2.style.opacity = "0";
    eye2.style.opacity = "0";
}





// third div---
let basket3 = document.getElementById("basket-3");
let basketSpan3 = document.getElementById("basket-span-3");

basket3.addEventListener("mouseenter" , () => {
    basketSpan3.style.opacity = "1";
    basket3.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket3.addEventListener("mouseout" , () => {
    basketSpan3.style.opacity = "0";
});

let eye3 = document.getElementById("eye3");
let eyeSpan3 = document.getElementById("eye-span-3");
eye3.addEventListener("mouseenter" , () => {
    eyeSpan3.style.opacity = "1";
    eye3.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye3.addEventListener("mouseout" , () => {
    eyeSpan3.style.opacity = "0";
});


let changeimg3 = document.getElementById("changeimg3");
let img3 = document.getElementById("img3");
let transtionImg3 = document.getElementById("transtionImg3");

changeimg3.onmouseover = () => {
    img3.style.opacity = "0";
    transtionImg3.style.opacity = "1";
    basket3.style.opacity = "0.5";
    eye3.style.opacity = "0.5";
}
changeimg3.onmouseout = () => {
    img3.style.opacity = "1";
    transtionImg3.style.opacity = "0";
    basket3.style.opacity = "0";
    eye3.style.opacity = "0";
}



// fourth div---
let basket4 = document.getElementById("basket-4");
let basketSpan4 = document.getElementById("basket-span-4");

basket4.addEventListener("mouseenter" , () => {
    basketSpan4.style.opacity = "1";
    basket4.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket4.addEventListener("mouseout" , () => {
    basketSpan4.style.opacity = "0";
});

let eye4 = document.getElementById("eye4");
let eyeSpan4 = document.getElementById("eye-span-4");

eye4.addEventListener("mouseenter" , () => {
    eyeSpan4.style.opacity = "1";
    eye4.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye4.addEventListener("mouseout" , () => {
    eyeSpan4.style.opacity = "0";
});


let changeimg4 = document.getElementById("changeimg4");
let img4 = document.getElementById("img4");
let transtionImg4 = document.getElementById("transtionImg4");

changeimg4.onmouseover = () => {
    img4.style.opacity = "0";
    transtionImg4.style.opacity = "1";
    basket4.style.opacity = "0.5";
    eye4.style.opacity = "0.5";
}
changeimg4.onmouseout = () => {
    img4.style.opacity = "1";
    transtionImg4.style.opacity = "0";
    basket4.style.opacity = "0";
    eye4.style.opacity = "0";
}







// Section 6 symplos and changing images----------------------------

// first div-----------------------------
let basket5 = document.getElementById("basket-5");
let basketSpan5 = document.getElementById("basket-span-5");
let transtionImg5 = document.getElementById("transtionImg5");

basket5.addEventListener("mouseenter" , () => {
    basketSpan5.style.opacity = "1";
    basket5.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket5.addEventListener("mouseout" , () => {
    basketSpan5.style.opacity = "0";
});

let eye5 = document.getElementById("eye5");
let eyeSpan5 = document.getElementById("eye-span-5");
eye5.addEventListener("mouseenter" , () => {
    eyeSpan5.style.opacity = "1";
    eye5.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye5.addEventListener("mouseout" , () => {
    eyeSpan5.style.opacity = "0";
});


let changeimg5 = document.getElementById("changeimg5");
let img5 = document.getElementById("img5");

changeimg5.onmouseover = () => {
    img5.style.opacity = "0";
    transtionImg5.style.opacity = "1";
    basket5.style.opacity = "0.5";
    eye5.style.opacity = "0.5";
    changeimg5.style.transform = "scale(1.1)";
}
changeimg5.onmouseout = () => {
    img5.style.opacity = "1";
    transtionImg5.style.opacity = "0";
    basket5.style.opacity = "0";
    eye5.style.opacity = "0";
    changeimg5.style.transform = "scale(1)";
}



// second div-------------------------
let basket6 = document.getElementById("basket-6");
let basketSpan6 = document.getElementById("basket-span-6");
let transtionImg6 = document.getElementById("transtionImg6");

basket6.addEventListener("mouseenter" , () => {
    basketSpan6.style.opacity = "1";
    basket6.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket6.addEventListener("mouseout" , () => {
    basketSpan6.style.opacity = "0";
});

let eye6 = document.getElementById("eye6");
let eyeSpan6 = document.getElementById("eye-span-6");
eye6.addEventListener("mouseenter" , () => {
    eyeSpan6.style.opacity = "1";
    eye6.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye6.addEventListener("mouseout" , () => {
    eyeSpan6.style.opacity = "0";
});


let changeimg6 = document.getElementById("changeimg6");
let img6 = document.getElementById("img6");

changeimg6.onmouseover = () => {
    img6.style.opacity = "0";
    transtionImg6.style.opacity = "1";
    basket6.style.opacity = "0.5";
    eye6.style.opacity = "0.5";
    changeimg6.style.transform = "scale(1.1)";
}
changeimg6.onmouseout = () => {
    img6.style.opacity = "1";
    transtionImg6.style.opacity = "0";
    basket6.style.opacity = "0";
    eye6.style.opacity = "0";
    changeimg6.style.transform = "scale(1)";
}



// third div---
let basket7 = document.getElementById("basket-7");
let basketSpan7 = document.getElementById("basket-span-7");
let transtionImg7 = document.getElementById("transtionImg7");

basket7.addEventListener("mouseenter" , () => {
    basketSpan7.style.opacity = "1";
    basket7.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket7.addEventListener("mouseout" , () => {
    basketSpan7.style.opacity = "0";
});

let eye7 = document.getElementById("eye7");
let eyeSpan7 = document.getElementById("eye-span-7");
eye7.addEventListener("mouseenter" , () => {
    eyeSpan7.style.opacity = "1";
    eye7.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye7.addEventListener("mouseout" , () => {
    eyeSpan7.style.opacity = "0";
});


let changeimg7 = document.getElementById("changeimg7");
let img7 = document.getElementById("img7");

changeimg7.onmouseover = () => {
    img7.style.opacity = "0";
    transtionImg7.style.opacity = "1";
    basket7.style.opacity = "0.5";
    eye7.style.opacity = "0.5";
    changeimg7.style.transform = "scale(1.1)";
}
changeimg7.onmouseout = () => {
    img7.style.opacity = "1";
    transtionImg7.style.opacity = "0";
    basket7.style.opacity = "0";
    eye7.style.opacity = "0";
    changeimg7.style.transform = "scale(1)";
}



// fourth div---
let basket8 = document.getElementById("basket-8");
let basketSpan8 = document.getElementById("basket-span-8");
let transtionImg8 = document.getElementById("transtionImg8");

basket8.addEventListener("mouseenter" , () => {
    basketSpan8.style.opacity = "1";
    basket8.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
basket8.addEventListener("mouseout" , () => {
    basketSpan8.style.opacity = "0";
});

let eye8 = document.getElementById("eye8");
let eyeSpan8 = document.getElementById("eye-span-8");
eye8.addEventListener("mouseenter" , () => {
    eyeSpan8.style.opacity = "1";
    eye8.style.cssText = `
    cursor: pointer;
    opacity : 1;
    `;
});
eye8.addEventListener("mouseout" , () => {
    eyeSpan8.style.opacity = "0";
});


let changeimg8 = document.getElementById("changeimg8");
let img8 = document.getElementById("img8");

changeimg8.onmouseover = () => {
    img8.style.opacity = "0";
    transtionImg8.style.opacity = "1";
    basket8.style.opacity = "0.5";
    eye8.style.opacity = "0.5";
    changeimg8.style.transform = "scale(1.1)";
}
changeimg8.onmouseout = () => {
    img8.style.opacity = "1";
    transtionImg8.style.opacity = "0";
    basket8.style.opacity = "0";
    eye8.style.opacity = "0";
    changeimg8.style.transform = "scale(1)";
}











//colors boxes inside custom div----------------------------------------------------------------
let colorsBox = document.querySelector(".colorsBox");

function boxOfColors(colorsArray) {

    // create boxes and their content --------------------------------------
    let boxsConatiner = document.createElement("div");
    boxsConatiner.classList.add("colorsBox-1");
    colorsBox.appendChild(boxsConatiner);

    let box1 = document.createElement("div");
    box1.classList.add("b-Color");
    box1.style.backgroundColor = colorsArray.color1;
    boxsConatiner.appendChild(box1);

    let box2 = document.createElement("div");
    box2.classList.add("b-Color");
    box2.style.backgroundColor = colorsArray.color2;
    boxsConatiner.appendChild(box2);

    let box3 = document.createElement("div");
    box3.classList.add("b-Color");
    box3.style.backgroundColor = colorsArray.color3;
    boxsConatiner.appendChild(box3);

    let box4 = document.createElement("div");
    box4.classList.add("b-Color");
    box4.style.backgroundColor = colorsArray.color4;
    boxsConatiner.appendChild(box4);

    let box5 = document.createElement("div");
    box5.classList.add("b-Color");
    box5.style.backgroundColor = colorsArray.color5;
    boxsConatiner.appendChild(box5);
}



let boxColors1 = {
    color1 : "rgb(142, 67, 240)",
    color2 : "rgb(99, 0, 226)",
    color3 : "rgb(21, 14, 31)",
    color4 : "rgb(88, 77, 102)",
    color5 : "rgb(243, 241, 246)"
}

let boxColors2 = {
    color1 : "rgb(239, 77, 72)",
    color2 : "rgb(217, 7, 0)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors3 = {
    color1 : "rgb(255, 66, 179)",
    color2 : "rgb(255, 0, 153)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors4 = {
    color1 : "rgb(255, 106, 151)",
    color2 : "rgb(250, 3, 107)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors5 = {
    color1 : "rgb(255, 122, 61)",
    color2 : "rgb(255, 81, 0)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors6 = {
    color1 : "rgb(249, 195, 73)",
    color2 : "rgb(255, 177, 0)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors7 = {
    color1 : "rgb(48, 199, 181)",
    color2 : "rgb(0, 172, 151)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors8 = {
    color1 : "rgb(27, 174, 112)",
    color2 : "rgb(6, 117, 46)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors9 = {
    color1 : "rgb(47, 193, 255)",
    color2 : "rgb(8, 172, 242)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}

let boxColors10 = {
    color1 : "rgb(65, 117, 252)",
    color2 : "rgb(8, 74, 243)",
    color3 : "rgb(43, 22, 27)",
    color4 : "rgb(69, 62, 62)",
    color5 : "rgb(247, 243, 245)"
}


let colorsArray = 
[boxColors1 , boxColors2 , boxColors3 , boxColors4 , boxColors5 ,
boxColors6 , boxColors7 , boxColors8 , boxColors9 , boxColors10];


for (let i = 0; i < 10; i++) {
    boxOfColors(colorsArray[i]);
}


// add hover event -----
let allColorsBox1 = document.querySelectorAll(".colorsBox-1");

allColorsBox1.forEach((box) => {
    box.addEventListener("mouseover" , () => {
        box.style.backgroundColor = "#0000ff57";
        box.style.cursor = "pointer";
    });

    box.addEventListener("mouseout" , () => {
        box.style.backgroundColor = "transparent";
    });
});












// clicked boxes to change page shape (color)--------------------------------------------------

let changeText = document.querySelectorAll(".changeText");
let changeBackground = document.querySelectorAll(".changeBackground");
let changeback = document.querySelectorAll(".changeback");


for (let i = 0; i < allColorsBox1.length; i++) {

    let boxchange1 = {
        color : "#150e1f",
        background : "#150e1f",
        backgroundhover : "#6300e2",
        backcolor : "#f3f1f6"
    }
    
    let boxchange2 = {
        color : "#2b161b",
        background : "#2b161b",
        backgroundhover : "#d90700",
        backcolor : "#f7f3f5"
    }
    
    let boxchange3 = {
        color : "#ff0099",
        background : "#30101794",
        backgroundhover : "#ff42b3a1",
        backcolor : "#ffb6e2d6"
    }
    
    let boxchange4 = {
        color : "#873b4d",
        background : "#2b161b",
        backgroundhover : "#8b3d5e",
        backcolor : "#ff6a97"
    }
    
    let boxchange5 = {
        color : "#1e1810",
        background : "#575250",
        backgroundhover : "#ff5100",
        backcolor : "#ff7a3d"
    }
    
    let boxchange6 = {
        color : "#8f642c",
        background : "#a58d6e",
        backgroundhover : "#ffb100",
        backcolor : "#f9c349"
    }
    
    let boxchange7 = {
        color : "#14261c",
        background : "#5d827d",
        backgroundhover : "#00ac97",
        backcolor : "#30c7b5"
    }
    
    let boxchange8 = {
        color : "#14261c",
        background : "#5baa82",
        backgroundhover : "#06752e",
        backcolor : "#1bae70"
    }
    
    let boxchange9 = {
        color : "#1d2745",
        background : "#288a9a",
        backgroundhover : "#08acf2",
        backcolor : "#2fc1ff"
    }
    
    let boxchange10 = {
        color : "#303c60",
        background : "#485d9d",
        backgroundhover : "#084af3",
        backcolor : "#4175fc"
    }

    let boxChangeArray = [
        boxchange1 , boxchange2 , boxchange3 , boxchange4 , boxchange5,
        boxchange6 , boxchange7 , boxchange8 , boxchange9 , boxchange10
    ]

    allColorsBox1[i].addEventListener("mousedown" , () => {
        
        // change all text color:
        for (let c = 0; c < changeText.length; c++) {
            changeText[c].style.color = boxChangeArray[i].color;
        }

        // change all background color for links and some divs:
        for (let b = 0; b < changeBackground.length; b++) {
            changeBackground[b].style.backgroundColor = boxChangeArray[i].background;

            changeBackground[b].addEventListener("mouseover" , () => {
                changeBackground[b].style.backgroundColor = boxChangeArray[i].backgroundhover;
            });

            changeBackground[b].addEventListener("mouseout" , function()  {
                changeBackground[b].style.backgroundColor = boxChangeArray[i].background;
            });

            // localStorage-----------
            
        }

        // change section-1 , section-5 and footer background:
        for (let k = 0; k < changeback.length; k++) {
            changeback[k].style.backgroundColor = boxChangeArray[i].backcolor;
        }
    });
}

// default div to back the first shape of the page 
let defColorDiv = document.getElementById("defColorDiv");

defColorDiv.addEventListener("click" , () => {

    for (let i = 0; i < changeText.length; i++) {
        changeText[i].style.color = "black";
    }

    for (let d = 0; d < changeBackground.length; d++) {
        changeBackground[d].style.backgroundColor = "#000000";

        changeBackground[d].addEventListener("mouseover" , () => {
            changeBackground[d].style.backgroundColor = "#000000";
        });

        changeBackground[d].addEventListener("mouseout" , () => {
            changeBackground[d].style.backgroundColor = "#000000";
        });
    }

    for (let f = 0; f < changeback.length; f++) {
        changeback[f].style.backgroundColor = "#ffb3c560";
    }
});




// change focus on boxes Of Colors---------------------------------------------------
const allColorBoxes = document.querySelector(".allcolorboxes");
let colorsBoxDiv = document.querySelector(".colorsBox");
const focusArray = document.getElementsByClassName("focus");



// add the focus class to all colors box first:
for (let i = 0; i < colorsBoxDiv.children.length; i++) {

    colorsBoxDiv.children[i].classList.add("focus");
}

// adding focus part-----
allColorBoxes.addEventListener("mousedown" , (e) => {

    for (let i = 0; i < focusArray.length; i++) {

        focusArray[i].style.border = "1px solid rgba(128, 128, 128, 0.438)";


        if (e.target == focusArray[i]) {
            
            e.target.style.border = "1px solid blue";
            console.log("iam here")
        }
    }
});

















// fonts boxs inside custom div----------------------------------------------------------------
let fontsBox = document.getElementById("fontsBox");

function boxOFFonts(fontsArray) {
    // create Elements
    let boxf1 = document.createElement("div");
    let boxf1Elementp = document.createElement("p");

    // adding content
    boxf1Elementp.textContent = "Aa";

    // adding Elements
    boxf1.appendChild(boxf1Elementp);
    fontsBox.appendChild(boxf1);

    // adding clases
    boxf1.classList.add("boxf");

    // adding fonts 
    boxf1Elementp.style.fontFamily = fontsArray.font
}


let fontfamily1 = {
    font : "Playfair Display"
}

let fontfamily2 = {
    font : "Poppins"
}

let fontfamily3 = {
    font : "Montserrat"
}

let fontfamily4 = {
    font : "Karla"
}

let fontfamily5 = {
    font : "Roboto Condensed"
}

let fontfamily6 = {
    font : "monospace"
}

let fontfamily7 = {
    font : "fantasy"
}

let fontfamily8 = {
    font : "Franklin Gothic Medium"
}

let fontsArray = [
    fontfamily1 , fontfamily2 , fontfamily3 , fontfamily4 , fontfamily5 , 
    fontfamily6 , fontfamily7 , fontfamily8
]

for (let i = 0; i < 8; i++) {
    boxOFFonts(fontsArray[i]);
}




// clicked boxes to change page font (fonts)------------------------------------------
let defualtFontDiv = document.querySelector(".defualtFont")

defualtFontDiv.onclick = () => {

    document.body.style.fontFamily = 'Poppins, sans-serif';
}


let allBoxOfFonts = document.querySelectorAll(".boxf");

for (let i = 0; i < allBoxOfFonts.length; i++) {

    allBoxOfFonts[i].onclick = () => {
        
        document.body.style.fontFamily = fontsArray[i].font
    }
}



// local storage for custom div-----------------------------------------------------










// up button page ----------------------------------------------------------------------------
let upbtn = document.getElementById("upbtn");

window.onscroll = () => {
    if (scrollY >= 1000) {
        upbtn.style.display = "block";
    }
    else {
        upbtn.style.display = "none";
    }
}

upbtn.onclick = () => {
    scroll({
        top : 0,
        behavior : "smooth"
    })
};







// show and hide custom div -----------------------------------------------------------------
let customContainer = document.getElementById("customContainer");
let customLabel = document.getElementById("custombtn");
let custombtn = document.querySelector("#custombtn input");


custombtn.addEventListener("change" , () => {

    if (custombtn.checked) {
        customContainer.style.cssText = `
        right : 2px;
        width : 370px;
        `;
        customLabel.style.cssText = "right : 370px";

        customLabel.lastElementChild.style.display = "none";
        upbtn.style.cssText = `right : 26%`;
        upbtn.style.display = "block";
    } 
    else {
        customContainer.style.cssText = `
        right : -370px;
        width :370px;
        `;
        customLabel.style.cssText = "right : 0";
        customLabel.lastElementChild.style.display = "inline-block";
        upbtn.style.cssText = `right : 2%`;
        upbtn.style.display = "none";
    }
});



// close button custom div:
let close = document.getElementById("close");

close.onmousedown = () => {
    customContainer.style.cssText = `right : -100%;`
    customLabel.style.cssText = "right : 0";
    customLabel.lastElementChild.style.display = "inline-block";
    custombtn.checked = false;
    upbtn.style.cssText = `right : 2%`;
    upbtn.style.display = "block";
}



// when click on outside --------------------------
let container = document.getElementById("con");

container.addEventListener ("mousedown" , ()=> {

    // for custom Div---
    customContainer.style.cssText = `right : -100%;`;
    customLabel.style.cssText = "right : 0";
    customLabel.lastElementChild.style.display = "inline-block";
    custombtn.checked = false;
});









// show and hide input search--------------------------------------------------------------------
let showHideSearch = document.getElementById("show-hide-search");
let searchLabel = document.getElementById("searchLabel");
let searchIcon = document.getElementById("searchIcon");
let searchInput = document.getElementById("searchInput");


// overlay div
let overDiv  =document.getElementById("overDiv");
let overDivInput = document.querySelector("#overDiv input");
let closeOverDiv = document.getElementById("closeOverDiv");

showHideSearch.addEventListener("change" , () => {

    if (showHideSearch.checked) {
        // searchLabel.style.cssText = `
        // background-color : #e97390;
        // width : 55%;
        // `;
        // searchIcon.style.color = "white";
        // searchInput.style.cssText = `
        // width : 80%;
        // `;
        // searchInput.focus(); 

        // overlay div
        overDiv.style.cssText = `
        visibility : visible;
        opacity : 1;
        `;
        overDivInput.focus();
    } 
    
    // else {
    //     searchLabel.style.cssText = `
    //     background-color : white;
    //     width : 10%;
    //     `;
    //     searchIcon.style.color = "black";
    //     searchInput.style.cssText = `
    //     width : 0;
    //     `;
    // }
});


closeOverDiv
closeOverDiv.onclick = () => {

    overDiv.style.cssText = `
        visibility : hidden;
        opacity : 0;
        `;
}










// email subscribe---------------------------------------------------------------------------
let form = document.getElementById("form");
let emailBtn = document.getElementById("emailBtn");
let emailInput = document.getElementById("emailInput");
let hinewUser = document.getElementById("hinewUser");
let closePopUp = document.getElementById("closePopUp");
let formSpan = document.querySelector("form span");

emailInput.addEventListener("keyup" , () => {

    emailBtn.addEventListener("click" , (event) => {

        if (emailInput.value != "" && emailInput.value.includes('@') && emailInput.value.includes('.')){

            form.innerHTML = "Thanks for signing up for the newsletter! We'll be in touch soon.";
            emailBtn.style.display = "none";
            formSpan.style.cssText = `
            visibility : hidden;
            opacity : 0;
            `;

            // setTimeout(() => {
            //     hinewUser.style.cssText = `
            //     visibility: visible;
            //     opacity: 1;
            //     `;
            // }, 1000);
        }
        else {
            event.preventDefault();
            formSpan.style.cssText = `
            visibility : visible;
            opacity : 1;
            `;
        }
    });
});



// click to close the popup
// closePopUp.addEventListener("click" , () => {
//     hinewUser.style.cssText = `
//     visibility: hidden;;
//     opacity: 0;
//     `;
// });







// Media Divs-----------------------------------------------------------------------

// 1 - header div // list media list-icon-btn Div -----
let listIconBtnDiv = document.getElementById("list-icon-btn");

listIconBtnDiv.onclick = () => {
    listOverDiv.style.cssText = `right : 0;`;
}



// 2 - header div // list media Div -----
let listOverDiv = document.getElementById("list-over");
let listOverDivBtn = listOverDiv.querySelector("i"); 

listOverDivBtn.addEventListener("mousedown" , () => {
    listOverDiv.style.cssText = `right : -100%;`;
});