#!/bin/bash

ionic cordova build ios
# mkdir -p platforms/ios/build/appium/Payload
# cp -R platforms/ios/build/emulator/Ionic\ Conference\ App.app platforms/ios/build/appium/Payload

# zip -r platforms/ios/build/app-debug.zip platforms/ios/build/appium

# xcodebuild \
#   clean \
#   archive \
#   -workspace platforms/ios/Ionic\ Conference\ App\.xcworkspace \
#   -scheme "Ionic Conference App" \
#   -sdk iphoneos \
#   -archivePath app \
#   -configuration Release
#   -quiet

# xcodebuild \
#   -exportArchive \
#   -archivePath app \
#   -exportOptionsPlist platforms/ios/Ionic\ Conference\ App/exportOptions.plist \
#   -exportPath app/App-device.ipa
