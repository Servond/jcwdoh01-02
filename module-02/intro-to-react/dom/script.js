function updateTitle() {
  const titleNode = document.getElementById("title");
  titleNode.textContent = "Updated Text";
}

function insertText() {
  const parentNode = document.getElementById("description");
  const textNode = document.createElement("p");
  textNode.textContent = "Ini Description";

  parentNode.appendChild(textNode);
}
