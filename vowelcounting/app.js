let input = document.querySelector("input");
let countEl = document.querySelector(".count");

input.addEventListener('keyup', () => {
    let word = input.value.toLowerCase();
    let vowelCount = 0;
    for(let i=0; i<word.length; i++) {
        let letter = word[i];
        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++
        }
    }
    countEl.innerHTML = `${vowelCount}`
})