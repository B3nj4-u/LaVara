import Layout from '../components/Layout'

export default function Noticias() {
  return (
    <Layout>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Noticias y Eventos</h1>
        <ul className="list-disc pl-5">
          <li className="mb-2">Feria de Ciencias: Explorando las ramas del conocimiento</li>
          <li className="mb-2">Día del Árbol: Plantación comunitaria en el campus</li>
          <li className="mb-2">Taller de Arte: Dibujando la naturaleza</li>
          <li>Conferencia: El ciclo de vida de los árboles y su importancia ecológica</li>
        </ul>
      </div>
    </Layout>
  )
}