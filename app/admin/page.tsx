'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      loadNews();
    }
  }, [status, router]);

  const loadNews = async () => {
    const res = await fetch('/api/news');
    const data = await res.json();
    setNews(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`/api/news/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
    } else {
      await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
    }
    setTitle('');
    setContent('');
    setEditingId(null);
    loadNews();
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      await fetch(`/api/news/${id}`, { method: 'DELETE' });
      loadNews();
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Gestionar Noticias</h2>
      <button onClick={() => signOut()} className="mb-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
        Cerrar Sesión
      </button>
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Contenido</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          {editingId ? 'Actualizar Noticia' : 'Agregar Noticia'}
        </button>
      </form>

      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(item)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md hover:bg-blue-600 transition-colors">
                Editar
              </button>
              <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white font-bold py-1 px-3 rounded-md hover:bg-red-600 transition-colors">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}