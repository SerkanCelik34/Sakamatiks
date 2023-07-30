
const jokes = document.querySelectorAll(".joke")

jokes.forEach(joke => {
    joke.addEventListener("click", function() {joke.classList.toggle("active")})
    
});