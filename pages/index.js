import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import Features from "../components/About/Features";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <iframe
        className="block mx-auto my-8 w-80 h-[180px] lg:w-[1024px] lg:h-[576px]"
        src="https://www.youtube.com/embed/y9zcH7uwyaY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}
