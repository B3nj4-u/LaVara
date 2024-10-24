import Layout from '../components/Layout'

export default function Nosotros() {
  return (
    <Layout>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="mb-4">
          La Vara es una institución educativa fundada con la visión de crear un ambiente
          de aprendizaje que nutre el crecimiento integral de nuestros estudiantes.
        </p>
        <p>
          Así como un árbol crece desde sus raíces hasta su copa, nosotros fomentamos
          el desarrollo de nuestros alumnos desde sus fundamentos hasta alcanzar sus
          más altas aspiraciones.
        </p>
      </div>
    </Layout>
  )
}