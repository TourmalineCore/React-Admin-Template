import { createAuthService } from '@tourmalinecore/react-tc-auth';

export const authService = createAuthService({
  authApiRoot: 'http://localhost:5000',
  authType: 'ls',
  tokenAccessor: 'accessToken',
  refreshTokenAccessor: 'refreshToken',
  tokenValueAccessor: 'value',
  tokenExpireAccessor: 'expiresInUtc',
});

export async function login(payload) {
  const { data } = await authService.loginCall(payload);
  authService.setLoggedIn(data);
}
