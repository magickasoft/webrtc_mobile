#!/bin/bash

yarn install
cd ./ios/ || exit
pod install --repo-update
