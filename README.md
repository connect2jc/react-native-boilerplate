# MOBILE APP SETUP IN YOUR FRESH MACHINE

- Go to the react native docs and go to getting started(https://facebook.github.io/react-native/docs/getting-started)
- And select "Building Projects with Native Code" Tab and follow all steps for your os

# Want to rename the app?
- Its not easy to renamne the app if you have already defined name. So I use this package to rename the project. Here it is:https://www.npmjs.com/package/react-native-rename (WARNING: THIS PACKAGE DOES NOT WORK PERFECTLY AND SOME OTHER TRICKS WILL REQUIRE TO RENAME THE PROJECT SO CREATE A NEW BRANCH AND THEN TRY RENAMING YOUR PROJECT)
- Note: Above package does not attempt to properly rename build artifacts such as ios/build or Cocoa Pod installation targets. After renaming your project you should clean, build, and reinstall third party dependencies to get it running properly with the new name.


# Android build issues
- If you have android build issues then:
- 1) Open android directory in android studio and fix any gradle issues that you see in bottom build window
- 2) If error is failed to create directory (Inside your project directory: cd android && gradlew clean && cd .. && react-native run-android)
): https://stackoverflow.com/questions/42642253/failed-to-create-directory-project-android-app-build-intermediates-res-merged-d 
- 3) Else try running these commands first:
    - npm run android-devices
    - npm run android-dev
- 4) If this is your error while running on android "Could not compile settings file 'react-native-boilerplate\SAMPLE_APP\android\settings.gradle'.
> startup failed: settings file 'react-native-boilerplate\SAMPLE_APP\android\settings.gradle': 3: unexpected char: '\' @ line 3, column 133.
     s\react-native-gesture-handler\android')"
     - then open your settings.gradle file (located in android directory) and replace this line "project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '..\node_modules\react-native-gesture-handler\android')" with project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')

# SETUP UI Library:
- Not sure if "npm I" would work to setup ui library. So here is what I did. 
- Its always good to follow offical docs which is here: https://docs.nativebase.io/docs/GetStarted.html 
- At the time of starting the project this is what I did:
- Install NativeBase : npm install native-base --save
- Install Peer Dependencies: react-native link
- Now if you still gets the issue, you might need to install react-timer mixin plugin.
 look at this stackoverflow thread: https://stackoverflow.com/questions/54430884/native-base-2-10-0-fresh-installation-of-native-base-on-react-native-project-gi?noredirect=1#comment95672027_54430884

# SETUP FOR ESLINT:
- Install ESLINT For vs code
- Install following packages:
    - npm install --save-dev eslint babel-eslint
    - npm install --save-dev eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import eslint-plugin-jest
    - 
- Add following files if you do not get from SVN 
    - .vscode folder with setings.json
    - .eslintrc.json
    -  .editorconfig
- Add a script to package.json to lint just javascript files: "lint": "eslint *.js **/*.js"