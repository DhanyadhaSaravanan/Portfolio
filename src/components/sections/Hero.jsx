import { profile } from "../../data/profile";
import Button from "../ui/Button";
import profilePic from "../../assets/profilepic.jpeg";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-white via-blue-50/30 to-white pt-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Text content with entrance animation */}
        <div className="animate-[fadeInUp_0.8s_ease-out] text-center lg:text-left">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Hello, I&apos;m
          </p>
          <h1 className="mb-4 text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mb-4 text-xl font-medium text-primary sm:text-2xl">
            {profile.role}
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted lg:mx-0 mx-auto">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="flex justify-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary to-blue-400 opacity-20 blur-2xl" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-blue-400 shadow-2xl sm:h-80 sm:w-80">
             <img
               src={profilePic}
               alt="Dhanyadha KS"
               className="h-90 w-90 rounded-full object-cover"
             />   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
