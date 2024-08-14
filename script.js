let newparagraph = document.getElementById("p-button");
let newimage = document.getElementById("img-button");
let image = document.getElementById("img-div");
let paragraph = document.getElementById("p-div");

let counter = 0;

function addNewImage () {
    image.style.display = 'block';
    paragraph.style.display = 'none';
    let newImg = document.createElement('img');
    newImg.src =  'photo.png';
    image.appendChild(newImg);
    displayimage ='show';
}

function addNewParagraph (){
    paragraph.style.display = 'block';
    image.style.display = 'none';
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML= 'newParagraph';
    paragraph.appendChild(newParagraph);
}

newimage.onclick = addNewImage;   
newparagraph.onclick = addNewParagraph;