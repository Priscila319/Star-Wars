
async function getPersonagem() {

    const idAleatorio = Math.floor(Math.random() * 80) + 1;
    let response = await fetch(`https://swapi.dev/api/people/${idAleatorio}/`);
    let data = await response.json();
    
    console.log(data);


    document.getElementById("nome-personagem").innerText = data.name;
    
    document.getElementById("genero-personagem").innerText = data.gender;

    document.getElementById("cor-olhos").innerText = data.skin_color;

    console.log("O personagem sorteado foi: " + data.name);
}