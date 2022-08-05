import {
  getProviders,
  getSession,
  GetSessionParams,
  signIn,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import Image from "next/image";

export default function Login(session) {
  // console.log(session.Josn);

  return (
    <div className="flex flex-col bg-back justify-center items-center min-h-screen">
      <Image
        src={"https://links.papareact.com/9xl"}
        height={80}
        width={80}
        objectFit={"cover"}
      />
      {/* <p>{session.toString()}</p> */}
    </div>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps= async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};
