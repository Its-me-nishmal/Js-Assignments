const limit = prompt("Enter Reverse Text");
arr = limit.split('');
arr.reverse();
let rev = arr.join('');


// let rev = '';
// let arr = [];

// for (let i = limit.length -1; i >= 0; i--) {
//     rev += limit[i];
// }


const nn = document.createElement('h1');
nn.innerHTML = `The Reversed Text is ${rev}`;
nn.style.color = 'white';
nn.style.textAlign = 'center'; 
nn.style.position = 'fixed'; 
nn.style.top = '50%'; 
nn.style.left = '50%'; 
nn.style.transform = 'translate(-50%, -50%)';
document.body.style.backgroundImage = "linear-gradient(to right, #179296, #17967d)";
document.body.appendChild(nn);
