import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Page = () => {
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
            rel="noreferrer"
          >
            I built the same app with 5 different stacks&#34;
          </a>{" "}
          video{" ~"}
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What&#39;s This All About?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Roundest Pokémon is a simple and entertaining game where you
              decide which Pokémon is the roundest!
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>You&#39;ll be shown two Pokémon side by side.</li>
              <li>Your job is to pick the one you think is rounder.</li>
              <li>Your vote will be counted and contribute to the results!</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Twist: Choose Your Backend!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src="/images/backend-selector.gif"
                alt="Backend Selector Animation"
                className="mb-4 rounded-lg"
              />
            </div>
            <p className="mb-4">
              On the top of the page, you can choose which backend system
              processes your vote (Next.js + _). Don&#39;t worry if you&#39;re
              not tech-savvy - this is just a fun way to show how different
              computer systems can work together!
            </p>
            <div className="flex justify-center">
              <img
                src="/images/vote-flow.gif"
                alt="Backend Selector Animation"
                className="mb-4 rounded-lg"
              />
            </div>
            <p className="">
              No matter which backend you choose, all votes end up in the same
              place. It&#39;s like mailing a letter - you can use different post
              offices, but they all reach the same destination!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ready to Play?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Click the &#34;Vote&#34; button to start judging Pokémon roundness
              or see the current standings!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/vote">Vote Now</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/pokemons">See Results</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>More Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Curious about how this works? Or want to know more about the
              creator? Explore these links:
            </p>
          </CardContent>
          <CardFooter className="flex space-x-4">
            <Button asChild variant="secondary">
              <Link href="/about">About the project</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/author">About the Author</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
