import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

const About: FunctionComponent = () => (
    <>
        <Helmet>
            <title>About</title>
            <meta name="title" content="About" />
            <meta name="description" content="About page" />
        </Helmet>
        <div>About page</div>
    </>
)

export default About
