document.addEventListener("DOMContentLoaded", async () => {
    const GET_TYPES_URL = 'https://app-3861dd22-bcbc-49fb-a17d-9e71a5501d1b.cleverapps.io/api/types';

    try {
        // 🔗 Récupérer les types de plantes depuis l'API
        const response = await fetch(GET_TYPES_URL);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des types de plantes.");
        }

        const types = await response.json();
        console.log(types); // Vérifier la réponse de l'API

        const plantTypeSelect = document.getElementById('plant-type');

        // Vider le menu déroulant et ajouter une option par défaut
        plantTypeSelect.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Select plant type';
        plantTypeSelect.appendChild(defaultOption);

        // ✅ Ajouter les types de plantes récupérés depuis l'API
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.name;
            option.textContent = type.name;
            plantTypeSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des types de plantes :", error);
    }
});
