async function getPersonagem() {
    const idAleatorio = Math.floor(Math.random() * 80) + 1;
    let response = await fetch(`https://swapi.dev/api/people/${idAleatorio}/`);
    let data = await response.json();
    
    console.log(data);

    // Atualiza o nome no lugar certo
    document.getElementById("nome-personagem").innerText = data.name;
    
    // Atualiza o gênero no lugar certo
    document.getElementById("genero-personagem").innerText = data.gender;

    console.log("O personagem sorteado foi: " + data.name);
}