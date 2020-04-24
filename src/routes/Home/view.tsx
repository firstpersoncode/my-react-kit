import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

const Home: FunctionComponent = () => (
    <>
        <Helmet>
            <title>My React Kit</title>
            <meta name="title" content="My React Kit" />
            <meta name="description" content="My React Kit, server side rendering your React App!" />
        </Helmet>

        <div>Bienvenue du monde</div>
    </>
)

export default Home
