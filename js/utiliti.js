// const alphabetArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function homeScreenElementFild(elementId, id){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}

function showPlaygroundelementFild(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]')
}

function removeBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}
function setTextElementValuById(elementId){
    const element=document.getElementById(elementId);
    const elementTextByInfo =element.innerText;
    const elementTextBy =parseInt(elementTextByInfo);
    return elementTextBy;
}
function addTextElementByid(elementId, value){
    const element =document.getElementById(elementId);
    element.innerText =value;
}

function getElementByTextId(elementId){
    const element =document.getElementById(elementId);
    const text =element.innerText;
    return text;
}

function getToAlphabetIndex(){
    const alphabetArray=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // console.log(alphabetArray);
  
    const alphaIndex =Math.random()*25;
    const indexAlpha = Math.round(alphaIndex);
    
    const alphaInfoPro =alphabetArray[indexAlpha];
    // console.log(alphaInfoPro);

    return alphaInfoPro;
}