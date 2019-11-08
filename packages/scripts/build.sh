#!/bin/sh
# exit when any command fails
set -e

# lerna needs these, to push tags and changelog back to remote
git config --global user.email "tom@threemammals.com"
git config --global user.name "TomPallister"

npm install
lerna bootstrap
lerna run test --stream

branch=$(git symbolic-ref --short -q HEAD)
master_branch=master

if [ $branch != $master_branch ]
then
    echo "PR PUBLISH"
    lerna publish --canary --conventional-commits --changelog-preset angular --yes
else
    echo "MASTER PUBLISH"
    lerna publish --conventional-commits --changelog-preset angular --yes
fi