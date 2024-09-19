const resultText = document.getElementById('resultText');
const titleInput = document.getElementById('titleInput');

document.getElementById('generateButton').addEventListener('click', async function() {
    const title = titleInput.value;

    if (title) {
        const guide = await generateGuide(title);
        resultText.innerHTML = guide;
    } else {
        resultText.innerHTML = "Por favor, ingresa un título.";
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    titleInput.value = '';
    resultText.innerHTML = '';
});

async function generateGuide(title) {
    const apiUrl = 'YOUR_API_ENDPOINT'; // Reemplaza con tu API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        return data.guide;  // Ajusta según la respuesta de la API
    } catch (error) {
        return `Error al generar la guía: ${error.message}`;
    }
}
