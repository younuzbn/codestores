import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const courseBundles = [
    {
      id: 1,
      title: "Mobile App Development Bundle",
      description: "Master iOS, Android, and Flutter development with comprehensive courses covering SwiftUI, UIKit, Kotlin, and cross-platform development",
      features: [
        "iOS Development with SwiftUI & UIKit",
        "Android Development with Kotlin & Java",
        "Cross-platform Development with Flutter",
        "Real-world Projects & Assignments",
        "Lifetime Access to Updates"
      ],
      image: "/1.jpg",
      students: "50,000+"
    },
    {
      id: 2,
      title: "Full Stack Development Bundle",
      description: "Complete full stack development with MEAN & MERN stacks, API development, and modern web technologies",
      features: [
        "MEAN & MERN Stack Development",
        "API Development & GraphQL",
        "Authentication & Authorization",
        "Database Management",
        "Performance Optimization"
      ],
      image: "/2.jpg",
      students: "45,000+"
    },
    {
      id: 3,
      title: "Game Development Bundle",
      description: "Learn game development with Unity and Unreal Engine, including 2D/3D games and VR/AR development",
      features: [
        "Unity 2D & 3D Development",
        "Unreal Engine Blueprint Programming",
        "VR/AR Game Development",
        "Multiplayer Game Development",
        "Game Physics & Mechanics"
      ],
      image: "/3.jpg",
      students: "30,000+"
    },
    {
      id: 4,
      title: "Design & Creativity Bundle",
      description: "Master creative software including Adobe Creative Suite and Blender for professional design work",
      features: [
        "Adobe Photoshop, Illustrator & InDesign",
        "After Effects Motion Graphics",
        "3D Modeling with Blender",
        "Digital Art & Animation",
        "Print & Digital Design"
      ],
      image: "/4.jpg",
      students: "35,000+"
    },
    {
      id: 5,
      title: "AI & Data Science Bundle",
      description: "Comprehensive data science and AI courses covering machine learning, deep learning, and data analysis",
      features: [
        "Machine Learning & Deep Learning",
        "Natural Language Processing",
        "Data Analysis with Python",
        "Neural Networks",
        "Feature Engineering"
      ],
      image: "/5.jpg",
      students: "40,000+"
    },
    {
      id: 6,
      title: "Business & Marketing Bundle",
      description: "Master essential business tools, marketing strategies, and professional skills",
      features: [
        "Digital Marketing & SEO",
        "Business Tools & Leadership",
        "Project Management",
        "Entrepreneurship Skills",
        "Marketing Analytics"
      ],
      image: "/6.jpg",
      students: "38,000+"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Transform Your Career with Our Complete Tech Bundle
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8">
              Get lifetime access to 150+ premium courses covering the most in-demand tech skills. Join 200,000+ learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <div className="text-3xl font-bold text-white">$10</div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-zinc-500 line-through">$99</span>
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">90% OFF</span>
              </div>
            </div>
            <Link href="/checkout">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-100 transition-colors">
                Get Lifetime Access Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Course Bundles Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included in the Bundle</h2>
            <p className="text-zinc-400">All courses are included in a single purchase with lifetime access</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseBundles.map((bundle) => (
              <div key={bundle.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
                <div className="aspect-video relative">
                  <Image
                    src={bundle.image}
                    alt={bundle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{bundle.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{bundle.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.318l-1.318 2.674-2.946.428 2.132 2.078-.503 2.936L12 11.49l2.635.944-.503-2.936 2.132-2.078-2.946-.428L12 4.318z" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{bundle.students} students</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {bundle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-zinc-400">
                        <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-zinc-500">
                    Included in bundle
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-zinc-900 border-y border-zinc-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Lifetime Access",
                description: "Learn at your own pace with unlimited access"
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Expert Instructors",
                description: "Learn from industry professionals"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Regular Updates",
                description: "Access to latest content and updates"
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Money Back Guarantee",
                description: "30-day satisfaction guarantee"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-zinc-400 mb-8">Join thousands of students already learning on our platform</p>
          <Link href="/checkout">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-100 transition-colors">
              Get All Courses for $10
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
