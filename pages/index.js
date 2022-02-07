import Head from "next/head";
import Avatar from "../Components/Avatar";
import { MicrophoneIcon, MoonIcon, SunIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../Components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  // const [darkTheme, setdarkTheme] = useState(false);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-grey-700">
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* left */}
        <div className="flex space-x-4 items-center">
           {/* <SunIcon/> */}
          {/* <MoonIcon/> */}
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I4ZFbKOziwNz89Ld3GgRPftLxK-o9jkPGQurTM8=s32-c-mo" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          // className="bg-black"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          // https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png
          height={100}
          width={300}
          alt="Google Search"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-grey-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow "
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I am Feeling Lucky
          </button>
        </div>
      </form>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
