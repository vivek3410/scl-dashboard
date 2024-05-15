export const publicRoutes=[
    "/"]
/**
 An array of routes that are used for authentication 
 these routes will redirect logged in users to /dashboards 
* 
 */

export const authRoutes=[
"/login",
]
/**
 the prefix for api authentication routes 
  routes that starts with this prfix are used for api authentication purposes 
* 
 */
export const apiAuthPrefix="/api/auth";
/**
 * the default redirecct path after logging in
 * 
 */
export const default_Login_redirect="/dashboard"