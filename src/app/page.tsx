import Profile from "@/components/section/profile/page";
import Navigation from "@/components/layout/navigation/page";
import Contact from "@/components/section/contact/page";
import About from "@/components/section/about/page";
import Expertise from "@/components/section/expertise/page";
import Project from "@/components/section/projects/page";
import Footer from "@/components/layout/footer/page";

export default function Home() {
  return (
    <div
      className="mx-auto w-full flex flex-col flex-1 py-12 gap-4 lg:flex-row lg:px-6 lg:py-0 bg-slate-900 text-slate-400 selection:bg-cyan-300 selection:text-slate-600"
    >
      {/* Left Side Split-Screen (Sticky) */}
      <header className="px-6 flex flex-col gap-3 lg:w-1/4 lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
        <Profile />
        <Navigation />
        <Contact />
      </header>

      {/* Right Side Split-Screen */}
      <div className="lg:w-[53%] lg:ml-auto">
        <main className="flex flex-col flex-1">
          <About />
          <Expertise />
          <Project />
        </main>
        <Footer />
      </div>
    </div>
  );
}
