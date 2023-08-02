# Change Log

All notable changes to the "vscode-sonic-pi" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added

- Support for running Sonic Pi server on a remote mounted host (e.g. running VSCode in SSH mode into WSL, with Sonic Pi running on the Windows host mounted at `/mnt/c/Program Files/Sonic Pi`). This can be set up using the new configuration options:
  - `remote.serverHostIp`: Set Host IP of the Sonic Pi server (defaults to `127.0.0.1`)
  - `remote.daemonLauncherPath`: Set path to Sonic Pi's daemon.rb entry point, relative to Sonic Pi root directory.
  - `remote.rubyPath`: Set path to Ruby executable on remote host.
  - `remote.sonicPiUserPath`: Set path to Sonic Pi user directory on user home in remote host.
- Added Stop server command to stop the Sonic Pi server so that Path-based configurations can be updated without restarting VSCode.

### Changed

- Renamed outputs: `Logs` → `Sonic Pi: Logs`, `Cues` → `Sonic Pi: Cues`
- Moved logs related to the plugin extension itself into the Sonic Pi: Extension output channel.

## [0.1.0]

- Initial release
