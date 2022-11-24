import { useEffect, useState, useCallback } from 'react'
import api from '@/api/api'
import { useDispatch } from 'react-redux'

const initialState = {
  data: [],
  isLoading: true,
  error: null,
}

const useFetch = (endpoint, setState) => {
  const dispatch = useDispatch()
  const [fetchedData, setFetchedData] = useState(initialState)

  const fetchData = useCallback(async () => {
    try {
      const { data } = await api().get(endpoint)
      setFetchedData({
        isLoading: false,
        error: null,
        data,
      })
      dispatch(setState(data)) // seteo de la info en redux app
    } catch (error) {
      setFetchedData({
        data: null,
        isLoading: false,
        error,
      })
    }
  }, [endpoint])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const { error, isLoading } = fetchedData
  return { error, isLoading }
}

export default useFetch
