const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataNumber = "0123456789";
const dataSymbole = "$^*-+/?!";
const rangeValue = document.querySelector("#password-length");
const passewordOutput = document.querySelector("#password-output");

const generatPassword = () => {
  let data = [];
  let passeword = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUpercase);
  if (numbers.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbole);

  if (data.length === 0) {
    alert("attention aucun boutton selectionner");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    passeword += data[Math.floor(Math.random() * data.length)];
  }

  passewordOutput.value = passeword;

  passewordOutput.select();
  document.execCommand("copy");
};

generateButton.addEventListener("click", generatPassword);
