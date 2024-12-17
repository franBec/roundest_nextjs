import Link from "next/link";

export const HeaderTitle = () => (
  <h1 className="text-2xl font-bold sm:text-xl">
    <Link href="/" className="hover:underline">
      &lt;Roundest Pokémon/&gt;
    </Link>
  </h1>
);
