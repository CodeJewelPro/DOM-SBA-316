document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('tip-form');
    const tipInput = document.getElementById('tip-input');
    const tipsList = document.getElementById('tips-list');
    const header = document.querySelector('header');

    alert('Welcome to the Healthcare Info page!');
    console.log(window.location.href);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (tipInput.value.trim() === '') {
            alert('Please enter a health tip.');
        } else {
            const newTipText = tipInput.value;
            const newTip = document.createElement('li');

            newTip.textContent = newTipText;


            tipsList.appendChild(newTip);

            tipInput.value = '';

            tipsList.style.backgroundColor = '#e0f7fa';
        }
    });

header.addEventListener('click', () => {
    alert('Header clicked!');
    });

    const image = document.querySelector('#image-section img');
    image.alt = 'Updated Healthcare Image';

    const fragment = document.createDocumentFragment();
    const tips = ['Tip 1: Stay active.', 'Tip 2: Eat balanced meals.'];
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        fragment.appendChild(li);
    });
    tipsList.appendChild(fragment);

    document.querySelectorAll('#tips-list li').forEach(tip => {
        console.log(tip.textContent);
    });
});