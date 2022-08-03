import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "../../../lib/spotify";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: <any>process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: <any>process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    })
    // ...add more providers here
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
    // encryption: true
  },
  pages: {
    signIn: '/Login'
  }
  ,
  callbacks: {
    async jwt({ token, user, account, }) {
      // if the user is lready logged in
      if (account && user) {
        return {
          ...token, accessToken: account.access_token,
          refreshedToken: account.refresh_token
        }
      }
      return token
    }
  },
})