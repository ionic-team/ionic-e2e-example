#!/bin/bash

ionic cordova build android
# cp platforms/android/app/build/outputs/apk/debug/app-debug.apk


# java -jar apks/bundletool.jar build-apks \
#     --bundle apks/release/release/app.aab \ # A generated aab file
#     --output apks/AppBundleSample.apks \    # An apks file you'd like to out put to
#     --ks apks/sign \                        # Signing keystore
#     --ks-key-alias key0 \                   # Alias of the keytstore
#     --ks-pass pass:kazucocoa \              # Password of the keystore
#     --overwrite 

# Capacitor would be:
# android/gradlew assembleRelease
# cp android/app/build/outputs/app/debug/app-release.apk app/