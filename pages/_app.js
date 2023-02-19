import "../styles/globals.css";
import { Source_Sans_3, Poppins } from "@next/font/google";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --sourcesans-font: ${source_sans_3.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
