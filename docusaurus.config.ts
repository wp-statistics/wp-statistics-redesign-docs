import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WP Statistics v15 Documentation',
  tagline: 'Product documentation for WP Statistics WordPress plugin v15 redesign',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wp-statistics-docs.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wp-statistics', // Usually your GitHub org/user name.
  projectName: 'wp-statistics-new-design', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed to warn during migration

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve docs at root
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/wp-statistics/wp-statistics-new-design/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WP Statistics v15',
      logo: {
        alt: 'WP Statistics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/wp-statistics/wp-statistics-new-design',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Global Rules',
              to: '/global/global-rules',
            },
            {
              label: 'Reports',
              to: '/reports',
            },
            {
              label: 'Widgets',
              to: '/widgets',
            },
            {
              label: 'Components',
              to: '/components',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wp-statistics/wp-statistics-new-design',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WP Statistics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
