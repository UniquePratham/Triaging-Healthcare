// pages/index.js

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic for dynamic import

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const ChatbotIntro = dynamic(() => import("../components/ChatbotIntro"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const SymptomPrediction = dynamic(
  () => import("../components/SymptomPrediction"),
  { ssr: false }
);

const Home = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Navbar />
      <HeroSection />
      <ChatbotIntro />
      <SymptomPrediction /> {/* Add SymptomPrediction component here */}
      <Footer />
    </ChakraProvider>
  );
};

export default Home;
