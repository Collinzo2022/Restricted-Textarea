const message = document.getElementById("message");
const charCount = document.getElementById("char-count");
/*const textArea = document.getElementById("textarea-container");*/

message.addEventListener("input", function() {
  const currentLength = message.value.length;
  charCount.textContent = `${currentLength} / 250`;


  // if the maxlength is reached, add red border and charcater count color
  if (currentLength >= 250) {
    message.classList.add("red-border");
    charCount.classList.add("red");
  } else {
    message.classList.remove("red-border");
    charCount.classList.remove("red");
  }


});