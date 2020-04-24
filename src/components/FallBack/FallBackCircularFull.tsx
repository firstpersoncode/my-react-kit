import React, { FunctionComponent } from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackCircularFull: FunctionComponent<LoadingComponentProps> = (props) => (
    <FallBack {...props}>
        <div className="theme-dp--flex--centered" style={{ minHeight: '50vh' }}>
            <CircularProgress color="secondary" />
        </div>
    </FallBack>
)

export default FallBackCircularFull
