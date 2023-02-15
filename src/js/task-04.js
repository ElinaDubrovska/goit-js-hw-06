// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const valueEl = document.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener ('click', () =>{
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
)

incrementBtn.addEventListener ('click', () =>{
    counterValue += 1;
    valueEl.textContent = counterValue;
}
);