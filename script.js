function validateSyntax() {
  const input = document.getElementById("petInput").value.trim().toLowerCase();
  let result = "";

  if (input === "") {
    result = "Error: Input Field Empty";
  } else {
    const isValidFormat = checkFormat(input);
    const isValidBirthYear = checkBirthYear(input);
    const hasName = checkName(input);

    result = isValidFormat && isValidBirthYear && hasName ? "Valid Syntax" : "Invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}

function checkFormat(input) {
  return input.startsWith("pet_") && /^[a-zA-Z0-9_]+$/.test(input.slice(4));
}

function checkBirthYear(input) {
  const petBirthYear = parseInt(input.slice(4, 8), 10);
  return petBirthYear >= 1900 && petBirthYear <= 2024;
}

function checkName(input) {
  return input.slice(8).trim().length > 0;
}
