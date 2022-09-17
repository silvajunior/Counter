const add = () =>{
    document.getElementById('num').innerText++;    
}
const remove = () =>{
    document.getElementById('num').innerText > 0 ? document.getElementById('num').innerText-- : document.getElementById('num').innerText;
}