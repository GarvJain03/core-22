import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import Features from "../components/About/Features";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />

      <Features />
    </Layout>
  );
}
