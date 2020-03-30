// page controls
const addItemsAction = document.querySelector(".addItems-action");
const input = document.querySelector(".addItems-input");
const submit = document.querySelector(".addItems-submit");

const list = document.querySelector(".grocery-list");
const displayItemsAction = document.querySelector(".displayItems-action");
const clear = document.querySelector(".displayItems-clear");

// event listeners
submit.addEventListener("click", addItem);

// functions
function addItem(event) {
  event.preventDefault();
  let val = input.value;
  if (val === "") {
    showAlertAction(addItemsAction, "Please add grocery item");
  } else {
    showSuccessAction(addItemsAction, `${val} added successfully to the list`);
  }
}

function showSuccessAction(element, text) {
  // set class to success
  element.classList.add("success");
  // set text
  element.innerText = text;
  // show it for 3 seconds
  setTimeout(() => {
    element.classList.remove("success");
  }, 3000);
  input.value = "";
}
function showAlertAction(element, text) {
  // set class to success
  element.classList.add("alert");
  // set text
  element.innerText = text;
  // show it for 3 seconds
  setTimeout(() => {
    element.classList.remove("alert");
  }, 3000);
  input.value = "";
}

/*
function showAction(element, text, isOk) {
  if (isOk) {
    // set class to success
    element.classList.add("success");
    // set text
    element.innerText = text;
    // show it for 3 seconds
    setTimeout(() => {
      element.classList.remove("success");
    }, 3000);
  } else {
    // set class to success
    element.classList.add("alert");
    // set text
    element.innerText = text;
    // show it for 3 seconds
    setTimeout(() => {
      element.classList.remove("alert");
    }, 3000);
  }
  input.value = "";
}
*/
