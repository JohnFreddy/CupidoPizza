import OrderCard from './OrderCard'

function OrderList({ orders, onStatusChange }) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-xl text-gray-600 font-medium">No hay pedidos para mostrar</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {orders.map(order => (
        <OrderCard 
          key={order._id}
          order={order}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  )
}

export default OrderList
