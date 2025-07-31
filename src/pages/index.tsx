import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js SSR vs SSG – demo</h1>
      <ul>
        <li>
          <Link href="/ssg">SSG – Statyczna godzina</Link>
        </li>
        <li>
          <Link href="/ssr">SSR – Aktualna godzina</Link>
        </li>
      </ul>
    </main>
  );
}
