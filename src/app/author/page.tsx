import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-8">
      <h1 className="text-4xl font-bold text-center">Franco Exequiel Becvort</h1>

      <Card>
        <CardContent className="flex flex-col md:flex-row items-center gap-8 pt-6">
          <Image
            src="/images/profile-photo.jpg"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="space-y-4">
            <ul className="space-y-2">
              {[
                "Java Spring Boot developer for Ecuador's largest private bank",
                "Google Cloud Certified: Digital Leader / Associate Engineer / Professional Architect",
                "Microsoft Azure Certified: Azure Fundamentals",
                "Scrum Master Certified by Scrum.org",
                "English C2 Proficient Certified by EF SET",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1">
                    ✓
                  </Badge>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Career Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            My career has spanned various sectors, including government, healthcare, and banking. My current role as
            backend developer for Ecuador's largest private bank highlights my proficiency in handling sensitive,
            large-scale projects.
          </p>
          <p>
            My academic roots as a researcher at the Universidad Nacional de San Luis reflect my deep commitment to
            continuous learning and knowledge sharing.
          </p>
          <p>
            This passion for education also is the foundation of my{" "}
            <Link href="https://pollito.dev/" target="_blank" className="text-blue-600 hover:underline">
              programming blog.
            </Link>{" "}
            There, I dive into the intricacies of web development (mainly in Java Spring Boot).
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>A Note of Gratitude</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="italic border-l-4 border-gray-300 pl-4">
            <p lang="uk">
              Дорога Єлизавета, Хоча я ще плутаю букви та звуки твоєї мови, я повністю налаштований її вивчити, щоб ми
              могли їхати в метро, пліткуючи про людей, не надто переймаючись, що нас зрозуміють, хаха. Дякую за твою
              підтримку, і сподіваюся, що наші прагнення та цілі здійсняться швидше, ніж очікується. А до того часу ти
              можеш на мене розраховувати.
            </p>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page