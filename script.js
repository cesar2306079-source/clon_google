const campo = document.getElementById('campo');
const form = document.getElementById('form-busqueda');
const btnSuerte = document.getElementById('btn-suerte');

// no mandar la busqueda vacia
form.addEventListener('submit', (e) => {
    if (campo.value.trim() === '') {
        e.preventDefault();
    }
});

// el boton de suerte manda directo al primer resultado
btnSuerte.addEventListener('click', () => {
    const texto = campo.value.trim();
    if (texto !== '') {
        window.location.href =
            'https://www.google.com/search?q=' + encodeURIComponent(texto) + '&btnI=1';
    }
});
