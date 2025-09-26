// Movie search and display functionality moved to search.js and search.html

let var1 = window.location.search;
let var2 = new URLSearchParams(var1);
let var3 = var2.get('email')
let var4 = document.getElementById('user')
var4.innerHTML = var3;
