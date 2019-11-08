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
    COMMIT=$(git rev-parse HEAD)
    lerna version prepatch --preid $COMMIT --conventional-commits --no-changelog --no-git-tag-version --yes
    lerna publish
else
    lerna publish --conventional-commits --changelog-preset angular --yes
fi