import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Checker from 'vite-plugin-checker';

const SERVER_URL = 'http://localhost:3000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  server: {
    proxy: {
      '^/api/.*': {
        // Это место назначения, на которое будут перенаправляться запросы
        target: SERVER_URL,
        // Этот параметр говорит прокси-серверу изменить исходный заголовок "Origin" в запросе на целевой сервер
        changeOrigin: true,
        // Этот параметр отключает проверку SSL-сертификата. В разработке иногда бывает полезно отключить проверку SSL, чтобы избежать ошибок, связанных с самоподписанными сертификатами.
        secure: false,
        // Это функция,
      },
    },
  },
});
