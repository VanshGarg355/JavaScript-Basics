// classList = Element property in JavaScript used to interact with an element's list of classes (CSS classes) Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldclass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});
