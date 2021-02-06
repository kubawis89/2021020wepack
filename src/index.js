import { sum } from "./sum";
import style from './css/index.scss';
console.log("Hello World");
console.log(sum(100,5));


let heading = document.querySelector("#demo"),
    sumValue = sum(10,5);

heading.innerHTML = `5 + 5 = ${sumValue}`;