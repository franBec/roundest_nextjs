import Link from "next/link";

const HeaderTitle = () => (
  <h1 className="text-2xl font-bold sm:text-xl">
    <Link href="/" className="hover:underline">
      &lt;Roundest Pokémon/&gt;
    </Link>
  </h1>
);
export default HeaderTitle;
