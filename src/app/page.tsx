import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          Welcome to Roundest Pokémon!
        </h2>
        <p className="text-lg">
          A fun game to find the roundest Pokémon in the universe!
        </p>
      </header>

      <main className="max-w-3xl mx-auto">
        <section className="mb-10 p-6 shadow border-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            What&#39;s This All About?
          </h3>
          <p className="mb-4">
            Roundest Pokémon is a simple and entertaining game where you decide
            which Pokémon is the roundest!
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>You&#39;ll be shown two Pokémon side by side.</li>
            <li>Your job is to pick the one you think is rounder.</li>
            <li>Your vote will be counted and contribute to the results!</li>
          </ul>
        </section>

        <section className="mb-10 p-6 shadow border-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            The Twist: Choose Your Backend!
          </h3>
          <p className="mb-4">
            When you vote, you can select which backend system processes your
            vote. It&#39;s a playful way to explore how systems work!
          </p>
          <p className="">
            No matter your choice, all votes end up in the same place, just like
            letters in the mail!
          </p>
        </section>

        <section className="mb-10 p-6 shadow border-2 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Play?</h3>
          <p className="mb-6">
            Click the &#34;Vote&#34; button to start judging Pokémon roundness
            or see the current standings!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/vote"
              className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              Vote Now
            </Link>
            <Link
              href="/results"
              className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              See Results
            </Link>
          </div>
        </section>

        <section className="p-6 shadow border-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">More Information</h3>
          <p className="mb-4">
            Curious about the backend? Or want to know more about the creator?
            Explore these links:
          </p>
          <div className="flex space-x-4">
            <Link
              href="/code"
              className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              View Code
            </Link>
            <Link
              href="/author"
              className="border border-foreground text-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              About the Author
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
