#!/bin/bash

cordova build android --release
cp platforms/android/app/build/outputs/apk/release/app-release.apk

# Capacitor would be:
# android/gradlew assembleRelease
# cp android/app/build/outputs/app/debug/app-release.apk app/