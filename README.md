DeliveryApp app Rn project
## Install global packages 
```bash
npm install -g yo generator-rn-toolbox yarn
```
## Install
```bash
yarn install
```
## Build release apk for Android
```bash
cd android
./gradlew assembleRelease
```
## Testing the release build of your app 
```bash
react-native run-android --variant=release
```
## Developer mode on device
```bash
react-native run-ios --device
```
```bash
react-native run-android
```
 ## Set Icons
 ```bash
yo rn-toolbox:assets --icon ./src/branding/nzo/images/icon.png
yo rn-toolbox:assets --splash ./src/branding/nzo/images/splash.png
 ```
For splash use a square image 2208x2208
