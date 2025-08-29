# JavaScript DOM & Events Concepts

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **getElementById** → Selects a single element by its unique ID. Returns one element or `null`.
- **getElementsByClassName** → Selects elements by class name. Returns a live HTMLCollection.
- **querySelector** → Selects the first element that matches a CSS selector.
- **querySelectorAll** → Selects all elements that match a CSS selector. Returns a static NodeList.


## 2. How to create and insert a new element into the DOM

- Use `document.createElement()` to create a new element.
- Set its text, attributes, or classes.
- Insert into the DOM using methods like `appendChild`, `prepend`, or `insertBefore`.


## 3. Event Bubbling

- Event Bubbling means when an event occurs on an element, it first runs on that element and then bubbles up to its parent, grandparent, and so on, until it reaches the root (`document`).


## 4. Event Delegation

- Event Delegation is a technique where a single event listener is added to a parent element to handle events on its child elements using event bubbling.
- Useful because it:
  - Improves performance (fewer event listeners).
  - Works with dynamically added child elements.


## 5. Difference between `preventDefault()` and `stopPropagation()`

- **preventDefault()** → Stops the browser’s default action (e.g., preventing form submission, stopping a link from opening).
- **stopPropagation()** → Stops the event from bubbling up or down the DOM tree.
