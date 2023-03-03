#!/bin/bash

# bundle install
yarn install
cd ./ios/ || exit
pod install
