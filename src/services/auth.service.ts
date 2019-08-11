import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { Auth0UserProfile } from 'auth0-js';

let client: Auth0Client;

export const auth0Client = async (): Promise<Auth0Client> => {
  if (client) {
    return client;
  }

  client = await createAuth0Client({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirect_uri: window.location.href,
    scope: 'openid profile email',
  });

  return client;
};

export const login = async (path: string) =>
  (await auth0Client()).loginWithRedirect({ appState: { path } });

export const handleCallback = async () =>
  (await auth0Client()).handleRedirectCallback();

export const getUser = async (): Promise<Auth0UserProfile> =>
  (await auth0Client()).getUser();

export const checkSession = async () => (await auth0Client()).isAuthenticated();

export const logout = async () => (await auth0Client()).logout();
