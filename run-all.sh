#!/bin/bash

# Loop through all .js files recursively
for file in $(find . -name "*.js"); do
  echo "Running $file"
  node "$file"
done
