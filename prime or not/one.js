function isPrimeNumber(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const inputNumber = prompt("Enter a number to check if it's a prime number:");
  const number = parseInt(inputNumber);
  
  const isPrime = isPrimeNumber(number);
  const nn = document.createElement('h1');
  
  if (isPrime) {
    nn.innerHTML = `${number} is a prime number`;
  } else {
    nn.innerHTML = `${number} is not a prime number`;
  }
  
  nn.style.color = 'white';
  nn.style.textAlign = 'center';
  nn.style.position = 'fixed';
  nn.style.top = '50%';
  nn.style.left = '50%';
  nn.style.transform = 'translate(-50%, -50%)';
  document.body.style.backgroundImage = "linear-gradient(to right, #179296, #17967d)";
  document.body.appendChild(nn);
  