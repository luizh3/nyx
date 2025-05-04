/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css';
import { hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers';
import DefaultLayout from '~/lib/layouts/default-layout';
import { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS';

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} | ${appName}`,

  resolve: async (name) => {

    const page: any = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    );

    const PageComponent = page.default;

    PageComponent.layout ??= (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

    return page;
  },

  setup({ el, App, props }) {

    hydrateRoot(el, <App {...props} />);

  },
});