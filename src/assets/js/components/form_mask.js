document.addEventListener("DOMContentLoaded", () => {
  let telInput = document.getElementById("tel");

  let getInputValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  let onTelInput = (e) => {
    let input = e.target,
      inputValue = getInputValue(input),
      formattedInputValue = "",
      selectionStart = input.selectionStart;
    if (!inputValue) {
      return (input.value = "");
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
      if (inputValue[0] == "9") inputValue = "7" + inputValue;
      let firstSimbols = inputValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSimbols + " ";

      if (inputValue.length > 1) {
        formattedInputValue += "(" + inputValue.substring(1, 4);
      }

      if (inputValue.length >= 5) {
        formattedInputValue += ") " + inputValue.substring(4, 7);
      }

      if (inputValue.length >= 8) {
        formattedInputValue += " " + inputValue.substring(7, 9);
      }

      if (inputValue.length >= 10) {
        formattedInputValue += " " + inputValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };

  telInput.addEventListener("input", onTelInput);
  telInput.addEventListener("keydown", (e) => {
    if (e.keyCode == 8 && getInputValue(e.target).length == 1) {
      e.target.value = "";
    }
  });
});
