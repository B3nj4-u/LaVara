import Link from 'next/link'
import { ReactNode } from 'react'
import Tree from './Tree'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Árbol */}
      <Tree />
      
      {/* Header (Copa del árbol) */}
      <header >
        <div className="container mx-auto px-4">
          <div className="h-24 flex items-center justify-between relative">
            <Link href="/" className="text-2xl font-bold z-20">La Vara</Link>
            <nav className="z-20">
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Inicio</Link></li>
                <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
                <li><Link href="/noticias" className="hover:underline">Noticias</Link></li>
                <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
                <li><Link href="/anexos" className="hover:underline">Anexos</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal (Tronco del árbol) */}
      <main className="flex-grow relative z-10 py-8">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      {/* Footer (Raíces del árbol) */}
      <footer className="text-white p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Escuela La Vara. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="/politica-privacidad" className="hover:underline">Política de Privacidad</Link>
            <Link href="/terminos-condiciones" className="hover:underline">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}