var form= document.querySelector("#forms");

form.addEventListener('submit' ,function(e){
      e.preventDefault();
     var search=document.querySelector(".search").value;
     
      var userName=search.split(' ').join('');
      document.getElementById("searchresults").innerHTML="";
     fetch("https://api.github.com/users/"+userName)
     .then((result) => result.json())
     .then((data) => {
       console.log(data);
       document.getElementById("searchresults").innerHTML=
       `<h2>${data.name}</h2>
      <a href="https://www.github.com/${userName}" target="_blank"> <img src="${data.avatar_url}"/></a>`;

     })
    
})