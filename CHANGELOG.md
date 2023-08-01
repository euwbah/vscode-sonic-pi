# Change Log

All notable changes to the "vscode-sonic-pi" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added

- Support for running Sonic Pi server on a remote mounted host (e.g. running VSCode in SSH mode into WSL, with Sonic Pi running on the Windows host mounted at `/mnt/c/Program Files/Sonic Pi`). This can be set up using the new configuration options:
  - `serverHostIp`: Set Host IP of the Sonic Pi server (defaults to `127.0.0.1`)
  - `daemonLauncherPath`: Set path to Sonic Pi's daemon.rb entry point, relative to Sonic Pi root directory.

## [0.1.0]

- Initial release
