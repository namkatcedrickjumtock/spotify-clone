import { getProviders, signIn } from "next-auth/react";

export default function Login() {
  return <div>
    <h1>Logining into Spotify</h1>
  </div>;
}

async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: {
      providers,
    },
  };
}
