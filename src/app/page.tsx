import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Welcome to Roundest Pokémon!</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">What&#39;s This All About?</h3>
        <p className="mb-4">
          Roundest Pokémon is a fun and simple game where you get to decide which Pokémon is the roundest!
        </p>
        <p className="mb-4">
          Here&#39;s how it works:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>You&#39;ll be shown two Pokémon side by side.</li>
          <li>Your job is to pick the one you think is rounder.</li>
          <li>Click on the Pokémon you choose, and your vote will be counted!</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">The Twist: Choose Your Backend!</h3>
        <p className="mb-4">
          Now, here&#39;s where it gets interesting. When you vote, you can choose which backend system processes your vote.
          Don&#39;t worry if you&#39;re not tech-savvy - this is just a fun way to show how different computer systems can work
          together!
        </p>
        <p>
          No matter which backend you choose, all votes end up in the same place. It&#39;s like mailing a letter - you can
          use different post offices, but they all reach the same destination!
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Ready to Play?</h3>
        <p className="mb-4">
          Click the &#34;Vote&#34; button below to start judging Pokémon roundness!
        </p>
        <p className="mb-4">
          Want to see which Pokémon are winning? Check out the &#34;Results&#34; page!
        </p>
        <div className="flex space-x-4">
          <Link href="/vote"
                className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200">
            Vote Now
          </Link>
          <Link href="/results"
                className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200">
            See Results
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">More Information</h3>
        <p className="mb-4">
          Curious about how this works? Want to know more about the creator? Check out these links:
        </p>
        <div className="flex space-x-4">
          <Link href="/code"
                className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200">
            View Code
          </Link>
          <Link href="/author"
                className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200">
            About the Author
          </Link>
        </div>
      </section>
    </>

  );
}
