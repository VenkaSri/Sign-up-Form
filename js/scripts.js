const fields = document.querySelectorAll("input");
const lbl = document.querySelectorAll("label");
const pass = document.querySelector("#pass");
const cPass = document.querySelector("#cPass");
const subBtn = document.querySelector(".btn");
const myForm = document.querySelector("#myForm");
const errMsg = document.querySelector(".erMsg");

fields.forEach((item) => {
  lbl.forEach((i) => {
    item.addEventListener(
      "focus",
      (e) => {
        if (i.getAttribute("for") === e.target.id) {
          i.classList.add("labelName");
          e.target.placeholder = "";
        }
      },
      true
    );
  });
});

myForm.addEventListener("submit", (e) => {
  fields.forEach((item) => {
    if (isEmpty(item) === false) {
      errMsg.innerHTML = "Empty field(s)";
      item.classList.add("error");
      e.preventDefault();
    } else {
      item.classList.remove("error");
      if (password() === false) {
        errMsg.innerHTML = "Passwords don't match";
        pass.classList.add("error");
        cPass.classList.add("error");
        e.preventDefault();
      } else {
        pass.classList.remove("error");
        cPass.classList.remove("error");
      }
    }
  });
});

function isEmpty(inType) {
  if (inType.value === "" || inType.value == null) {
    return false;
  }
  return true;
}

function password() {
  if (pass.value !== cPass.value) {
    return false;
  }
  return true;
}
