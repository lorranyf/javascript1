console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Get the current date and time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // Create a dynamic clock element
  const clockElement = document.createElement('div');
  clockElement.style.fontSize = '48px';
  clockElement.style.fontWeight = 'bold';
  clockElement.style.textAlign = 'center';
  
  // Update the clock every second
  setInterval(() => {
    const currentTime = getCurrentTime();
    clockElement.innerText = currentTime;
  }, 1000);
  
  // Add the clock element to the page
  document.body.appendChild(clockElement);