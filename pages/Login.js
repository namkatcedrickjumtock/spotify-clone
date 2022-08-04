import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function Login({provider}) {
  return (
    <div className="grid place-content-center col-span-1 ">
      <Image
        src={"https://links.papareact.com/9xl"}
        height={80}
        width={80}
        layout={"fixed"}
        objectFit="cover"
        className="w-52 mb-5"
        alt="spotify"
      />
      {/* {Object.values(providers).map((providers)=>{})} */}
    </div>
  );
}
async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
