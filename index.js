    window.addEventListener('load', () => {
        const iframeContainer = document.getElementById('iframe-container');
        
        // Affichage de l'iframe avec une animation
        setTimeout(() => {
            iframeContainer.classList.remove('hidden');  // Retirer la classe hidden
            setTimeout(() => {
                iframeContainer.classList.add('visible');  // Ajouter la classe visible pour déclencher l'animation
            }, 200);  // Petit délai pour s'assurer que l'élément devient visible
        }, 500);  // Attendre un peu avant de montrer l'iframe
    });
