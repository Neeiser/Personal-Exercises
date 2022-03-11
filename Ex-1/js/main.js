/* 
    Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output : 34223 
*/

let input = document.getElementById('input');

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const resultDisplayed = document.getElementById('display');
    resultDisplayed.innerHTML = numbReverter(input.value);
})

function numbReverter(number){
    number += '';
    return number.split('').reverse().join('');
}

