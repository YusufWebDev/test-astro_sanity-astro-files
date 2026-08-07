// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "lo5wjfdb",
    dataset: "test_catalog_dataset",
    useCdn: false, // for static builds
  })]
});