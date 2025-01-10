
// Fonction pour récupérer les paramètres de l'URL
const getPlantIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('plant_id'); // Retourne l'ID de la plante
};

document.addEventListener("DOMContentLoaded", async () => {
    const plantId = getPlantIdFromUrl();
    const API_URL = `https://app-3861dd22-bcbc-49fb-a17d-9e71a5501d1b.cleverapps.io/api/plants/${plantId}`;


    // Vérifie si un ID est présent dans l'URL
    if (!plantId) {
        document.getElementById("plant-name").textContent = "Plant not found!";
        return;
    }

    try {
        // Envoi de la requête à l'API avec l'ID de la plante
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des détails de la plante.");
        }

        // Récupération des données de la plante
        const plant = await response.json();

        // Mise à jour des champs dynamiques dans le DOM
        document.getElementById("plant-name").textContent = plant.name || "No name available";
        document.getElementById("plant-description").textContent = plant.description || "No description available.";
        document.getElementById("plant-type").textContent = plant.plantType || "Unknown type";
        document.getElementById("plant-temperature").textContent = plant.current_temperature !== null ? `${plant.current_temperature}°C` : "N/A";
        document.getElementById("plant-humidity").textContent = plant.current_humidity !== null ? `${plant.current_humidity}%` : "N/A";
        document.getElementById("plant-luminosity").textContent = plant.current_Light !== null ? `${plant.current_humidity}lux` : "N/A";


        // Message basé sur la température
        const temperatureMessage = document.getElementById("temperature-message");
        if (plant.current_temperature < 18) {
            temperatureMessage.textContent = "It's too cold! Move the plant to a warmer room.";
            temperatureMessage.style.color = "blue";
        } else if (plant.current_temperature > 24) {
            temperatureMessage.textContent = "It's too hot! Move the plant to a cooler room.";
            temperatureMessage.style.color = "red";
        } else {
            temperatureMessage.textContent = "Perfect temperature for your plant!";
            temperatureMessage.style.color = "green";
        }

    } catch (error) {
        console.error("Erreur :", error);
        document.getElementById("plant-name").textContent = "Error loading plant details.";
    }
});
