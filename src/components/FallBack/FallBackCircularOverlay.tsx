import React, { FunctionComponent } from 'react'
import { CircularProgress, useTheme } from '@material-ui/core'
import { LoadingComponentProps } from 'react-loadable'

import FallBack from '.'

const FallBackCircularOverlay: FunctionComponent<LoadingComponentProps> = (props) => {
    const theme = useTheme()
    return (
        <FallBack {...props}>
            <div
                className="theme-dp--flex--centered"
                style={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: theme.zIndex.appBar + 10
                }}>
                <CircularProgress />
            </div>
        </FallBack>
    )
}

export default FallBackCircularOverlay
