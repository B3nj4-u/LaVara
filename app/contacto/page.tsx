export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Contacto</h1>
      <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition-colors">Enviar</button>
      </form>
    </div>
  );
}