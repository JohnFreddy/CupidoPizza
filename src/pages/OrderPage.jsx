import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../services/api'
import OrderForm from '../components/OrderForm'

function OrderPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (orderData) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await createOrder(orderData)
      setSuccess(true)
      
      // Mostrar mensaje y redirigir después de 3 segundos
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      setError(err.message || 'Error al crear el pedido')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card max-w-md w-full p-8 text-center animate-[fadeIn_0.5s_ease]">
          <div className="text-6xl mb-4 animate-bounce">✅</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            ¡Pedido Recibido!
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Tu pedido ha sido enviado a la cocina.
          </p>
          <p className="text-gray-600 mb-8">
            Te avisaremos cuando esté listo.
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-lg"
          >
            ← Volver
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">🍕 Hacer Pedido</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <OrderForm
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  )
}

export default OrderPage
