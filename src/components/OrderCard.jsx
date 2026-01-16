import { useState } from 'react'

const STATUS_CONFIG = {
  pendiente: {
    label: 'Pendiente',
    icon: '⏳',
    colorClass: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    next: 'en_preparacion'
  },
  en_preparacion: {
    label: 'En Preparación',
    icon: '👨‍🍳',
    colorClass: 'bg-blue-100 text-blue-800 border-blue-300',
    next: 'listo'
  },
  listo: {
    label: 'Listo',
    icon: '✅',
    colorClass: 'bg-green-100 text-green-800 border-green-300',
    next: 'entregado'
  },
  entregado: {
    label: 'Entregado',
    icon: '🎉',
    colorClass: 'bg-gray-100 text-gray-800 border-gray-300',
    next: null
  }
}

function OrderCard({ order, onStatusChange }) {
  const [isUpdating, setIsUpdating] = useState(false)
  
  const statusInfo = STATUS_CONFIG[order.status] || STATUS_CONFIG.pendiente
  
  const handleNextStatus = async (newStatus) => {
    // No hacer nada si es el mismo estado
    if (newStatus === order.status || isUpdating) return
    
    setIsUpdating(true)
    try {
      await onStatusChange(order._id, newStatus)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-start justify-between mb-6 pb-4 border-b-2 border-gray-200">
        <span className={`badge ${statusInfo.colorClass} text-base px-4 py-2`}>
          {statusInfo.icon} {statusInfo.label}
        </span>
        <span className="text-sm text-gray-500 font-medium">
          {formatDate(order.createdAt)}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <strong className="text-gray-700 font-semibold">Pizza:</strong>
          <span className="text-gray-900 text-lg font-medium">🍕 {order.pizza}</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <strong className="text-gray-700 font-semibold">Tamaño:</strong>
          <span className="text-gray-900 capitalize font-medium">{order.size}</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <strong className="text-gray-700 font-semibold">Mesa/Nombre:</strong>
          <span className="text-gray-900 font-medium">{order.contactInfo}</span>
        </div>
      </div>

      {/* Estado Selector */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">
          Cambiar estado:
        </label>
        <select
          value={order.status}
          onChange={(e) => handleNextStatus(e.target.value)}
          disabled={isUpdating}
          className="input w-full text-base font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="pendiente">⏳ Pendiente</option>
          <option value="en_preparacion">👨‍🍳 En Preparación</option>
          <option value="listo">✅ Listo</option>
          <option value="entregado">🎉 Entregado</option>
        </select>
        
        {isUpdating && (
          <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium">
            <div className="animate-spin h-4 w-4 border-2 border-primary-600 border-t-transparent rounded-full"></div>
            <span>Actualizando...</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderCard
