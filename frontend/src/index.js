import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Получаем контейнер для рендеринга приложения
const container = document.getElementById('root');

// Проверяем, что контейнер существует
if (container) {
    // Создаем корень для рендеринга
    const root = createRoot(container);

    // Рендерим приложение в режиме строгой типизации
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Контейнер с id "root" не найден');
}
