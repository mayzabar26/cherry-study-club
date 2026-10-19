//Criando variáveis
//Selecionando buttons do HTML
const startButton = document.querySelector("#start-mission");
const missionsCount = document.querySelector("#missions-count");

//Variável de contagem de missões concluídas
let completedMissionsCount = 0;

//Evento de clique no botão "Start Mission"
startButton.addEventListener("click", function() {

    if (startButton.textContent === "Mission Completed!") {
        startButton.textContent = "Start Mission";
        startButton.style.backgroundColor = "#8B1E32";
        startButton.style.color = "white";
    
    } else {
        startButton.textContent = "Mission Completed!";
        startButton.style.backgroundColor = "pink";
        startButton.style.color = "black";
        
        //Incrementando a contagem de missões concluídas e atualizando o texto no HTML
        completedMissionsCount++;
        missionsCount.textContent = completedMissionsCount;

        //Se o botão já disser Mission Completed! O JavaScript volta o texto para Start Mission e restaura as cores originais.
        //Caso contrário (else) O JavaScript muda o texto para Mission Completed! e aplica as cores de conclusão.
    }
});

