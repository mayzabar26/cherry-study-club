//Criando variável e selecionando o botão pelo ID
const startButton = document.querySelector("#start-mission");
console.log(startButton);

startButton.addEventListener("click", function() {
    startButton.textContent = "Mission Completed!";
});
