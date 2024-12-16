import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Franco Exequiel Becvort
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/profile-photo.jpg"
          alt="Profile Photo"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Java Spring Boot developer for Ecuador&#39;s largest private bank
            </li>
            <li>
              Google Cloud Certified: Digital Leader / Associate Engineer /
              Professional Architect
            </li>
            <li>Microsoft Azure Certified: Azure Fundamentals</li>
            <li>Scrum Master Certified by Scrum.org</li>
            <li>English C2 Proficient Certified by EF SET</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Career Overview</h2>
        <p>
          My career has spanned various sectors, including government,
          healthcare, and banking. My current role as backend developer for
          Ecuador&#39;s largest private bank highlights my proficiency in
          handling sensitive, large-scale projects.
        </p>
        <p>
          My academic roots as a researcher at the Universidad Nacional de San
          Luis reflect my deep commitment to continuous learning and knowledge
          sharing.
        </p>
        <p>
          This passion for education also is the foundation of my{" "}
          <a
            href="https://pollito.dev/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            programming blog.
          </a>{" "}
          There, I dive into the intricacies of web development (mainly in Java
          Spring Boot).
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">A Note of Gratitude</h2>
        <p lang="uk">
          Дорога Єлизавета, Хоча я ще плутаю букви та звуки твоєї мови, я
          повністю налаштований її вивчити, щоб ми могли їхати в метро,
          пліткуючи про людей, не надто переймаючись, що нас зрозуміють, хаха.
          Дякую за твою підтримку, і сподіваюся, що наші прагнення та цілі
          здійсняться швидше, ніж очікується. А до того часу ти можеш на мене
          розраховувати.
        </p>
      </div>
    </div>
  );
}
