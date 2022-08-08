import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function Login({ providers }) {
  // console.log(providers);
  return (
    <div className="flex flex-col bg-black justify-center items-center min-h-screen">
      <Image
        src={"https://links.papareact.com/9xl"}
        height={80}
        width={80}
        objectFit={"cover"}
      />
      <div>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            className="text-white bg-[#18D860] rounded-lg  mt-3 p-2"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >{`Login With ${provider.name}`}</button>
        ))}
      </div>
    </div>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps = async (context) => {
  // return all provided Auth providers
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
