import Task from "./task-add";

const todos = document.querySelector(".todos");
const listSection = document.querySelector(".lists-section");
const taskAddBtn = document.querySelector(".task-add-btn");
const inputOverlay = document.querySelector(".input-overlay");
const form = document.querySelector(".input-overlay-main");
const inputOverlayTitle = document.querySelector(".input-overlay-title");
const inputOverlayDetails = document.querySelector(".input-overlay-details");
const inputOverlayDate = document.querySelector(".input-overlay-date");
const inputOverlayCancel = document.querySelector(".input-overlay-cancel");

console.log(localStorage);

const clearFields = () => {
  inputOverlayTitle.value = "";
  inputOverlayDetails.value = "";
  inputOverlayDate.value = "";
};

const renderList = (title, details, date) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.setAttribute("id", date);
  todoItem.innerHTML = `<details class="task">
                            <summary class="task-title">${title} (<span class="task-date">${date}</span>)</summary>
                            <p class="task-details">${details}</p>
                        </details>`;

  const btnActions = document.createElement("div");
  btnActions.classList.add("btn-actions");
  const btnComplete = document.createElement("button");

  btnComplete.classList.add("btn", "btn-complete");

  btnComplete.textContent = "Complete";

  btnActions.appendChild(btnComplete);

  todoItem.appendChild(btnActions);

  listSection.appendChild(todoItem);

  btnComplete.addEventListener("click", (e) => {
    listSection.removeChild(e.target.parentNode.parentNode);
    localStorage.removeItem(e.target.parentNode.parentNode.id);
  });
};

(function () {
  for (let i = 0; i < localStorage.length; i++) {
    let z = JSON.parse(localStorage.getItem(localStorage.key(i)));
    renderList(z._title, z._details, z._date);
  }
})();

taskAddBtn.addEventListener("click", () => {
  inputOverlay.style.display = "flex";
});

inputOverlayCancel.addEventListener("click", () => {
  inputOverlay.style.display = "none";
  clearFields();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskObj = new Task(
    inputOverlayTitle.value,
    inputOverlayDetails.value,
    inputOverlayDate.value
  );
  console.log(taskObj);
  window.localStorage.setItem(inputOverlayDate.value, JSON.stringify(taskObj));
  console.log(window.localStorage);
  renderList(
    inputOverlayTitle.value,
    inputOverlayDetails.value,
    inputOverlayDate.value
  );
  clearFields();
  inputOverlay.style.display = "none";
});
