import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getAllOrders, updateOrderStatus } from '../services/api'
import { useAuthToken } from '../hooks/useAuthToken'
import OrderList from '../components/OrderList'

function AdminPage() {
  const { user, logout } = useAuth0()
  const tokenReady = useAuthToken() // Hook para manejar el token automáticamente
  
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  const fetchOrders = async () => {
    // No hacer petición si el token no está listo
    if (!tokenReady) {
      return
    }

    try {
      setLoading(true)
      const data = await getAllOrders(filter === 'all' ? null : filter)
      setOrders(data)
      setError(null)
    } catch (err) {
      setError(err.message || 'Error al cargar pedidos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Solo ejecutar cuando el token esté listo
    if (tokenReady) {
      fetchOrders()
      
      // Auto-refresh cada 20 segundos
      const interval = setInterval(fetchOrders, 20000)
      return () => clearInterval(interval)
    }
  }, [filter, tokenReady])

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus)
      // Actualizar la lista localmente
      setOrders(orders.map(order => 
        order._id === orderId 
          ? { ...order, status: newStatus }
          : order
      ))
    } catch (err) {
      setError(err.message || 'Error al actualizar estado')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">🍕 Panel de Administración</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">👤 {user?.name}</span>
              <button 
                onClick={() => logout({ returnTo: window.location.origin })} 
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pendiente'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('pendiente')}
            >
              Pendientes
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'en_preparacion'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('en_preparacion')}
            >
              En Preparación
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'listo'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('listo')}
            >
              Listos
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'entregado'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('entregado')}
            >
              Entregados
            </button>
          </div>
        </div>

        {/* Content */}
        <main>
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full"></div>
              <p className="mt-4 text-gray-600 font-medium">Cargando pedidos...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 font-medium">⚠️ {error}</p>
            </div>
          )}
          
          {!loading && !error && (
            <>
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <p className="text-lg font-semibold text-gray-700">
                  📊 Total de pedidos: <span className="text-primary-600">{orders.length}</span>
                </p>
              </div>
              <OrderList 
                orders={orders} 
                onStatusChange={handleStatusChange}
              />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminPage
