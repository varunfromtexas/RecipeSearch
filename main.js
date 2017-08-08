//url: http://recipepuppyproxy.herokuapp.com/api/?i=

let inputNode = document.querySelector("input").addEventListener("keydown", function(event){
  if (event.keyCode === 13){
    console.log(event.target.value)
  }

})

fetch("http:recipepuppyproxy.herokuapp.com/api/?i=").then(function(response){
  console.log(response);
})

function rpData (){
  let data = JSON.parse(this.responseText)
  for (i=0; i<data.length; i++){

  }
}
