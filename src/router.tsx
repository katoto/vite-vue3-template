import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/home'
const Nextjs11 = lazy(() => import(/* webpackChunkName: "nextjs11" */ './pages/nextjs11/nextjs11'))
const Nuxtjs2 = lazy(() => import(/* webpackChunkName: "nuxtjs2" */ './pages/nuxtjs2/nuxtjs2'))
const React16 = lazy(() => import(/* webpackChunkName: "react16" */ './pages/react16/react16'))
const React17 = lazy(() => import(/* webpackChunkName: "react17" */ './pages/react17/react17'))
const Vite = lazy(() => import(/* webpackChunkName: "vite" */ './pages/vite/vite'))
const Vue3 = lazy(() => import(/* webpackChunkName: "vue3" */ './pages/vue3/vue3'))
const Webpack5 = lazy(() => import(/* webpackChunkName: "webpack5" */ './pages/webpack5-docs/index'))


function App () {
  return (
    // 设置主应用基础路由为main-react17(用于后续部署)，则子应用基础路由(baseroute)为/main-react17/xxx
    <BrowserRouter basename='/main-react17'>
      <div id='router-container'>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/app-nextjs11">
            <Suspense fallback={<div>Loading...</div>}>
              <Nextjs11 />
            </Suspense>
          </Route>
          <Route path="/app-nuxtjs2">
            <Suspense fallback={<div>Loading...</div>}>
              <Nuxtjs2 />
            </Suspense>
          </Route>
          <Route path="/app-react16">
            <Suspense fallback={<div>Loading...</div>}>
              <React16 />
            </Suspense>
          </Route>
          <Route path="/app-react17">
            <Suspense fallback={<div>Loading...</div>}>
              <React17 />
            </Suspense>
          </Route>
          <Route path="/app-vite">
            <Suspense fallback={<div>Loading...</div>}>
              <Vite />
            </Suspense>
          </Route>
          <Route path="/app-vue3">
            <Suspense fallback={<div>Loading...</div>}>
              <Vue3 />
            </Suspense>
          </Route>
          <Route path="/app-webpack5">
            <Suspense fallback={<div>Loading...</div>}>
              <Webpack5 />
            </Suspense>
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
