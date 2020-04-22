#!/usr/bin/env bash

set -e

usage() {
  echo "$0 <repo> <tag> [<release name>]" >&2;
}

if [ "$1" = "-h" -o "$1" = "--help" ]; then
  usage
  exit 1;
fi

if [ -z "$1" ]
then
  REPO=$(git ls-remote --get-url origin | \
  sed -u 's/git@//g; s/https:\/\///g; s/github.com\///g; s/\.git//g')
else
  REPO=$1
fi


BODY=$(awk "/{print; exit}" RS="\n\n" ORS="\n\n" CHANGELOG.md | tail -n+2)

PAYLOAD=$(
  jq --null-input \
     --arg b "$BODY" \
     '{ name: $n, body: $b}'
)

curl --fail \
     --netrc \
     --silent \
     --location \
     --request PATCH \
     --data "$PAYLOAD" \
     "https://api.github.com/repos/${REPO}/releases/"