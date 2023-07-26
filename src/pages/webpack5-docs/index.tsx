/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const React17 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('webpack5-docs 创建了')
  }

  function handleBeforeMount () {
    console.log('webpack5-docs 即将被渲染')
  }

  function handleMount () {
    console.log('webpack5-docs 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('webpack5-docs 卸载了')
  }

  function handleError () {
    console.log('webpack5-docs 加载出错了')
  }

  function handleDataChange (e: CustomEvent) {
    console.log('来自子应用 webpack5-docs 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-webpack5-docs'
        url={`${config.webpack5}/child/webpack5-docs/`}
        data={microAppData}
        onCreated={handleCreate}
        onBeforemount={handleBeforeMount}
        onMounted={handleMount}
        onUnmount={handleUnmount}
        onError={handleError}
        onDataChange={handleDataChange}
      ></micro-app>
    </div>
  )
}

export default React17
