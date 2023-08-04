const limit = prompt("Enter Array Limit");
const arr = [];
let max = [0];

for (let i = 0 ; i < limit ; i++) {
    let vl = parseInt(prompt(`enter ${i+1} value: `));
    arr.push(vl);
}
for (let i = 0; i< limit ; i++){
    if (max < arr[i]){
        max = arr[i];
    }
}

const nn = document.createElement('h1');
nn.innerHTML = `The Max Value is ${max}`;
nn.style.color = 'white';
nn.style.textAlign = 'center'; 
nn.style.position = 'fixed'; 
nn.style.top = '50%'; 
nn.style.left = '50%'; 
nn.style.transform = 'translate(-50%, -50%)';
document.body.style.backgroundImage = "linear-gradient(to right, #179296, #17967d)";
document.body.appendChild(nn);
