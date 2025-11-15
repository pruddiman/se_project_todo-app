import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js/";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

export { validationConfig, initialTodos };

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

//const openModal = (modal) => {
/// modal.classList.add("popup_visible");
//};

const todoCounter = new TodoCounter(".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();

  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoPopup.setEventListeners();

//addTodoCloseBtn.addEventListener("click", () => {
// addTodoPopup.close();
//});

function renderTodo(todoData) {
  const todo = generateTodo(todoData);
  todosList.append(todo);
}

//addTodoForm.addEventListener("submit", (evt) => {
//evt.preventDefault();
//const name = evt.target.name.value;
//const dateInput = evt.target.date.value;

//const date = new Date(dateInput);
//date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//const id = uuidv4();

//const values = { name, date, id };
//renderTodo(values);
//newTodoValidator.resetValidation();
// addTodoPopup.close();
//});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

const newSection = new Section({
  items: initialTodos,
  renderer: generateTodo,
  containerSelector: ".todos__list",
});

newSection.renderItems();

// call section instances renderItems() method once on page load

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const name = inputValues.name;
    const dateInput = inputValues.date;
    const id = uuidv4();

    const values = { name, date, id };
    newSection.addItem(values);
    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});
