import { Application } from 'express'
import proxy, { Filter } from 'http-proxy-middleware'

export interface IProxyConfig {
    path: string | string[] | Filter
    options: {
        target: string
        changeOrigin: boolean
        [x: string]: any
    }
}

export default (app: Application, proxies: IProxyConfig[]) => {
    if (!proxies.length) {
        return
    }

    proxies.forEach((config) => {
        app.use(config.path as any, proxy(config.path, config.options))
    })
}
