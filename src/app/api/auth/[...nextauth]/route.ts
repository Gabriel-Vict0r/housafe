import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import NextAuth, { getServerSession, NextAuthOptions } from "next-auth"
import { getToken } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, req) {

                try {
                    const response = await fetch(`${process.env.URL_API}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    })

                    const user = await response.json()
                    if (user && response.ok) {
                        return user
                    }

                    return null
                } catch (error) {
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: '/admin'
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && account?.access_token) {
                token.accessToken = account.access_token
            }
            //token.accessToken = user.token
            return token
        },
        async session({ session, token, user }) {
            //session = token.user as any

            return { ...session, token: token.accessToken }
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}
const getTokenjwt = async (req: any, res: any) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_URL });
    if (token) {
        return JSON.stringify(token, null, 2)
    } else {
        res.status(401)
    }
    res.send()
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions, getTokenjwt }