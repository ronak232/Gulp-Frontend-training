function formValidation() {
  const form = document.getElementById("form");
  const zip = document.getElementById("zipCode");
  let select = document.getElementById("pediatricOptions");
  let formValidate;
  // const error = document.getElementById("error");
  // const modal = document.querySelector(".clinical_services__pediatrics");
  // const hidden_modal = document.querySelector('".clinical_services__pediatrics_hidden-modal')
  // const showModal = ""
  // const select = document.forms.select.values;
  function applyError(errorId) {
    const errorMsgId = errorId + "Error";
    const errorField = document.querySelector("#" + errorId);
    const errorMsgel = document.querySelector("#" + errorMsgId);
    errorMsgel.setAttribute("aria-hidden", "false");
    errorField.setAttribute("aria-invalid", "true");
    // const describedBy = errorMsgel.getAttribute("id");
    // errorField.setAttribute("aria-describedby", describedBy);
    errorField.parentElement.classList.add("error-contain");
    document.querySelector(".error-contain input").focus();
    formValidate = 0;
  }
  function resetErrors(errorId) {
    const errorMsgId = errorId + "Error";
    const errorField = document.querySelector("#" + errorId);
    if (errorField.parentElement.classList.contains("error-contain")) {
      const errorMsgel = document.querySelector("#" + errorMsgId);
      errorMsgel.setAttribute("aria-hidden", "true");
      errorField.setAttribute("aria-invalid", "false");
      // errorField.removeAttribute("aria-describedby");
      errorField.parentElement.classList.remove("error-contain");
      errorField.parentElement.classList.remove("is-valid");
    }
  }
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (zip.value === "" || zip.value === null) {
        applyError("zipCode");
      } else {
        resetErrors("zipCode");
      }

      if (select.value === "" || select.value == null) {
        applyError("pediatricOptions");
      }
      resetErrors("pediatricOptions");
    });

    if (formValidate == 0) {
      return false;
    } else {
      console.log("Form Submitted");
    }
  }
}
export default formValidation;
