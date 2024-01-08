
const audio = new Audio('../HW1/Q2/Quack.mp3');

class Duck {
    constructor(name, color, age, weight, img) {
      this.name = name;
      this.color = color;
      this.age = age;
      this.weight = weight;
      this.img = img;
    }
  
    show() {
        const duckInfo = document.getElementById('duckInfo');
        const infoParagraph = document.createElement('p');
        infoParagraph.textContent = 'Duck Attributes:';
        duckInfo.appendChild(infoParagraph);
    
        const attributes = ['name', 'color', 'age', 'weight', 'img'];
        attributes.forEach(attribute => {
          const value = myDuck[attribute];
          const attributesParaLine = document.createElement('p');
          if(attribute !=='img'){
            attributesParaLine.textContent = `${attribute}: ${value}` +"\n";
            infoParagraph.appendChild(attributesParaLine);
          }
          else{
            const duckImage = document.createElement('img');
            duckImage.src=value;
            infoParagraph.appendChild(duckImage);
          }
        });
    
    }
  
    quack() {
      const InfoQuack = document.getElementById('duckInfo');
      const wordQuack = 'Quack';
      const QuackParagraph = document.createElement('p');
      console.log("check")

      let quacksToMake = Math.floor((this.age * this.weight) / 2);
      console.log(quacksToMake)
      
      for (let i = 0; i < quacksToMake; i++) {
        QuackParagraph.textContent += wordQuack + " ";
      }
      InfoQuack.appendChild(QuackParagraph);

      let quacksRemain = 3;

      function playQuack() {
        return new Promise(resolve => {
          audio.currentTime = 0; 
          audio.addEventListener('ended', resolve);
          audio.play();
          quacksRemain--;
        });
      }
      async function playAllQuacks() {
        while (quacksRemain > 0) {
          await playQuack();
        }
    }
    playAllQuacks();

    }
  
  

}
  let myDuck;

  function createDuck() {
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const img = document.getElementById('img').value;

    if (name && color && !isNaN(age) && !isNaN(weight) && img) {
      myDuck = new Duck(name, color, age, weight, img);
      console.log(myDuck);
      CreateButtons();
      btnDisable(true);
      resetDuckInfo();
      return false;
    } 
    else {
      alert('Please fill in all the fields with valid values.');
      return false;
    }
  }

  function btnDisable(flag){
    let btn = document.getElementById('BtnCreate');
      btn.disabled=flag;
  }

  function CreateButtons(){
    const divButtons = document.getElementById('divButtons');
    const showButton = document.createElement('button');
    showButton.textContent="Show";
    showButton.disabled=false;
    showButton.onclick= showDuck;
    
    const quackButton = document.createElement('button');
    quackButton.textContent="Quack";
     quackButton.onclick= quackDuck;
    showButton.disabled=false;

    divButtons.appendChild(showButton);
    divButtons.appendChild(quackButton);

  }

  function resetDuckInfo() {
    const duckInfo = document.getElementById('duckInfo');
    duckInfo.innerHTML = '';
  }

  function showDuck() {
    resetDuckInfo();
     myDuck.show()
  }

  function quackDuck() {
    resetDuckInfo();
    myDuck.quack();
  }