import animatedScrollTo from 'animated-scroll-to'

import { __IS_BROWSER } from '~/variables/env'

export const offset = (target: string) => {
    if (!__IS_BROWSER) {
        return { x: 0, y: 0 }
    }
    const el = document.querySelector(target)
    if (!el) {
        return { x: 0, y: 0 }
    }
    const rect = el.getBoundingClientRect()
    const scrollTop =
        window.pageYOffset ||
        ('documentElement' in document && document.documentElement && document.documentElement.scrollTop) ||
        0

    const scrollLeft =
        window.pageXOffset ||
        ('documentElement' in document && document.documentElement && document.documentElement.scrollLeft) ||
        0

    return { y: rect.top + scrollTop, x: rect.left + scrollLeft }
}

/* eslint-disable no-mixed-operators */
const easingFunctions: {
    [easingKey: string]: (t: number) => number
} = {
    // no easing, no acceleration
    linear: (t) => t,
    // accelerating from zero velocity
    easeInQuad: (t) => t * t,
    // decelerating to zero velocity
    easeOutQuad: (t) => t * (2 - t),
    // acceleration until halfway, then deceleration
    easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    // accelerating from zero velocity
    easeInCubic: (t) => t * t * t,
    // decelerating to zero velocity
    easeOutCubic: (t) => --t * t * t + 1,
    // acceleration until halfway, then deceleration
    easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    // accelerating from zero velocity
    easeInQuart: (t) => t * t * t * t,
    // decelerating to zero velocity
    easeOutQuart: (t) => 1 - --t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    // accelerating from zero velocity
    easeInQuint: (t) => t * t * t * t * t,
    // decelerating to zero velocity
    easeOutQuint: (t) => 1 + --t * t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t)
}

const smoothScrollTo = (
    target: any,
    opt: {
        easing?: string
        elementToScroll?: any
        maxDuration?: number
        minDuration?: number
        speed?: number
        verticalOffset?: number
        horizontalOffset?: number
    } = {}
) => {
    if (!__IS_BROWSER) {
        return
    }

    const {
        easing = 'easeOutCubic',
        elementToScroll = window,
        maxDuration = 1000,
        minDuration = 500,
        speed = 500,
        verticalOffset = -200,
        horizontalOffset = -50
    } = opt

    if (typeof target === 'string') {
        target = document.querySelector(target)

        if (!target) {
            return
        }
    }

    return animatedScrollTo(target, {
        easing: easingFunctions[easing],
        elementToScroll,
        maxDuration,
        minDuration,
        speed,
        verticalOffset,
        horizontalOffset
    })
}

export default smoothScrollTo
