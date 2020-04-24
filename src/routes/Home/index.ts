import Loadable from 'react-loadable'
import { RouteConfig } from 'react-router-config'
// import { Store } from 'redux'

import { PATH_ROOT } from '~/variables/urls'
import { FallBackPage } from '~/components/FallBack'

const HomePromise = Loadable({
    loader: () => import(/* WebpackChunkName: "home" */ './view'),
    loading: FallBackPage
})

const Home: RouteConfig = {
    component: HomePromise,
    exact: true,
    path: PATH_ROOT
    // loadData: (store: Store) => {
    //     const state = store.getState()
    //     if (!(state.product.lists && state.product.lists.length)) {
    //         store.dispatch(fetchProduct() as any)
    //     }
    // }
}

export default Home
