import { useEffect, useState } from 'react'
import axios from 'axios'
import { IData } from '../components/Header/Header'

const useNavigation = (): IData[] => {
  const [navigation, setNavigation] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('../config/navigation.json')
      setNavigation(response.data.navigation)
    }
    fetch()
  })

  return navigation
}

export default useNavigation
