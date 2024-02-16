import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run dev-transactions-fe-monorepo:serve',
        production: 'nx run dev-transactions-fe-monorepo:preview',
      },
      ciWebServerCommand: 'nx run dev-transactions-fe-monorepo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
