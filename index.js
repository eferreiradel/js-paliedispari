let result = document.querySelector("#result");

let palindromo = document.querySelector("#inputPalindromo");

console.log("sadad");

document.querySelector("#btnSubmit").addEventListener("click", () => {
  const resultContainer = document.querySelector("#result");
  const word = inputValue();
  const wordReversed = reverseString(word);

  if (word == wordReversed) {
    result.innerHTML = "Palindoma!";
    console.log("palindorma");
  } else {
    result.innerHTML = "No :(";
  }
});

function reverseString(string) {
  return string.split("").reverse().join("");
}

function inputValue() {
  let formInputValue = palindromo.value;
  return formInputValue;
}
