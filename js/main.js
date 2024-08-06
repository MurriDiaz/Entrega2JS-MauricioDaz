const customers = [
    { name: 'Juan', age: 22 },
    { name: 'María', age: 19 },
    { name: 'Carlos', age: 17 },
    { name: 'Lucía', age: 25 },
    { name: 'Pedro', age: 21 },
];

let currentCustomerIndex = 0;
let score = 0;

function displayCustomer() {
    if (currentCustomerIndex >= customers.length) {
        document.getElementById('message').innerHTML = `Juego terminado. Puntuación final: ${score} de ${customers.length}`;
        document.getElementById('customer').innerHTML = '';
        return;
    }
    const customer = customers[currentCustomerIndex];
    document.getElementById('customer').innerHTML = `
        Cliente: ${customer.name} <br>
        Edad: ${customer.age}
    `;
}

function allowEntry(allow) {
    const customer = customers[currentCustomerIndex];
    if ((allow && customer.age >= 18) || (!allow && customer.age < 18)) {
        score++;
        document.getElementById('message').innerHTML = '¡Correcto!';
    } else {
        document.getElementById('message').innerHTML = '¡Incorrecto!';
    }
    currentCustomerIndex++;
    setTimeout(() => {
        document.getElementById('message').innerHTML = '';
        displayCustomer();
    }, 1000);
}

displayCustomer();