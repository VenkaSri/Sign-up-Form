const fields = document.querySelectorAll("input");
const lbl = document.querySelectorAll("label");
const pass = document.querySelector("#pass");
const cPass = document.querySelector("#cPass");
const subBtn = document.querySelector(".btn");
const myForm = document.querySelector('#myForm');

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

subBtn.addEventListener('click', () => {
  // if(cPass.value !== pass.value) {
  //   cPass.classList.add('error');
  //   pass.classList.add('error');
  // } else {

  // }
  document.theForm.submit();
  alert('hello');
})



function myFunction() {
  
}