
 
 async function fetchingdata() {
 let res= await fetch('./movies.json');
 let data= await res.json();
 displaycards(data);
//   console.log(data);
}
fetchingdata(); 

function displaycards(m){
    for(let i of m){
       let imgsrc=i.image;
       let moviename=i.title;
       let moviedes=i.Description;
       let image=document.createElement("img");
       image.src=imgsrc;
       let div=document.createElement('div')
       cardscontainer.appendChild(div)
       div.appendChild(image);
       let MovieTitle=document.createElement('h3');
       MovieTitle.innerHTML=moviename;
       div.appendChild(MovieTitle);
       let MovieDescription=document.createElement('p');
       MovieDescription.innerHTML=moviedes;
       div.appendChild(MovieDescription)
    }
}   
let var1=window.location.search;
let var2=new URLSearchParams(var1);
let var3=var2.get('email')
let var4=document.getElementById('user')
var4.innerHTML=var3;
