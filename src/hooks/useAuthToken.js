import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { setAuthToken } from '../services/api'

/**
 * Hook personalizado para manejar el token de Auth0
 * Se encarga de obtener y actualizar el token automáticamente
 */
export function useAuthToken() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [tokenReady, setTokenReady] = useState(false)

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently({
            authorizationParams: {
              audience: import.meta.env.VITE_AUTH0_AUDIENCE,
              scope: 'openid profile email'
            }
          })
          setAuthToken(token)
          setTokenReady(true)
        } catch (error) {
          console.error('Error obteniendo token:', error)
          setAuthToken(null)
          setTokenReady(false)
        }
      } else {
        setAuthToken(null)
        setTokenReady(false)
      }
    }

    getToken()
  }, [isAuthenticated, getAccessTokenSilently])

  return tokenReady
}

export default useAuthToken
