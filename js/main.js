function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
    return array;
}

function playFunc(){
    let datSign = document.getElementsByClassName('cell-img');
    for(let i=0; i<datSign.length; i++){
        datSign[i].setAttribute('src','img/block.svg');
    }
    let elementsArray = shuffle(Array.from(datSign));
    let check = Number(document.getElementById('trapsAmount').textContent.toString());
    let checkes = 0;
    switch(check){
        case 1:
            checkes = 10;
            break;
        case 3:
            checkes = 5;
            break;
        case 5:
            checkes = 4;
            break;
        case 7:
            checkes = 3;
            break;
    }
    let numberOfElementsToSelect = checkes;
    let uniqueElements = elementsArray.slice(0, numberOfElementsToSelect);
    for (let i = 0; i < uniqueElements.length; i++) {
        setTimeout(() => {
            setTimeout(() => {
                uniqueElements[i].setAttribute('src', 'img/star.svg');
            }, 800);
        }, i * 800);
    }
}
function leftamont(){
    let dt = Number(document.getElementById('trapsAmount').textContent.toString());
    dt-=2;
    if (dt<0) {
        dt=1;
    }
    document.getElementById('trapsAmount').textContent=dt.toString();
}
function rightamont(){
    let dt = Number(document.getElementById('trapsAmount').textContent.toString());
    dt+=2;
    if (dt>7) {
        dt=7;
    }
    document.getElementById('trapsAmount').textContent=dt.toString();
}
document.addEventListener("DOMContentLoaded",()=>{
    if (document.getElementById('prev_preset_btn')!=null){
        let leftbtn = document.getElementById('prev_preset_btn');
        leftbtn.addEventListener('click',leftamont);
        let rightbtn = document.getElementById('next_preset_btn');
        rightbtn.addEventListener('click',rightamont);
        let signBtn = document.getElementById('playButton');
        signBtn.addEventListener('click',playFunc);
    }
});