import React, { FunctionComponent } from 'react'
import { LinearProgress } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackLinear: FunctionComponent<LoadingComponentProps> = (props) => (
    <FallBack {...props}>
        <div className="theme-pd">
            <LinearProgress />
        </div>
    </FallBack>
)

export default FallBackLinear
