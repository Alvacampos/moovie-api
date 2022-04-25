#!/bin/sh
set -e

# Install app dependencies
yarn install

/app/wait-for-it.sh db:5432 -t 15 -- echo "Database ready!"

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
