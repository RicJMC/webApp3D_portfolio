import Link from 'next/link';
import "../src/app/globals.css"

export default function Home() {
  return (
    <div className="containerhome">
      <h1 className="title">Bem-vind@ ao treino</h1>
      <div className="buttons">
        <Link href="/alongamento" passHref>
          <span className="button link-zoom">Treino de Alongamento</span>
        </Link>
        <Link href="/fortalecimento" passHref>
          <span className="button link-zoom">Treino de Fortalecimento</span>
        </Link>
      </div>
    </div>
  );
}
