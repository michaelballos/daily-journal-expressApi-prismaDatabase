import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const afterCallback = async (
  req: NextApiRequest, 
  res: NextApiResponse, 
  session: any
) => {
    const {
      idToken,
      accessToken,
      accessTokenScope,
      accessTokenExpiresAt,
      refreshToken,
      token_type: tokenType,
      user: {
        given_name: firstName,
        family_name: lastName,
        nickname,
        name: fullName,
        picture,
        locale,
        updated_at: updatedAt,
        email,
        email_verified: emailVerified,
        sub,
      },
    } = session
    await prisma.user.upsert({
      where: {
        email,
      },
      update: {
        firstName,
        lastName,
        nickname,
        fullName,
        picture,
        locale,
        updatedAt,
        email,
        emailVerified,
        sub,
        idToken, 
        accessToken,
        accessTokenScope,
        accessTokenExpiresAt,
        refreshToken,
        tokenType,
      },
      create: {
        firstName,
        lastName,
        nickname,
        fullName,
        picture,
        locale,
        updatedAt,
        email,
        emailVerified,
        sub,
        idToken,
        accessToken,
        accessTokenScope,
        accessTokenExpiresAt,
        refreshToken,
        tokenType,
      },
    })
  return session;
}

export default  handleAuth({
  async callback(req, res) {
    try {
    await handleCallback(req, res, { afterCallback });
  } catch (error: any) {
    res.status(error.status || 500).end(error.message);
    }
  },
});