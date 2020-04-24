import React, { FunctionComponent } from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackCircularBlack: FunctionComponent<LoadingComponentProps> = (props) => (
    <FallBack {...props}>
        <div className="theme-dp--flex--centered theme-pd">
            <CircularProgress color="secondary" />
        </div>
    </FallBack>
)

export default FallBackCircularBlack
