import Link from 'next/link';
import { Tree } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Tree className="h-8 w-8" />
          <span>Escuela La Vara</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/sobre-nosotros" className="hover:text-green-200 transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/ultimas-noticias" className="hover:text-green-200 transition-colors">Últimas Noticias</Link></li>
            <li><Link href="/contacto" className="hover:text-green-200 transition-colors">Contacto</Link></li>
            <li><Link href="/documentacion" className="hover:text-green-200 transition-colors">Documentación</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}