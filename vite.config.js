import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ command }) => {
   const mode = command === 'build' ? 'production' : 'development';
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react()],
    base: './',
    define: {
      'process.env': {
        ...env,
        ...Object.fromEntries(
          Object.entries(env).map(([key, value]) => [`import.meta.env.${key}`, value])
        ),
      },
    },
  });
};