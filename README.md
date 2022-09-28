# GitHub-Actions-Demo

A repo to showcase the power of GitHub Actions

## Quickstart

To get started with GitHub Actions, follow these steps:

1. Install `act` by using `brew install act` on Mac [or click here for Windows install](https://github.com/nektos/act#installation-through-package-managers)

2. Install `docker` 
- [Mac](https://docs.docker.com/desktop/install/mac-install/) 
- [Windows](https://docs.docker.com/docker-for-windows/install/) 
- [Linux](https://docs.docker.com/engine/install/)

3. Run `act` in your terminal.

4. Hit Enter (Select Medium image size)

5. Create a file called `demo.yaml` in the `.github/worksflows` directory.

6. Copy the following YAML contents into the `demo.yml` file:

```
name: GitHub Actions Demo
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v3
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."
```

7. Run `act push` in your terminal
   **Note:** The first call to `act` may take some time as docker downloads the image.

8. The GitHub Action will now run, view the terminal to see its status.
