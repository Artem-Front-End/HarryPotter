// fetch
const list = document.querySelector('.charactersList');
async function askServer(){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters');
    let content = await response.json();
    content = [...content];
    const characters = content.filter(character => character.image);

    console.log(characters)
    for(let key in characters){
        list.innerHTML += `
       <li class="characterBlock" >
         <h1>${characters[key].name}</h1>
         <img src="${characters[key].image}" />
         <p>Species: <span>${characters[key].species}</span></p>
         <p>Gender: <span>${characters[key].gender}</span></p>
         <p>Date of Birth: <span>${characters[key].dateOfBirth}</span></p>
         <p>Hair Colour: <span>${characters[key].hairColour}</span></p>
      </li>
    `
    }
}

askServer()