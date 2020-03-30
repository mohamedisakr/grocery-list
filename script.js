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
    createItem(val);
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

// add new grocery item
function createItem(val) {
  const groceryItem = document.createElement("div");
  groceryItem.classList.add("grocery-item");
  groceryItem.innerHTML = `
    <h4 class="grocery-item__title">${val}</h4>
    <a href="#" class="grocery-item__link">
        <i class="far fa-trash-alt"></i>
    </a>`;
  list.appendChild(groceryItem);
}
