import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "8373cb48-1ab3-4b37-9dad-da7856cb1687",
    authority: "https://login.microsoftonline.com/565a1d83-a753-4c8f-bac2-58757cf5c017",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};