const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log('hello');
} catch (error) {
  core.setFailed(error.message);
}
