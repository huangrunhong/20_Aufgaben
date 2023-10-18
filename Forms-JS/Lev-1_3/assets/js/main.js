

function alterDifferenz() {
    const alter1=document.body.querySelector('#alter1');
    console.log(alter1);
    const alter2=document.body.querySelector('#alter2');
    const result = document.body.querySelector("p");

    result.textContent= alter1.value - alter2.value;
}