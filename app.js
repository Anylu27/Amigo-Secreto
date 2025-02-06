// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtiene el valor del campo de entrada donde se escribe el nombre del amigo
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim(); // Elimina espacios en blanco al inicio y al final
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene la lista donde se mostrarán los amigos

    // Verifica si el campo de entrada está vacío
    if (amigoNombre === '') {
        alert('Por favor, ingresa un nombre válido.'); // Muestra una alerta si no hay un nombre
        return; // Sale de la función si no hay un nombre válido
    }

    // Crea un nuevo elemento de lista (li) para el nombre del amigo
    const listItem = document.createElement('li');
    listItem.textContent = amigoNombre; // Establece el texto del elemento de lista como el nombre del amigo
    listaAmigos.appendChild(listItem); // Agrega el nuevo elemento de lista a la lista de amigos
    amigoInput.value = ''; // Limpia el campo de entrada después de agregar el nombre
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Obtiene todos los elementos de la lista de amigos
    const listaAmigosItems = document.querySelectorAll('#listaAmigos li');
    // Convierte la lista de elementos en un array y extrae el texto de cada elemento
    const amigos = Array.from(listaAmigosItems).map(item => item.textContent);

    // Verifica si hay amigos en la lista para sortear
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.'); // Muestra una alerta si la lista está vacía
        return; // Sale de la función si no hay amigos
    }

    // Genera un índice aleatorio para seleccionar un amigo de la lista
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[randomIndex]; // Selecciona el amigo secreto usando el índice aleatorio

    // Obtiene el elemento donde se mostrará el resultado del sorteo
    const resultado = document.getElementById('resultado');
    // Muestra el amigo secreto en la lista de resultados
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
