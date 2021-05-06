import { useState, useEffect } from 'react'

export const useViewMode = () => {
  const [wiewMode , setViewMode] = useState('vertical')
  const [componentMounted, setComponentMounted] = useState(false);

  const toggleMode = () => {
    if (wiewMode === 'vertical') {
      window.localStorage.setItem('viewMode', 'horizontal')
      setViewMode('horizontal')
    } else {
      window.localStorage.setItem('viewMode', 'vertical')
      setViewMode('vertical')
    }
  }

  useEffect(() => {
    const localMode = window.localStorage.getItem('viewMode');
    localMode && setViewMode(localMode)

    if (localMode) {
      setViewMode(localMode);
    } else {
      setViewMode('vertical')
      window.localStorage.setItem('viewMode', 'vertical')
    }
    setComponentMounted(true)
  }, [])

  return [wiewMode, toggleMode, componentMounted]
}
