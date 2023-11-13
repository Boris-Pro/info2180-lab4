window.onload = function(){
const search_btn = document.querySelector(".btn");
search_btn.addEventListener("click", load_php);

    //alert("Hello World");
 function load_php(){

    var xhr = new XMLHttpRequest();

   /* xhr.onreadystatechange = function(){
        if (xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200){
                alert(xhr.responseText)
            }
            else{
                alert("Error")
            }
        }
    }
    xhr.open('GET', 'superheroes.php', true);
    */
    xhr.onload = function(){
        if(xhr.status == 200){
            //console.log(this.response);
            alert(xhr.responseText);

        }
    }
    
    xhr.open('GET', 'superheroes.php', true);
    xhr.send(); 

 }

/*
    let search_btn = document.getElementById("searchBtn");
    var xhr;

    search_btn.addEventListener("click", function(e){
        e.preventDefault()
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    alert(xhr.responseText)
                }
                else{
                    alert("error")
                }
            }
        };
        xhr.open("GET", "superheroes.php");
        xhr.send();
    })

   */
}
