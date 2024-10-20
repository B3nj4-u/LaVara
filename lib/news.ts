// This is a mock implementation. In a real application, you would use a database.
let news = [
  {
    id: 1,
    title: 'Inicio del Año Escolar 2024',
    date: '2024-03-01',
    content: 'Nos complace anunciar el inicio del año escolar 2024. Damos la bienvenida a todos nuestros estudiantes y familias.',
  },
  {
    id: 2,
    title: 'Feria de Ciencias Anual',
    date: '2024-05-15',
    content: 'Invitamos a todos los estudiantes a participar en nuestra Feria de Ciencias Anual. ¡Preparen sus proyectos!',
  },
  {
    id: 3,
    title: 'Nuevos Talleres Extracurriculares',
    date: '2024-04-10',
    content: 'Estamos emocionados de anunciar nuevos talleres extracurriculares, incluyendo robótica y arte digital.',
  },
];

export async function getLatestNews() {
  return news;
}

export async function addNews(newItem) {
  const id = Math.max(...news.map(item => item.id), 0) + 1;
  const date = new Date().toISOString().split('T')[0];
  const newsItem = { id, date, ...newItem };
  news.push(newsItem);
  return newsItem;
}

export async function updateNews(id, updatedItem) {
  news = news.map(item => 
    item.id === id ? { ...item, ...updatedItem } : item
  );
  return news.find(item => item.id === id);
}

export async function deleteNews(id) {
  news = news.filter(item => item.id !== id);
}