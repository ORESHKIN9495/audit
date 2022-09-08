document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  let check = document.getElementById("check");
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      form.reset();
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_mail")) {
        if (emailValid(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains("_tel")) {
        if (numValid(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "radio" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.classList.remove("_error");
  }

  function emailValid(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  function numValid(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
      input.value
    );
  }
});
