// import Image from "next/image";
import { 
  Header,
  Banner,
  Content,
  Article,
  FaQ,
  Footer,
} from "@/components/landpage";

export default function Home() {
  return (
    <main className="landpage">
      <Header />
      <Banner />
      <Content />
      <Article />
      <FaQ />
      <Footer />
    </main>
  );
}
