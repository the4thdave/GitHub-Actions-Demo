const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get swagger doc URL from $text in changed file

  // Navigate to URL and get swagger doc text

  // Save swagger doc text to file

  // Call validator
} catch (error) {
  core.setFailed(error.message);
}
