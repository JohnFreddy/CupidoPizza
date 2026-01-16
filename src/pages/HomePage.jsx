import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b-2 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              <span className="text-3xl">🍕</span>
              <span className="hidden sm:inline">Cupido Pizza</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                <span className="text-xl">📄</span>
                <span className="hidden sm:inline">Menú</span>
              </a>

              <Link
                to="/pedido"
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
              >
                <span className="text-xl">🛒</span>
                <span className="hidden sm:inline">Pedir</span>
              </Link>

              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                <span className="text-xl">👨‍💼</span>
                <span className="hidden md:inline text-sm">Admin</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            🍕 Cupido Pizza
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            La mejor pizza artesanal de la ciudad
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
        {/* Info Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            En Cupido Pizza creamos pizzas artesanales con ingredientes frescos
            y de la más alta calidad. Cada pizza es preparada con amor y dedicación
            para ofrecerte la mejor experiencia culinaria.
          </p>
        </section>

        {/* Details Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              🕐 Horarios
            </h3>
            <p className="text-gray-700 font-medium">Lunes a Domingo</p>
            <p className="text-gray-700">12:00 PM - 11:00 PM</p>
          </div>

          <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              📍 Ubicación
            </h3>
            <p className="text-gray-700 font-medium">Av. Principal #123</p>
            <p className="text-gray-700">Col. Centro</p>
          </div>

          <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              🍕 Especialidad
            </h3>
            <p className="text-gray-700 font-medium">Pizzas artesanales</p>
            <p className="text-gray-700">Masa madre tradicional</p>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full md:w-auto"
          >
            📄 Ver Menú Completo
          </a>

          <Link to="/pedido" className="btn btn-primary w-full md:w-auto">
            🛒 Hacer un Pedido
          </Link>
        </section>

        {/* Featured Pizzas Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestras Pizzas Estrella
          </h2>

          {/* Pizza 1 - Margarita Clásica */}
          <div className="card overflow-hidden mb-8 group">
            <div className="md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop"
                  alt="Pizza Margarita"
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  🍅 Margarita Clásica
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Nuestra pizza más emblemática. Salsa de tomate casera, mozzarella fresca 
                  de búfala, albahaca aromática y un toque de aceite de oliva extra virgen. 
                  Simple, auténtica y absolutamente deliciosa.
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold">La favorita de nuestros clientes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pizza 2 - Pepperoni Premium */}
          <div className="card overflow-hidden mb-8 group">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop"
                  alt="Pizza Pepperoni"
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  🔥 Pepperoni Premium
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Generosas rodajas de pepperoni de primera calidad sobre una cama de 
                  queso mozzarella fundido. Horneada a la perfección hasta que los bordes 
                  del pepperoni estén ligeramente crujientes. Un clásico irresistible.
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">🌶️</span>
                  <span className="font-semibold">Perfecta para los amantes del sabor intenso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pizza 3 - Cuatro Quesos */}
          <div className="card overflow-hidden group">
            <div className="md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop"
                  alt="Pizza Cuatro Quesos"
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  🧀 Cuatro Quesos Gourmet
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Una sinfonía de sabores con mozzarella, gorgonzola, parmesano y provolone. 
                  Cada queso aporta su carácter único creando una experiencia cremosa e 
                  inolvidable. Para los verdaderos conocedores del queso.
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">👨‍🍳</span>
                  <span className="font-semibold">Creación del chef - Edición limitada</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="text-center">
          <p className="">© 2026 Cupido Pizza - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
