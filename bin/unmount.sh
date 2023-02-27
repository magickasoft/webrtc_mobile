#!/bin/bash

rm -rf node_modules
rm -rf ./ios/build
rm -rf ./ios/Pods
rm -rf ./android/.gradle
rm -rf ./android/build
rm -rf ./android/app/build
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/metro-bundler-cache-*
npm cache clean --force
watchman watch-del-all
