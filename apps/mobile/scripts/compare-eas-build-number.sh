#!/bin/bash

# Get the build number from the EAS build system
build_number=$(eas branch:view production --json --non-interactive --limit 1 | grep '"runtimeVersion"' | sed 's/.*"runtimeVersion": "\(.*\)"/\1/')


# Get the version number from package.json

package_version=$(grep '"version"' package.json | sed 's/.*"version": "\(.*\)"/\1/')

# Strip any spaces or non-numeric characters that might have been accidentally included
build_number=$(echo "$build_number" | tr -d '[:space:]')
package_version=$(echo "$package_version" | tr -d '[:space:]')

echo "remote EAS build version: $build_number"
echo "package.json build version: $package_version"

# Compare version numbers
version_comparison() {
  # Split the version strings into individual parts
  IFS='.' read -r -a build_parts <<< "$build_number"
  IFS='.' read -r -a package_parts <<< "$package_version"

  # Find the longest array length for iteration
  len=${#build_parts[@]}
  if [ ${#package_parts[@]} -gt $len ]; then
    len=${#package_parts[@]}
  fi

  # Compare each part of the version number
  for ((i=0; i<$len; i++)); do
    # If either part is missing, treat it as 0
    build_part=${build_parts[$i]:-0}
    package_part=${package_parts[$i]:-0}

    # Ensure both parts are integers (strip any non-numeric characters)
    build_part=$(echo "$build_part" | sed 's/[^0-9]*//g')
    package_part=$(echo "$package_part" | sed 's/[^0-9]*//g')

    # Compare the parts
    if [[ $package_part -gt $build_part ]]; then
      return 0  # true: package version is greater
    elif [[ $package_part -lt $build_part ]]; then
      return 1  # false: build version is greater
    fi
  done

  return 1  # If versions are equal, return false
}

# Run the comparison and output the result
if version_comparison; then
  echo "local version $package_version is greater than remote version $build_number"
  echo "{result}={true}" >> $GITHUB_OUTPUT
else
  echo "remote version $build_number is greater than or equal to local version $package_version"
  echo "{result}={false}" >> $GITHUB_OUTPUT
fi
