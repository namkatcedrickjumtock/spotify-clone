import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { SPOTIFY_AUTHORIZATION_URL } from "../../../lib/spotify";
import "dotenv/config";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.refreshAccessToken(token.refreshedToken);

    // sending request to spotify to referesh acess token
    const { body: refereshedTokens } = await spotifyApi.refreshAccessToken();
    console.log("REFERESHED TOKEN IS:", refereshedTokens);

    return {
      ...token,
      accessToken: refereshedTokens.access_token,
      accessTokenExpires: Date.now() + refereshedToken.expires_in * 1000, // 1 hours as 3600 return from spotify Api
      refreshToken: refereshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: SPOTIFY_AUTHORIZATION_URL,
    }),
  ],

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/Login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at * 1000, // we get tokens in ms hence * 1000
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
};
export default NextAuth(authOptions);
