class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = 0;
    this._completedTodos = todos.filter(
      (todoitem) => todoitem.completed
    ).length;
    this._total = todos.length;
    this._updateText();
    console.log(this._element);
    console.log(this._completed);
    console.log(this._total);
  }

  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
