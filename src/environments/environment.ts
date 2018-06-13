// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyDtnJLGrKz6F081O-Aij-8mDhIFuDh_-MM",
    authDomain: "billingsupport-6216c.firebaseapp.com",
    databaseURL: "https://billingsupport-6216c.firebaseio.com",
    projectId: "billingsupport-6216c",
    storageBucket: "billingsupport-6216c.appspot.com",
    messagingSenderId: "760083933037"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
