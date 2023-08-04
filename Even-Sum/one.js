const limit = prompt('Enter a number for finding even numbers sum( 1 to n ) ');
let sum = 0 ;

for (i = 1 ; i <= limit ; i++){
    if(i%2==0){
        sum += i;
    }
}

const nn = document.createElement('h1');
nn.innerHTML = `The sum of even numbers from 1 to ${limit} is : ${sum}`;
nn.style.color = 'white';
nn.style.textAlign = 'center'; 
nn.style.position = 'fixed'; 
nn.style.top = '50%'; 
nn.style.left = '50%'; 
nn.style.transform = 'translate(-50%, -50%)';
document.body.style.backgroundImage = "linear-gradient(to right, #179296, #17967d)";
document.body.appendChild(nn);


