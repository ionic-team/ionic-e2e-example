#!/bin/bash

xcodebuild \
  clean \
  archive \
  -workspace platforms/ios/Ionic\ Conference\ App\.xcworkspace \
  -scheme "Ionic Conference App" \
  -sdk iphoneos \
  -archivePath app \
  -configuration Release
  -quiet

xcodebuild \
  -exportArchive \
  -archivePath app \
  -exportOptionsPlist platforms/ios/Ionic\ Conference\ App/exportOptions.plist \
  -exportPath app/App-device.ipa
