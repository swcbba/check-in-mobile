// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

// this import should be first in order to load some required settings (like globals and reflect-metadata)
const firebase = require("nativescript-plugin-firebase");

firebase.init({
// Optionally pass in properties for database, authentication and cloud messaging,
onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
}
// see their respective docs.
}).then(
    instance => {
        console.log("firebase.init done");
    },
    error => {
    console.log(`firebase.init error: ${error}`);
    }
);
    
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
