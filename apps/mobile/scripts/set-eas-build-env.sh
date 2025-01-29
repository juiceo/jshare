#!/bin/bash

echo "Setting up .env file for EAS build..."

# Check if EAS_BUILD_PROFILE is set
if [ -z "$EAS_BUILD_PROFILE" ]; then
  echo "Error: EAS_BUILD_PROFILE is not set."
  exit 1
fi

# Determine which .env file to use
case "$EAS_BUILD_PROFILE" in
  "staging")
    cp .env.staging .env
    echo "Copied .env.staging to .env"
    ;;
  "production")
    cp .env.production .env
    echo "Copied .env.production to .env"
    ;;
  *)
    echo "Error: Unknown EAS_BUILD_PROFILE value '$EAS_BUILD_PROFILE'"
    exit 1
    ;;
esac
