import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Capture, preloadAll } from 'react-loadable'
import { getBundles } from 'react-loadable-ssr-addon'
import { StaticRouter } from 'react-router'
import server from '__core__/server'
import { renderToString } from 'react-dom/server'

import App from '~/containers/App'
import { PATH_ROOT } from '~/variables/urls'
import routes from '~/routes'
import { extractHostName } from '~/utils/string'

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const manifest = require('../../dist/react-loadable-ssr-addon.json')

const modules = new Set()

const app = server({
    routes,
    rootPath: PATH_ROOT,
    proxies: [
        // check all available options here:
        // https://github.com/http-party/node-http-proxy#options
        // check for more options, since we are using this libs
        // https://github.com/chimurai/http-proxy-middleware#options
        // {
        //     path: API_USER,
        //     options: {
        //         target: HOST_PROXY,
        //         changeOrigin: true,
        //     },
        // },
    ],
    render: async (expressCtx) => {
        const { req } = expressCtx

        const routeCtx: any = { status: null, url: null }
        const helmetCtx: any = { helmet: {} }

        const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)])

        const { helmet } = helmetCtx

        const root = renderToString(
            <Capture report={(moduleName: any) => modules.add(moduleName)}>
                <HelmetProvider context={helmetCtx}>
                    <StaticRouter location={req.url} context={routeCtx}>
                        <App />
                    </StaticRouter>
                </HelmetProvider>
            </Capture>
        )

        const html = `<!doctype html>
            <html lang="en">
                <head>
                    ${helmet.title ? helmet.title.toString() : ''}
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    ${[
                        helmet.meta ? helmet.meta.toString() : '',
                        helmet.link ? helmet.link.toString() : '',
                        helmet.script ? helmet.script.toString() : ''
                    ]
                        .filter((s) => s !== '')
                        .join('\n')}
                </head>
                <body>
                    <div id="root">${root}</div>

                    ${
                        bundles.js && bundles.js.length
                            ? bundles.js
                                  .map(
                                      (script: { file: string }) =>
                                          `<script src="/${process.env.APP_NAME}/${script.file}"></script>`
                                  )
                                  .join('\n')
                            : ''
                    }

                </body>
            </html>`

        return { html, routeCtx }
    }
})

preloadAll().then(() => {
    const HOST = extractHostName(process.env.APP_HOST || 'http://localhost')
    const PORT = Number(process.env.APP_PORT) || 3000
    const httpServer = app.listen(PORT, HOST, (error: any): void => {
        if (error) {
            /* eslint-disable-next-line no-console */
            console.error(error)
        } else {
            const address: any = httpServer.address()
            /* eslint-disable-next-line no-console */
            console.info(`==> 🌎 Listening on PORT: ${address.port}. Open up ${HOST}:${address.port}/ in your browser.`)
        }
    })
})
