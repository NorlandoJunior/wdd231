document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('membership-modal');
    const closeModal = document.getElementById('close-modal');
    const membershipSelect = document.querySelector('[name="membership-level"]');
    const modalContent = document.getElementById('modal-content');

    const membershipDetails = {
        np: "NP Membership (Non-Profit, Free): Ideal for non-profit organizations. Get a basic listing and community support.",
        bronze: "Bronze: A great entry-level membership offering business promotion and event participation.",
        silver: "Silver: Includes all Bronze benefits plus additional marketing opportunities and access to exclusive events.",
        gold: "Gold: The highest level membership offering all Silver benefits plus priority listings, featured spots, and a dedicated account manager."
    };

    membershipSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        modalContent.textContent = membershipDetails[selectedValue] || "No description available.";
        modal.style.display = "block";
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});