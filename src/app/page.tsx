import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-12">
        <h2 className="text-6xl font-extrabold mb-4">
          {"<Roundest Pokémon/>"}
        </h2>
        <p className="text-lg">
          A fun game to find the roundest Pokémon in the universe!
        </p>
        <p className="text-md text-gray-500">
          {"~ "}Inspired by Theo&#39;s &#34;
          <a
            href="https://youtu.be/O-EWIlZW0mM?si=wZ6OFGzOAtcEeNPs"
            target="_blank"
            className="underline"
          >
            I built the same app with 5 different stacks&#34;
          </a>{" "}
          video{" ~"}
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 shadow border-2 rounded-lg">
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

        <section className="p-6 shadow border-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            The Twist: Choose Your Backend!
          </h3>
          <p className="mb-4">
            When you vote, you can choose which backend system processes your
            vote. Don&#39;t worry if you&#39;re not tech-savvy - this is just a
            fun way to show how different computer systems can work together!
          </p>
          <p className="">
            No matter which backend you choose, all votes end up in the same
            place. It&#39;s like mailing a letter - you can use different post
            offices, but they all reach the same destination!
          </p>
        </section>

        <section className="p-6 shadow border-2 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Play?</h3>
          <p className="mb-6">
            Click the &#34;Vote&#34; button to start judging Pokémon roundness
            or see the current standings!
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/vote">Vote Now</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/results">See Results</Link>
            </Button>
          </div>
        </section>

        <section className="p-6 shadow border-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">More Information</h3>
          <p className="mb-4">
            Curious about how this works? Or want to know more about the
            creator? Explore these links:
          </p>
          <div className="flex space-x-4">
            <Button asChild variant="secondary">
              <Link href="/code">View Code</Link>
            </Button>

            <Button asChild variant="secondary">
              <Link href="/author">About the Author</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
