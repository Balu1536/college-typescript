function printInputValue() {
  const inputElement = document.getElementById("username");

  // Type assertion using 'as'
  const typedInput = inputElement as HTMLInputElement;

  // Defensive check
  if (typedInput && typedInput.value !== undefined) {
    console.log("Input value:", typedInput.value);
  } else {
    console.log("Input element not found or value is undefined.");
  }
}

printInputValue();
