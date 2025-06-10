document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#leave-recommendation form");
    const messageBox = document.querySelector("textarea[name='message']");
    const nameBox = document.querySelector("input[name='name']");
    const recommendationsSection = document.querySelector("#recommendations .recommendation-cards");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get input values
        const name = nameBox.value.trim();
        const message = messageBox.value.trim();

        // Validate input
        if (!message) {
            alert("Message cannot be empty!");
            return;
        }

        // Create a new recommendation card
        const recommendationCard = document.createElement("div");
        recommendationCard.classList.add("recommendation-card");

        // Set the card content
        const recommendationText = name ? `"${message}" - ${name}` : `"${message}"`;
        recommendationCard.textContent = recommendationText;

        // Append the new recommendation
        recommendationsSection.appendChild(recommendationCard);

        // Show success alert
        alert("Thank you for your recommendation!");

        // Clear the form fields
        nameBox.value = "";
        messageBox.value = "";
    });
});
