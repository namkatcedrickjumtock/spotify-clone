import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";
import SpotifyProvider from 'next-auth/providers/spotify';
import NextAuth, { NextAuthOptions } from "next-auth"


// refereshing a new acces token
async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.refreshAccessToken(token.refreshedToken)

    // sending request to spotify to referesh acess token
    const { body: refereshedToken } = await spotifyApi.refreshAccessToken()
    console.log("REFERESHED TOKEN IS:", refereshedToken);

    return {
      ...token,
      accessToken: refereshedToken.access_token,
      accessTokenExpires: Date.now() + refereshedToken.expires_in * 1000,// 1 hours as 3600 return from spotify Api
      refereshToken: refereshedToken.refresh_token ?? token.refereshToken // replace  if new one came  back else fall back to the odl referesh token
    }
  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: "RefereshAcessTokenError"
    }
  }
}


export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    })
  ],
  jwt: {
    secret: process.env.JWT_SECRET || "ds_sada_sda",
  },
  pages: {
    signIn: '/login'
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, user, account, }) {

      // if innitial user signed in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          userName: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // we get tokens in ms hence * 1000
        }
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('EXISTING TOKEN IS VALID');
        return token
      }

      // Access token has expired, referesh it
      console.log(' ACCESS  TOKEN EXPERIED REFERESHING..');

      return await refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user = token.accessToken
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    }
  },
}

export default NextAuth(authOptions)
