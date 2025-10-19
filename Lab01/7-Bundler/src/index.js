import { createApp } from './app';

const app = createApp();
app.mount(document.getElementById('root'));

// Hot Module Replacement demo
if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('Hot module replaced: app');
    });
}
