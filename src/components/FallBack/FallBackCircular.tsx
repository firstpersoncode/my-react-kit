import React, { FunctionComponent } from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackCircular: FunctionComponent<LoadingComponentProps> = (props) => (
    <FallBack {...props}>
        <div className="theme-dp--flex--centered theme-pd">
            <CircularProgress />
        </div>
    </FallBack>
)

export default FallBackCircular
