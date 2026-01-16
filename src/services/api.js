import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Interceptor para agregar token de Auth0 a requests protegidos
 */
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

/**
 * Crear un nuevo pedido (público)
 */
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/api/orders', orderData)
    return response.data.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Error al crear el pedido'
    )
  }
}

/**
 * Obtener todos los pedidos (admin)
 */
export const getAllOrders = async (status = null) => {
  try {
    const params = status ? { status } : {}
    const response = await api.get('/api/orders', { params })
    return response.data.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Error al obtener los pedidos'
    )
  }
}

/**
 * Obtener un pedido por ID (admin)
 */
export const getOrderById = async (orderId) => {
  try {
    const response = await api.get(`/api/orders/${orderId}`)
    return response.data.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Error al obtener el pedido'
    )
  }
}

/**
 * Actualizar estado de un pedido (admin)
 */
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await api.patch(`/api/orders/${orderId}/status`, { status })
    return response.data.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Error al actualizar el estado'
    )
  }
}

export default api
