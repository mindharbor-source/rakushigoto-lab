import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'rakushigoto-lab';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'mindharbor-source';
const isUserSite = repositoryName === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserSite ? '/' : `/${repositoryName}`,
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  trailingSlash: 'always'
});
