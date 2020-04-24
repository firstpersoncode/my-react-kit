import React, { FunctionComponent } from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackPage: FunctionComponent<LoadingComponentProps> = (props) => (
    <FallBack {...props}>
        <div className="theme-dp--flex--centered theme-height--full-view">
            <CircularProgress color="secondary" />
        </div>
    </FallBack>
)

export default FallBackPage
