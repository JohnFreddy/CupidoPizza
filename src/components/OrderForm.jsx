import { useState } from 'react'

const PIZZA_OPTIONS = [
  'Margarita',
  'Pepperoni',
  'Hawaiana',
  'Cuatro Quesos',
  'Vegetariana',
  'BBQ',
  'Mexicana'
]

const SIZE_OPTIONS = [
  { value: 'pequeña', label: 'Pequeña (8")' },
  { value: 'mediana', label: 'Mediana (12")' },
  { value: 'grande', label: 'Grande (16")' }
]

function OrderForm({ onSubmit, loading, error }) {
  const [formData, setFormData] = useState({
    pizza: '',
    size: '',
    contactInfo: ''
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!formData.pizza) {
      newErrors.pizza = 'Selecciona una pizza'
    }

    if (!formData.size) {
      newErrors.size = 'Selecciona un tamaño'
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Ingresa tu nombre o número de mesa'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      onSubmit(formData)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6">
      {/* Pizza Selection */}
      <div>
        <label htmlFor="pizza" className="block text-sm font-semibold text-gray-900 mb-2">
          Pizza *
        </label>
        <select
          id="pizza"
          name="pizza"
          value={formData.pizza}
          onChange={handleChange}
          className={`input ${errors.pizza ? 'input-error' : ''}`}
          disabled={loading}
        >
          <option value="">Selecciona una pizza</option>
          {PIZZA_OPTIONS.map(pizza => (
            <option key={pizza} value={pizza}>
              {pizza}
            </option>
          ))}
        </select>
        {errors.pizza && (
          <p className="mt-1 text-sm text-red-600">{errors.pizza}</p>
        )}
      </div>

      {/* Size Selection */}
      <div>
        <label htmlFor="size" className="block text-sm font-semibold text-gray-900 mb-2">
          Tamaño *
        </label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className={`input ${errors.size ? 'input-error' : ''}`}
          disabled={loading}
        >
          <option value="">Selecciona un tamaño</option>
          {SIZE_OPTIONS.map(size => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
        {errors.size && (
          <p className="mt-1 text-sm text-red-600">{errors.size}</p>
        )}
      </div>

      {/* Contact Info */}
      <div>
        <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-900 mb-2">
          Nombre o Mesa *
        </label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Ej: Mesa 5 o Juan Pérez"
          maxLength={50}
          className={`input ${errors.contactInfo ? 'input-error' : ''}`}
          disabled={loading}
        />
        {errors.contactInfo && (
          <p className="mt-1 text-sm text-red-600">{errors.contactInfo}</p>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 font-medium">⚠️ {error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full text-lg py-4"
        disabled={loading}
      >
        {loading ? 'Enviando...' : '✓ Confirmar Pedido'}
      </button>
    </form>
  )
}

export default OrderForm
