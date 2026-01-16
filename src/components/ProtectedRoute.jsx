import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-4">
        <div className="card max-w-md w-full p-8 text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Acceso Administrador
          </h2>
          <p className="text-gray-600 mb-8">
            Inicia sesión para acceder al panel de administración
          </p>
          <button 
            onClick={() => loginWithRedirect({
              appState: { returnTo: '/admin' }
            })}
            className="btn btn-primary w-full text-lg py-4"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
