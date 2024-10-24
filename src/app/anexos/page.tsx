import Layout from '../components/Layout'

export default function Anexos() {
  return (
    <Layout>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Anexos</h1>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <a href="/docs/calendario_escolar.pdf" className="text-blue-600 hover:underline">Calendario Escolar</a>
          </li>
          <li className="mb-2">
            <a href="/docs/reglamento_interno.pdf" className="text-blue-600 hover:underline">Reglamento Interno</a>
          </li>
          <li className="mb-2">
            <a href="/docs/lista_utiles.pdf" className="text-blue-600 hover:underline">Lista de Útiles</a>
          </li>
          <li>
            <a href="/docs/actividades_extracurriculares.pdf" className="text-blue-600 hover:underline">Actividades Extracurriculares</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}