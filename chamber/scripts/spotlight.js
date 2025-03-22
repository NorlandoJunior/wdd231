async function getSpotlightMembers() {
    
    const spotlightMembers = [
        {
            name: "John Doe",
            business: "Doe's Restaurant",
            description: "A fine dining experience located in the heart of São Paulo, offering a wide range of international cuisine.",
            imageUrl: "https://example.com/images/spotlight-member1.jpg",
            address: "123 Rua da Gastronomia, São Paulo, SP"
        },
        {
            name: "Jane Smith",
            business: "Smith's Bakery",
            description: "Freshly baked pastries and breads every day, made with love and the finest ingredients.",
            imageUrl: "https://example.com/images/spotlight-member2.jpg",
            address: "456 Rua dos Padeiros, São Paulo, SP"
        },
        {
            name: "Fernanda Oliveira",
            business: "Oliveira Café",
            description: "A cozy café offering specialty coffee and homemade pastries.",
            imageUrl: "https://example.com/images/spotlight-member2.jpg",
            address: "507   Rua dos Padeiros, São Paulo, SP"
        }
    ];

    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = "";  

   
    spotlightMembers.forEach(member => {
        const memberHTML = `
            <div class="spotlight-member">
                <img src="${member.imageUrl}" alt="${member.name}" class="spotlight-member-image">
                <div class="spotlight-member-info">
                    <h3>${member.name}</h3>
                    <p><strong>Business:</strong> ${member.business}</p>
                    <p><strong>Description:</strong> ${member.description}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                </div>
            </div>
        `;
        spotlightContainer.innerHTML += memberHTML; 
    });
}


getSpotlightMembers();
