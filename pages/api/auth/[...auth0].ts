import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

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
        email: email,
      },
      create: {
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
        fullName: fullName,
        picture: picture,
        locale: locale,
        updatedAt: updatedAt,
        email: email,
        emailVerified: emailVerified,
        sub: sub,
        idToken: idToken,
        accessToken: accessToken,
        accessTokenScope: accessTokenScope,
        accessTokenExpiresAt: accessTokenExpiresAt,
        refreshToken: refreshToken,
        tokenType: tokenType,
      },
      update: {
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
        fullName: fullName,
        picture: picture,
        locale: locale,
        updatedAt: updatedAt,
        email: email,
        emailVerified: emailVerified,
        sub: sub,
        idToken: idToken,
        accessToken: accessToken,
        accessTokenScope: accessTokenScope,
        accessTokenExpiresAt: accessTokenExpiresAt,
        refreshToken: refreshToken,
        tokenType: tokenType,
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