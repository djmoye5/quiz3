var container = document.querySelector(".container");
var author = document.querySelector(".author");
var selection = document.querySelector("#selection")


  function getRandom(random){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      for (var i = 0; i < data.length; i++) {
          container.innerHTML += `
          <a href="quote.html?id=${data[i].text}">
          <div class="container">
          <p>${data[i].text}
          <ul>
          <option value =${data[i].author}></option
          <option value =${data[i].author}></option
          <option value =${data[i].author}></option
          </ul>
          </div>
        `
      }
    })
}

    selection.addEventListener("click", function(){
        if(option.value == "${data[i].author}"){
            alert("Correct");
        } else{
            alert("Wrong Answer");
        }
        }
    )




getRandom()

