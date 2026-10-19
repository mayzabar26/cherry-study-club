//Criando variáveis: Selecionando buttons do HTML
const startButton = document.querySelector("#start-mission");
const missionsCount = document.querySelector("#missions-count");
const resetButton = document.querySelector("#reset-weekly-progress");


//Variável de missões concluídas e armazenando no localStorage (valor seja mantido mesmo após o usuário fechar a página)
let completedMissionsCount = parseInt(localStorage.getItem("completedMissionsCount")) || 0; //getItem recupera o valor do localStorage
missionsCount.textContent = completedMissionsCount; //Garante que o valor seja exibido no HTML ao carregar a página

//Evento: Button "Start Mission"
startButton.addEventListener("click", function() {

    if (startButton.textContent === "Mission Completed!") {
        startButton.textContent = "Start Mission";
        startButton.style.backgroundColor = "#8B1E32";
        startButton.style.color = "white";
    
    } else {
        startButton.textContent = "Mission Completed!";
        startButton.style.backgroundColor = "pink";
        startButton.style.color = "black";
        
        completedMissionsCount++; //Incrementando a contagem de missões concluídas
        missionsCount.textContent = completedMissionsCount; //Atualizando o texto no HTML
        localStorage.setItem("completedMissionsCount", completedMissionsCount); //setItem salva o valor no localStorage
    }
});

//Evento: Button "Reset Weekly Progress"
resetButton.addEventListener("click", function() {
    completedMissionsCount = 0; //Resetando a contagem de missões concluídas
    missionsCount.textContent = completedMissionsCount; //Atualizando o texto no HTML
    localStorage.setItem("completedMissionsCount", completedMissionsCount); //Atualizando o valor no localStorage
});
