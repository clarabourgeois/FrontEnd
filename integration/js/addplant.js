document.addEventListener("DOMContentLoaded", async () => {
    // URL de l'API pour récupérer les types de plantes
    const API_URL = 'https://app-3861dd22-bcbc-49fb-a17d-9e71a5501d1b.cleverapps.io/api/types';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des types de plantes.");
        }

        const types = await response.json(); // Récupérer la liste des types de plantes

        const plantTypeSelect = document.getElementById('plant-type');

        // Supprimer l'option par défaut (la première option) pour ne pas la dupliquer
        plantTypeSelect.innerHTML = '';

        // Ajouter une option par défaut
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Select plant type';
        plantTypeSelect.appendChild(defaultOption);

        // Ajouter les types de plantes récupérés depuis l'API dans la liste déroulante
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.name; // Valeur qui sera envoyée avec le formulaire
            option.textContent = type.name; // Texte affiché dans le menu déroulant
            plantTypeSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des types de plantes:", error);
    }
});
