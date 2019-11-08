#!/bin/sh
# exit when any command fails
set -e

# lerna needs these, to push tags and changelog back to remote
git config --global user.email "tom@threemammals.com"
git config --global user.name "TomPallister"

npm install
npm run bootstrap
npm run publish