document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour récupérer les plantes via l'API
    const fetchPlants = async () => {
        try {
            const response = await fetch("/api/plants"); // URL de l'API backend
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des plantes.");
            }

            const plants = await response.json(); // Récupération des données JSON
            renderPlantList(plants);
        } catch (error) {
            console.error("Erreur :", error);
            document.getElementById("plant-list").innerHTML = "<li>Impossible de charger la liste des plantes.</li>";
        }
    };

    // Fonction pour afficher la liste des plantes dans le DOM
    const renderPlantList = (plants) => {
        const plantList = document.getElementById("plant-list");
        plantList.innerHTML = ""; // Vide la liste actuelle

        plants.forEach((plant) => {
            const listItem = document.createElement("li");
            listItem.classList.add("plant-item");

            const link = document.createElement("a");
            link.href = `plant-details.html?plant_id=${plant.id}`; // Lien dynamique vers la page détails
            link.textContent = `${plant.name} (${plant.type})`; // Affiche le nom et le type de plante

            listItem.appendChild(link);
            plantList.appendChild(listItem);
        });
    };

    // Charger les plantes au chargement de la page
    fetchPlants();
});
