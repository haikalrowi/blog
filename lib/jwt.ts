import * as jose from "jose";

const secret = new TextEncoder().encode(
  "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2",
);
const alg = "HS256";

type Payload = { userLogin: string };

export async function sign(payload: Payload) {
  const token = new jose.SignJWT(payload).setProtectedHeader({ alg });
  return token.sign(secret);
}

export async function verify(token: string) {
  const { payload } = await jose.jwtVerify<Payload>(token, secret);
  return payload;
}
