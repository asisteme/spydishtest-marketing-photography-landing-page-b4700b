import React from "react";

const logoUrl =
  "https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png";
const heroBg =
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1280&amp;dpr=2";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <DinersSection />
      <RestaurantsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ------------- Header ------------- */
function Header() {
  return (
    <header className="bg-background md:px-16 px-6 py-4 flex items-center justify-between" role="banner">
      <div className="flex items-center space-x-3">
        <img
          src={logoUrl}
          alt="SpyDishTest logo"
          className="h-10 w-10 object-contain"
        />
        <h1
          className="text-2xl font-bold"
          style={{ color: "#4c4c96" }}
        >
          SpyDishTest
        </h1>
      </div>

      <a
        href="https://wa.me/?text=I%20want%20to%20try%20SpyDishTest"
        className="bg-primary text-white px-5 py-2 rounded-lg shadow hover:bg-secondary transition"
        aria-label="Start now on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        Start Now
      </a>
    </header>
  );
}

/* ------------- Hero ------------- */
function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 px-6 md:px-10 max-w-2xl space-y-6 animate-fade">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Intelligent Dining &amp; Restaurant Insights
        </h2>
        <p className="text-lg md:text-xl">
          Personalized recommendations for diners. Powerful analytics for
          restaurants. All in one WhatsApp bot.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/?text=I%20want%20to%20try%20SpyDishTest"
            className="bg-primary hover:bg-secondary transition px-8 py-3 rounded-lg shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            Start on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------- Diners Section ------------- */
function DinersSection() {
  return (
    <section id="diners" className="py-16 md:px-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.pexels.com/photos/781798/pexels-photo-781798.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"
          alt="Chat with SpyDishTest"
          className="rounded-xl shadow-lg animate-fade"
        />

        <div className="space-y-5 animate-fade">
          <h3 className="text-3xl font-bold mb-2 text-primary">For Diners</h3>
          <ul className="space-y-3 list-disc ml-5 text-gray-700">
            <li>Explore restaurants tailored to your taste &amp; location</li>
            <li>Discover featured dishes and menus nearby</li>
            <li>Read genuine reviews and popularity scores</li>
          </ul>
          <a
            href="https://wa.me/?text=Show%20me%20restaurants%20nearby"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary transition"
            target="_blank"
            rel="noreferrer"
          >
            Try it Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------- Restaurants Section ------------- */
function RestaurantsSection() {
  return (
    <section id="restaurants" className="py-16 md:px-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 animate-fade">
          <h3 className="text-3xl font-bold mb-2 text-primary">
            For Restaurants
          </h3>
          <p>
            Unlock AI-powered insights and data-driven marketing strategies to
            stay ahead of the competition.
          </p>
          <ul className="space-y-3 list-disc ml-5 text-gray-700">
            <li>Real-time competitor pricing intelligence</li>
            <li>Heatmaps of diner interests &amp; search trends</li>
            <li>AI-driven campaigns &amp; smart pricing recommendations</li>
            <li>Weekly executive performance reports</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary transition"
          >
            Subscribe to Pro Plan
          </a>
        </div>

        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"
          alt="Analytics dashboard"
          className="rounded-xl shadow-lg animate-fade"
        />
      </div>
    </section>
  );
}

/* ------------- Testimonials Section ------------- */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria G.",
      title: "Food Blogger",
      quote:
        "SpyDishTest helped me discover hidden gems around the city. The recommendations are always spot on!"
    },
    {
      name: "Chef Luis",
      title: "Restaurant Owner",
      quote:
        "Our pricing strategy improved overnight thanks to the competitor intelligence insights. Revenue is up 18%!"
    },
    {
      name: "James P.",
      title: "Frequent Diner",
      quote:
        "The heatmap feature showed me trending dishes. I'm always ahead of foodie trends now."
    }
  ];
  return (
    <section id="testimonials" className="py-16 md:px-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h3 className="text-3xl font-bold text-primary">What Users Say</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-background rounded-xl p-6 shadow-md text-left animate-fade"
            >
              <p className="italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.title}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------- Contact Section ------------- */
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:px-16 px-6 bg-background text-gray-800"
    >
      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-6 animate-fade">
        <h3 className="text-3xl font-bold text-primary text-center">Contact Us</h3>
        <form
          action="mailto:dasdas@gmail.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="Name"
              type="text"
              required
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              required
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows="4"
              required
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg shadow hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* ------------- Footer ------------- */
function Footer() {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between md:px-0 px-6 space-y-4 md:space-y-0">
        <div>&copy; {new Date().getFullYear()} SpyDishTest. All rights reserved.</div>

        <div className="space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
