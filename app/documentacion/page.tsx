export default function Documentacion() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Documentación Obligatoria</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Reglamento Interno</li>
          <li>Proyecto Educativo Institucional</li>
          <li>Protocolo de Seguridad</li>
          <li>Calendario Escolar</li>
          <li>Formularios de Inscripción</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Para acceder a estos documentos, por favor contacte a la secretaría de la escuela.
        </p>
      </div>
    </div>
  );
}