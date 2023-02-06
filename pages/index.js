import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
    
    Many people nowadays prefer to use news aggregator apps on their mobile devices over watching TV news channels or reading newspapers when on their commutes, during leisure time, or while eating. People choose to read the complete news as soon as possible, choose their own category of news, or just glance at the trending headlines rather than reading the entire news bulletin, so the reasons vary based on the individual. 

        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
