document.addEventListener("DOMContentLoaded", () => {
    // Exemple de données récupérées (JSON ou API)
    const plantData = {
        name: "Fiddle Leaf Fig",
        description: "A popular indoor plant known for its large, glossy leaves.",
        type: "Indoor",
        careLevel: "Medium",
        temperature: 22,  // Température actuelle de la plante
        humidity: "50-60%" // Humidité idéale
    };

    // Mise à jour des champs dynamiques
    document.getElementById("plant-name").textContent = plantData.name;
    document.getElementById("plant-description").textContent = plantData.description;
    document.getElementById("plant-type").textContent = plantData.type;
    document.getElementById("plant-care-level").textContent = plantData.careLevel;
    document.getElementById("plant-temperature").textContent = '${plantData.temperature}°C';
    document.getElementById("plant-humidity").textContent = plantData.humidity;

    // Affichage d'un message basé sur la température
    const temperatureMessage = document.getElementById("temperature-message");

    if (plantData.temperature < 18) {
        temperatureMessage.textContent = "It's too cold! Move the plant to a warmer room.";
        temperatureMessage.style.color = "blue"; // Optionnel : couleur pour indiquer un avertissement
    } else if (plantData.temperature > 24) {
        temperatureMessage.textContent = "It's too hot! Move the plant to a cooler room.";
        temperatureMessage.style.color = "red"; // Optionnel : couleur pour indiquer un avertissement
    } else {
        temperatureMessage.textContent = "Perfect temperature for your plant!";
        temperatureMessage.style.color = "green"; // Optionnel : couleur pour indiquer une température idéale
    }
});