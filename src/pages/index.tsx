import Head from "next/head";
import Editor from "@/components/Editor";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sharelet | Share code snippets in a click</title>
        <meta name="description" content="Code snippet sharing platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.png" />
      </Head>

      <Editor />
    </>
  );
};

export default Home;
