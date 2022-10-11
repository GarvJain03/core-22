import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import Services from "../components/Home/Services";
export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <Services />
    </Layout>
  );
}
