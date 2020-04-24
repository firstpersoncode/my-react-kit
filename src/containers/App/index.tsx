import React, { useEffect, FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'

import smoothScrollTo from '~/utils/smoothScrollTo'
import routes from '~/routes'
import Header from '~/containers/Header'
import Footer from '~/containers/Footer'
import { CDN_MATERIALUI_ICONS, CDN_GOOGLE_FONT_STYLES } from '~/variables/urls'

const App: FunctionComponent = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        smoothScrollTo(0)
        matchRoutes(routes, pathname).forEach(({ route, match }) => {
            if (route.exact && route.loadData) {
                route.loadData({ route, match })
            }
        })
    }, [pathname])

    return (
        <>
            <Helmet>
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon-16x16.png" />

                <link rel="stylesheet" href={CDN_GOOGLE_FONT_STYLES} />
                <link rel="stylesheet" href={CDN_MATERIALUI_ICONS} />
            </Helmet>
            <Header />
            {renderRoutes(routes)}
            <Footer />
        </>
    )
}

export default App
