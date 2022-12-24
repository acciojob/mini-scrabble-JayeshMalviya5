let input = document.getElementsByTagName('input')[0];
console.log(input);
let count = 0;
input.addEventListener('keyup',realtime);
function realtime(){
   let str = input.value;
   document.getElementById('letterCount').innerText = str.length;
}
