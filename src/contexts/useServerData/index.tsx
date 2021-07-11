import { createContext, useContext, useState, useEffect } from 'react'
import { saveToLocalStorage, getFromLocalStorage } from 'utils'
import { DATA_ENDPOINT } from '../../constants'
import { ServerDataContextState } from './types'

const defaultServerDataState: ServerDataContextState = {
  loading: false,
  serverData: getFromLocalStorage<ServerObject[]>('serverData', []),
}
const ServerDataContext = createContext<ServerDataContextState>(
  defaultServerDataState,
)

export const ServerDataProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [serverData, setServerData] = useState(
    defaultServerDataState.serverData,
  )

  console.log(serverData)

  useEffect(() => {
    const fetchSetupedData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${DATA_ENDPOINT}/ServerData.json`)
        const data = (await response.json()) as Record<string, ServerObject>
        const serverArray = Object.values(data)

        saveToLocalStorage('serverData', serverArray)
        setServerData(serverArray)
      } catch (error: unknown) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchSetupedData()
  }, [])

  return (
    <ServerDataContext.Provider
      value={{
        loading,
        serverData,
      }}
    >
      {children}
    </ServerDataContext.Provider>
  )
}

export const useServerData = (): ServerDataContextState =>
  useContext(ServerDataContext)
