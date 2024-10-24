import Layout from '../components/Layout'

export default function Contacto() {
  return (
    <Layout>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="mb-4">Estamos aquí para responder a tus preguntas y escuchar tus comentarios.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block mb-1">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="mensaje" className="block mb-1">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows={4} className="w-full p-2 border rounded" required></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Enviar</button>
        </form>
      </div>
    </Layout>
  )
}