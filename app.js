window.onload = function(){
const search_btn = document.querySelector(".btn");
search_btn.addEventListener("click", load_php);

    //alert("Hello World");
 function load_php(){

    var userInput = document.getElementById('name').value;
     // Sanitize the user input to prevent XSS attacks
     var sanitizedInput = encodeURIComponent(userInput);

    var xhr = new XMLHttpRequest();


    xhr.onload = function(){
        if(xhr.status == 200){
            //alert(xhr.responseText);
            //console.log(displaySuperhero(response));
            //alert(response);
            document.getElementById('result').innerHTML = xhr.responseText;
            var response = xhr.responseText;
            //console.log(response);
            if (response.error) {
                document.getElementById('result').innerHTML = "<p>Superhero not found</p>";
            } else {
                 displaySuperhero(response);
            }

        }
        
       
    }
    // Construct the URL with the sanitized search query as a query parameter
    var url = 'superheroes.php?alias=' + sanitizedInput;
    console.log(url);
    xhr.open('GET', url, true);
    xhr.send(); 

 }


    function displaySuperhero(superhero) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ""; // Clear previous content

        // Create HTML elements to display the superhero information
        var aliasHeading = document.createElement('h3');
        aliasHeading.textContent = superhero.alias;

        var nameHeading = document.createElement('h4');
        nameHeading.textContent = superhero.name;

        var biographyParagraph = document.createElement('p');
        biographyParagraph.textContent = superhero.biography;

        // Append the created elements to the result div
        resultDiv.appendChild(aliasHeading);
        resultDiv.appendChild(nameHeading);
        resultDiv.appendChild(biographyParagraph);
    }
}
