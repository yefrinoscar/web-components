import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { join } from 'path';

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  plugins: [
    sass({
      includePaths: [
        join(__dirname, '..', '..', 'node_modules'),
        join(__dirname, '..', '..', 'packages')
      ]
    })
  ],
};
