import Image from "next/image";
import {
  Why,
  Cta,
  Cars,
  Hero,
  About,
  Header,
  Footer,
  Testimonial,
  BackToTopBtn,
} from "./components";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      <div className="h-[4000px]"></div>
    </main>
  );
}
