#!/bin/bash

# * Runs all JavaScript files in the project with a timeout to prevent hangs

# TIP: Automatically excludes specific directories and prints a final summary.
# TIP: Useful for checking that all LeetCode solution files execute without errors.

#################################
# CONFIG
#################################

# Add any directories you want to exclude (relative paths)
EXCLUDE_DIRS=(
  "./__tests__"
  "./node_modules"
)

# Timeout for each file (in seconds)
TIMEOUT=3

#################################
# INTERNAL LOGIC
#################################

# Build the find command's prune expression
PRUNE_EXPR=""
for dir in "${EXCLUDE_DIRS[@]}"; do
  PRUNE_EXPR="$PRUNE_EXPR -path \"$dir\" -prune -o"
done

# Evaluate the find command dynamically
COMMAND="find . $PRUNE_EXPR -name \"*.js\" -print"
FILES=$(eval "$COMMAND")

FAILED_FILES=()

echo ""
echo "🔍 Running all JS files with timeout ($TIMEOUT seconds)…"
echo ""

for file in $FILES; do
  echo "➡️  Running: $file"

  # Run the file with timeout protection
  timeout "$TIMEOUT"s node "$file"
  EXIT_CODE=$?

  if [ $EXIT_CODE -eq 124 ]; then
    echo "❌ Timeout: $file"
    FAILED_FILES+=("$file")
  elif [ $EXIT_CODE -ne 0 ]; then
    echo "❌ Error ($EXIT_CODE): $file"
    FAILED_FILES+=("$file")
  else
    echo "✅ Success"
  fi

  echo ""
done

echo "-------------------------------------------"
echo "📄 SUMMARY"
echo "-------------------------------------------"

if [ ${#FAILED_FILES[@]} -eq 0 ]; then
  echo "🎉 All files ran successfully."
else
  echo "⚠️ The following files failed:"
  for f in "${FAILED_FILES[@]}"; do
    echo " - $f"
  done
fi
