import React, { useEffect, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { useGetter, useDispatch } from '@/store'
import { useDimensions } from '@/utils/hooks'
import { useNavigationComponentDidDisappear } from '@/navigation'
import { screenUnkeepAwake } from '@/utils/utils'

import Portrait from './Portrait'
import Landscape from './Landscape'

export default (props) => {
  // const theme = useGetter('common', 'theme')
  const setComponentId = useDispatch('common', 'setComponentId')
  const { window } = useDimensions()
  useEffect(() => {
    setComponentId({ name: 'playDetail', id: props.componentId })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useNavigationComponentDidDisappear(props.componentId, () => {
    screenUnkeepAwake()
  })

  return (
    window.width > window.height ? <Landscape /> : <Portrait componentId={props.componentId} />
  )
}
