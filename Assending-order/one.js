const limit = prompt("Enter Array Limit");
const arr = [];

for (let i = 0 ; i < limit ; i++) {
    let vl = parseInt(prompt(`enter ${i+1} value: `));
    arr.push(vl);
}
// for (let i = 0; i< limit ; i++){
//     for (let j = i ; j< limit; j++){
//         if (arr[j] < arr[i]){
//             let temp = arr [i];
//             arr [i] = arr[j];
//             arr [j] = temp;
//         }
//     }
// }
arr.sort((a, b) => a - b);

const nn = document.createElement('h1');
nn.innerHTML = `The Assebded Arry is ${arr}`;
nn.style.color = 'white';
nn.style.textAlign = 'center'; 
nn.style.position = 'fixed'; 
nn.style.top = '50%'; 
nn.style.left = '50%'; 
nn.style.transform = 'translate(-50%, -50%)';
document.body.style.backgroundImage = "linear-gradient(to right, #179296, #17967d)";
document.body.appendChild(nn);
