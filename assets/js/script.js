const button = document.querySelector('input');
const html = document.querySelector('html');

button.addEventListener('click', function(){
    if (html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'drak';
        this.textContent = 'Light Mode';
    }else{
        html.dataset.colorMode = 'light';
        this.textContent = 'Drak Mode';
    }
});