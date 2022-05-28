export function seedApi(Object) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open('POST', 'http://localhost:3000/seed');
    xhr.send();
    localStorage.setItem('seed', true);
}
