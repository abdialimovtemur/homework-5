const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const box = document.querySelector(".box");


const render = () => {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    box.innerHTML = data.map(
    (item) => `
    <div style="display: flex; gap: 30px; align-items: center;">
        <div>
            <h3>${item.user_name}</h3>
            <h3>${item.user_adress}</h3>
        </div>
        <button onclick="deleteItem(${item.id})" style="height: 40px; width: 120px; color: white; border: none; background-color: red; border-radius: 10px;">delete</button>
    </div>`
    ).join('');
};


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const obj = { id: Date.now() };
    for (let i of inputs) {
        obj[i.name] = i.value;
        i.value = "";
    }

    const oldData = JSON.parse(localStorage.getItem('data')) || [];
    localStorage.setItem("data", JSON.stringify([obj, ...oldData]));

    render();
});

render();


const deleteItem = (id) => {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    const result = data.filter((item) => item.id !== id);
    localStorage.setItem('data', JSON.stringify(result));
    render();
};
