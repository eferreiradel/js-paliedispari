let btnPalindromo = document.querySelector("#btnSubmit");
btnPalindromo.addEventListener("click", inputValue);

let palindromo = document.querySelector("#inputPalindromo");

function inputValue() {
  let formInputValue = palindromo.value;
  console.log(formInputValue);
}
