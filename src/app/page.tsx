import Profile from "@/components/layout/Profile";
import Navigation from "@/components/layout/Navigation";
import Contact from "@/components/layout/Contact";
import About from "@/components/section/About";
import Expertise from "@/components/section/Expertise";
import Project from "@/components/section/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div
      className="mx-auto w-full flex flex-col flex-1 py-12 gap-4 lg:flex-row lg:px-6 lg:py-0 bg-slate-900 text-slate-400 selection:bg-cyan-300 selection:text-slate-600"
    >
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        aria-hidden="true"
      />
      {/* Left Side Split-Screen (Sticky) */}
      <header className="px-6 flex flex-col gap-3 lg:ml-9 lg:w-1/4 lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
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
