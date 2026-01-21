import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
        <Hero />
        <ValueProp />
      </main>
    </>
  );
}
