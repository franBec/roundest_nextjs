import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Understanding the Code Behind <em>Roundest Pokémon</em>
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">The Architecture</h2>
        <p className="leading-relaxed">
          The <em>Roundest Pokémon</em> app demonstrates an interesting
          experiment in backend architecture. At its core, the system is
          designed with:
        </p>
        <ul className="list-disc list-inside ml-4 my-4">
          <li>
            <strong>One Frontend App</strong>: A single frontend app built with
            Next.js, which serves as the interface for users to vote on the
            roundest Pokémon.
          </li>
          <li>
            <strong>Multiple Backend Systems</strong>: Several backend systems
            implemented using different technologies. Each one processes votes
            independently before funneling the results into a shared database.
          </li>
        </ul>
        <p className="">
          This setup highlights how diverse backend technologies can be
          integrated seamlessly, all while providing users with a unified
          experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold mb-2">Why Next.js for the Frontend?</h2>
        <p className="leading-relaxed">
          As a developer with a strong backend focus,{" "}
          {
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Next.js
            </Link>
          }{" "}
          is an excellent choice for the frontend because:
        </p>
        <ul className="list-disc list-inside ml-4 my-4">
          <li>
            <strong>Developer Productivity</strong>: With tools like{" "}
            {
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Tailwind CSS
              </Link>
            }{" "}
            for styling and{" "}
            {
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                shadcn/ui
              </Link>
            }{" "}
            for pre-built UI, Next.js helps you focus on functionality without
            getting bogged down by frontend intricacies.
          </li>
          <li>
            <strong>Performance</strong>: Next.js is optimized out of the box,
            with features like automatic static optimization and image
            optimization.
          </li>
          <li>
            <strong>Routing</strong>: If you&#39;re used to structured backend
            frameworks, you&#39;ll appreciate how Next.js organizes its routes.
          </li>
          <li>
            <strong>Abundance of Resources</strong>: Next.js has become a
            well-established framework, supported by an active community and a
            wealth of resources. You&#39;ll find countless tutorials, libraries,
            tools, and community contributions.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">The Backend Systems</h2>
        <p className="leading-relaxed">
          The backend systems showcase a variety of popular JVM-based
          frameworks, each with unique strengths:
        </p>
        <ul className="list-disc list-inside ml-4 my-4">
          <li>
            <strong>Java Spring Boot</strong>: Known for its robustness and
            extensive community support, Java Spring Boot is a reliable choice
            for enterprise-grade applications. It offers a wide range of tools
            and integrations to handle complex business logic.
          </li>
          <li>
            <strong>Kotlin Spring Boot</strong>: Combining Spring Boot&#39;s
            power with Kotlin&#39;s concise and modern syntax, this option is
            perfect for developers who value readability and fewer boilerplate
            codes. Kotlin also brings null safety, making applications less
            error-prone.
          </li>
          <li>
            <strong>Groovy Spring Boot</strong>: Groovy&#39;s dynamic and
            expressive syntax, combined with Spring Boot&#39;s capabilities,
            makes it a great choice for rapid development and scripting-oriented
            tasks. It’s ideal for teams looking for flexibility in prototyping.
          </li>
        </ul>
        <p>
          By using these varied backend systems, the app demonstrates how
          different frameworks can solve the same problem in unique ways while
          working together towards a common goal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Repositories</h2>
        <p className="leading-relaxed">
          Explore the codebases for both the frontend and backend systems:
        </p>
        <ul className="list-disc list-inside ml-4 my-4">
          <li>
            <Link
              href="https://github.com/franBec/roundest_nextjs"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Frontend (Next.js)
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/franBec/roundest_java"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Java Spring Boot Backend
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/franBec/roundest_kotlin"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Kotlin Spring Boot Backend
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/franBec/roundest_groovy"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Groovy Spring Boot Backend
            </Link>
          </li>
        </ul>
        <p>Check them out to dive deeper into how the system is implemented!</p>
      </section>
    </main>
  );
}
