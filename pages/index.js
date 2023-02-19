import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foundation for Angelman Syndrome Therapeutics UK</title>
        <link
          rel="icon"
          href="https://cureangelman.org.uk/wp-content/uploads/2021/06/Artboard-2@2x-e1622720655549-80x80.png"
          type="image/png"
        />
      </Head>

      <main>
        <a href="https://cureangelman.org.uk">
          <Image
            src="images/FAST_UK_LOGO.svg"
            width={600}
            height={270}
            alt="FAST UK Logo"
          />
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://cureangelman.org.uk">FAST UK</a>!
        </h1>

        <p className={styles.description}>
          FAST is the Foundation for Angelman Syndrome Therapeutics UK. <br />
          Visit our <a href="https://cureangelman.org.uk">main website</a> to
          learn about Angelman Syndrome, current research and clinical trials,
          and subscribe to updates.
        </p>
      </main>

      <footer>
        Foundation For Angelman Syndrome Therapeutics UK | Charity 1167984 | ICO
        Registered ZA672029 |&nbsp;{" "}
        <a href="mailto:info@cureangelman.org.uk">info@cureangelman.org.uk</a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main img {
          padding: 5rem 5rem;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
