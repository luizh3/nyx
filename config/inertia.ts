import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    // user: (ctx) => ctx.inertia.always(() => ctx.auth.user),
    flash: (ctx) => ctx.inertia.always(() => ({
      success: ctx.session.flashMessages.get('success'),
      error: ctx.session.flashMessages.get('error'),
      info: ctx.session.flashMessages.get('info'),
      warning: ctx.session.flashMessages.get('warning'),
    })),
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}