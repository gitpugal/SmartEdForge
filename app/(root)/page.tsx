import Navbar from "@/components/Navbar";
import Hero from "@/pages/Hero";

// primarycolor = #60a5fa , rgb(96, 165, 250)

export default function Home() {
  return (
    <div className="w-screen overflow-hidden  bg-opacity-60 backdrop-blur-[90px] min-h-screen max-h-fit">
      <Navbar />
      <Hero />
    </div>
  );
}
