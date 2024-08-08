
const feedbackElements = document.querySelectorAll(".rating");

const btnElement = document.getElementById("btn");
const mainElement = document.getElementById("main");

let selectedRating = "";

feedbackElements.forEach((feedback) => {
  feedback.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnElement.addEventListener("click", () => {
  if (selectedRating !== "") {
    let emojiImage = "";
    if (selectedRating === "Neutral") {
      emojiImage = "😐"; 
    } else if (selectedRating === "Happy") {
      emojiImage = "😊"; 
    } else if (selectedRating === "unhappy") {
      emojiImage = "😔"; 
    }

    mainElement.innerHTML = `<strong>Thank you!</strong> <br>
    <br>
    <strong>Feedback: ${selectedRating} ${emojiImage} </strong>
    <p>We'll use your feedback to improve our customer support.</p>`;
  }
});

function removeActive() {
  feedbackElements.forEach((feedback) => {
    feedback.classList.remove("active");
  });
}
