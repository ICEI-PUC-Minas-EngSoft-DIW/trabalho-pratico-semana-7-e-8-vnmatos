const destinos = [
    {
        nome: "Milão",
        pais: "Itália",
        imagem: "images/cards/milao.webp",
        descricao: "A capital da moda, do design e da economia da Itália",
    },

    {
        nome: "Paris",
        pais: "França",
        descricao: "A cidade luz, famosa pela Torre Eiffel e pela culinária.",
        imagem: "images/cards/paris.jpg",
    },

    {
        nome:"Londres",
        pais: "Inglaterra",
        descricao : "Uma metrópole global, centro financeiro e cultural com dois milênios de história, marcada por um contraste entre o antigo e o moderno.",
        imagem: "images/cards/londres.jpg",
    }
    
]

            function montarCards() {
            const container = document.getElementById("cards-container");

            destinos.forEach(destino => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <img src="${destino.imagem}" alt="${destino.nome}">
                <h2>${destino.nome}</h2>
                <p>${destino.pais}</p>
                <p>${destino.descricao}</p>
                `;

                container.appendChild(card);
            });
            }

            document.addEventListener("DOMContentLoaded", montarCards);