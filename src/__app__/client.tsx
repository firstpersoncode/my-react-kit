import React, { FunctionComponent } from 'react'
import { hydrate } from 'react-dom'
import { preloadReady } from 'react-loadable'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import App from '~/containers/App'
import { __IS_DEV } from '~/variables/env'

const targetDom: HTMLElement | null = document.querySelector('#root')

const render = (App: FunctionComponent): FunctionComponent => () => (
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>
)

preloadReady()
    .then(() => {
        const Render = render(App)

        hydrate(<Render />, targetDom)

        if (__IS_DEV && module.hot) {
            module.hot.accept('~/containers/App', () => {
                // eslint-disable-next-line global-require
                const Render = render(require('~/containers/App').default)
                hydrate(<Render />, targetDom)
            })
        }
    })
    .catch((err) => {
        /* eslint-disable-next-line no-console */
        console.log(err)
    })
