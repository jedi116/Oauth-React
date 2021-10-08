
const clientID = '0oa22l2b7rV42XAbz5d7'
const oktaDomain = 'dev-87589407.okta.com'
const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: `https://${oktaDomain}/oauth2/default`,
    clientId: clientID,
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    baseUrl: `https://${oktaDomain}`,
    clientId: clientID,
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
      // If your app is configured to use the Implicit flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
      // pkce: false
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  }
  
  export { oktaAuthConfig, oktaSignInConfig }