document.querySelector(".d-flex").addEventListener("submit", function(e){
    e.preventDefault();
    let search = document.querySelector('input').value;
    console.log(search);
    if(search == "duck"){
        location.href = "duck.html"
    }
});
