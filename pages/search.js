import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../Components/Header";
import SearchResults from "../Components/SearchResults";
import Response from "../Response";


export default function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      
      {/* Seach Results */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //After the server has rendered.... Pass the results to the client....
  return {
    props: {
      results: data,
    },
  };
}
