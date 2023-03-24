let menuBtn = document.querySelector(".menu-btn");
let Burger = document.querySelector(".Burger");
const body = document.body;
const shadow = document.querySelector(".shadow-off");
const btnOn = document.querySelector(".menu-btn");
const BtnForForm = document.querySelector(".button_application");
const Form = document.querySelector(".Form-off");
const MissClickCloseForm = document.querySelector(".shadow-on_for_Form");
const ignore = document.querySelector(".button_application");
const inputPhone = document.querySelector(".Phone");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  Burger.classList.toggle("Burger-active");
});
//Bar-menu
let list_active = document.querySelector(".menu").querySelectorAll("a");

list_active.forEach((element) => {
  element.addEventListener("click", function () {
    list_active.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    Burger.classList.remove("Burger-active");
    menuBtn.classList.remove("active");
  });
});

function ofScroll() {
  body.classList.toggle("off_scroll");
}
function onShadow() {
  shadow.classList.toggle("shadow-on");
}

btnOn.addEventListener("click", () => {
  ofScroll();
  onShadow();
});

function onShadowForForm() {
  shadow.classList.toggle("shadow-on_for_Form");
}

BtnForForm.addEventListener("click", function () {
  Form.classList.toggle("wraper_Form");
  ofScroll();
  onShadowForForm();
});

function offForm() {
  Form.classList.remove("wraper_Form");
}

shadow.addEventListener("click", function (e) {
  const click = e.composedPath().includes(Form);
  if (!click) {
    offForm();
    ofScroll();
    onShadowForForm();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
  }

  function formValidate(e) {
    let error = 0;
    let formReq = document.querySelectorAll(".__req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_phone")) {
        if (phoneTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function phoneTest(input) {
    return !/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(input.value);
  }
});
