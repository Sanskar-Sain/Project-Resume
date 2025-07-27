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

    // Custom cursor hover effect
    const cursorHover = document.createElement('div');
    cursorHover.classList.add('cursor-hover');
    document.body.appendChild(cursorHover);

    document.addEventListener('mousemove', (e) => {
        cursorHover.style.left = e.clientX + 'px';
        cursorHover.style.top = e.clientY + 'px';
        // Adaptive color based on background
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        // Example: interpolate between two colors
        const color1 = [67,198,172]; // teal
        const color2 = [255,99,71];  // tomato
        const r = Math.round(color1[0] * (1-x) + color2[0] * x);
        const g = Math.round(color1[1] * (1-y) + color2[1] * y);
        const b = Math.round(color1[2] * (1-x) + color2[2] * x);
        const adaptiveColor = `rgba(${r},${g},${b},0.25)`;
        cursorHover.style.setProperty('--cursor-color', adaptiveColor);
    });
});
