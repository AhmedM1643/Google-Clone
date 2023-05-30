let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault()
    let sentence = searchInput.value.split(" ")
    let joining = sentence.join("+")
    console.log(joining)
    location.assign(`https://www.google.com/search?q=${joining}`);
    console.log(location.href)
})