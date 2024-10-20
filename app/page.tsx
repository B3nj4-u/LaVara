import Image from 'next/image';

const images = [
  'https://source.unsplash.com/random/800x400?school',
  'https://source.unsplash.com/random/800x400?education',
  'https://source.unsplash.com/random/800x400?learning',
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Bienvenidos a Escuela La Vara</h1>
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
          <Image
            src={images[0]}
            alt="Escuela La Vara"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Nuestra Misión</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          En Escuela La Vara, nos dedicamos a nutrir las mentes jóvenes y cultivar un amor por el aprendizaje que durará toda la vida. 
          Nuestro enfoque integral de la educación prepara a los estudiantes para los desafíos del mañana.
        </p>
      </div>
    </div>
  );
}