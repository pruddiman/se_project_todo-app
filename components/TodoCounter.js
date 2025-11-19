class TodoCounter {
  constructor(initialTodos, selector) {
    this._element = document.querySelector(selector);
    this._completed = initialTodos.filter(
      (todoitem) => todoitem.completed
    ).length;
    this._total = initialTodos.length;
    this._updateText();
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
