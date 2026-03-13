/*async function getPersonagem() {

    const idAleatorio = Math.floor(Math.random()*80) +1;
    let response = await fetch(`https://swapi.dev/api/people/${idAleatorio}/`)
    let data = await response.json()
    console.log(data)



    document.getElementById("resultado").innerText = data.name
    console.log("O personagem sorteado foi: " + data.name)
    document.getElementById("resultado").innerText = data.gender
    console.log("O personagem sorteado foi: " + data.gender)
;
}  */


/*
async function getPersonagem() {
  // Gera um ID aleatório entre 1 e 80
  const idAleatorio = Math.floor(Math.random() * 80) + 1;
  
  try {
    const response = await fetch(`https://swapi.dev/api/people/${idAleatorio}/`);
    const data = await response.json();
    
    // Exibe o nome no console ou em algum elemento HTML
    console.log("O personagem sorteado foi: " + data.name);
    document.getElementById("resultado").innerText = data.name;
    
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}      */




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