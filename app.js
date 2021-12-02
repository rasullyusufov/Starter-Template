const form = document.getElementById('form')
const nameEl = document.getElementById('name')
const input = document.querySelector('.input')
const alertEl = document.querySelector('.alert')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value === ' ') {
        alertEl.classList.remove('hidden')

        setTimeout(() => {
            alertEl.classList.add('hidden')
        }, 2000);
    }
    else {
        nameEl.textContent = input.value;
        input.value = ' '
    }
})