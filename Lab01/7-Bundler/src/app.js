export function createApp() {
    const root = document.createElement('div');
    root.id = 'app-root';
    root.innerHTML = `
    <h1>Bundler demo</h1>
    <p id="msg">Hello from app</p>
    <button id="chg">Change message</button>
  `;
    root.querySelector('#chg').addEventListener('click', () => {
        const p = root.querySelector('#msg');
        p.textContent = 'Changed at ' + new Date().toISOString();
    });

    return {
        mount: (el) => el.appendChild(root)
    };
}
