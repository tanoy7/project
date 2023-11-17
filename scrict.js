let key="48dd2a179860423ea5d0fd96da471f54";

let cardData=document.querySelector("#cardData");
let searchbtn=document.querySelector("#search-button");
let searchbar=document.querySelector("#search-bar");
let searchResult=document.querySelector("#type");
let navcontent=document.querySelector("#nav-content");
// let poli=document.querySelector("#politics")


const getData=async(input)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);

    let jsonData= await res.json();
    
    console.log(jsonData.articles[0]);

    searchResult.innerText="Search : "+input;
    

    jsonData.articles.forEach(function(article){
        console.log(article);


        let divs=document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
    
        divs.innerHTML=` <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>`

        

        divs.addEventListener("click", function(){
            window.open(article.url)
        })
    
    
        
    })
   
  

}
window.addEventListener("load",function(){
    getData("india");
})


searchbtn.addEventListener("click", function(){
    let inputtext=searchbar.value;


    getData(inputtext);
    cardData.innerHTML="";
})


// navcontent.addEventListener("mouseenter",function(dets){
//     navcontent.style.backgroundColor="red";
// console.log(gets);
// });
   
    



