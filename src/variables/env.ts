export const __IS_DEV = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development'
export const __IS_STAG = process.env.NODE_ENV === 'stag' || process.env.NODE_ENV === 'staging'
export const __IS_PROD = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production'

export const __IS_BROWSER = typeof window !== 'undefined' && typeof document !== 'undefined'

const ENV = process.env.NODE_ENV || 'production'

export default ENV
