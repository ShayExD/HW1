class Counter {
    constructor(num) {
      this.num = num;
    }
  
    initialize(num) {
      this.num = num;
    }
  
    increment() {
      this.num += 1;
    }
  
    go() {
      const outputParagraph = document.createElement('p');
      for (let i = 0; i <= this.num; i++) {
        outputParagraph.textContent += i + ' ';
        console.log(i);
      }
      document.body.appendChild(outputParagraph);

    }
  }

  let myCounter=new Counter();
  
  function startCounter() {
    const numInput = document.getElementById('numInput');
    const numValue = parseInt(numInput.value);
  
    if (!isNaN(numValue)) {
      myCounter.initialize(numValue);
      console.log(`Counter initialized with ${numValue}`);
    } else {
      console.error('Please enter a valid number.');
    }
  }

  function incrementCounter() {
  const numInput = document.getElementById('numInput');
  const numValue = parseInt(numInput.value);

    if (myCounter && !isNaN(numValue)) {
      myCounter.increment();
      numInput.value=numValue+1;
      console.log('Counter incremented.');
    } else {
      console.error('Counter not initialized. Click Start first.');
    }
  }

  function goCounter() {
    if (myCounter) {
      myCounter.go();
    } else {
      console.error('Counter not initialized. Click Start first.');
    }

  }

