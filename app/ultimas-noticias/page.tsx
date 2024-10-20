import { getNews } from '@/lib/db';

export default async function UltimasNoticias() {
  const news = await getNews();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Últimas Noticias</h1>
      <ul className="space-y-6">
        {news.map((item) => (
          <li key={item.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-3">{item.date}</p>
            <p className="text-gray-700">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}