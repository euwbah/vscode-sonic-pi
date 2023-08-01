// MIT License

// Copyright (c) 2020 Luis Lloret

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import * as vscode from 'vscode'

export class Config {
	private getConfiguration = vscode.workspace.getConfiguration
	private section: string = 'vscode-sonic-pi'
	private rubySection: string = 'ruby.interpreter'

	// sonic-pi's config

	/**
	 * @returns overriden default path to the Sonic Pi installation.
	 * @description This should default to the OS's default installation location of Sonic Pi if not set.
	 */
	public sonicPiRootDirectory(): string | null {
		return this.getConfiguration(this.section).sonicPiRootDirectory
	}

	public flashBackgroundColor(): string {
		return this.getConfiguration(this.section).flashBackgroundColor
	}
	public flashTextColor(): string {
		return this.getConfiguration(this.section).flashTextColor
	}
	public launchSonicPiServerAutomatically(): string {
		return this.getConfiguration(this.section).launchSonicPiServerAutomatically
	}
	public runFileWhenRunSelectedIsEmpty(): string {
		return this.getConfiguration(this.section).runFileWhenRunSelectedIsEmpty
	}
	public launchSonicPiServerCustomExtension(): string {
		return this.getConfiguration(this.section).launchSonicPiServerCustomExtension
	}
	public invertStereo(): boolean {
		return this.getConfiguration(this.section).invertStereo
	}
	public forceMono(): boolean {
		return this.getConfiguration(this.section).forceMono
	}
	public logClearOnRun(): boolean {
		return this.getConfiguration(this.section).logClearOnRun
	}
	public safeMode(): boolean {
		return this.getConfiguration(this.section).safeMode
	}
	public updateRunFileWhenRunSelectedIsEmpty(value: string) {
		void this.getConfiguration(this.section).update('runFileWhenRunSelectedIsEmpty', value, true)
	}

	/*
		The following configs are useful when running Sonic Pi server on a separate networked/virtual machine.
		_____________________________________________________________________________________________________
	*/

	/**
	 * @returns overriden default path to the Sonic Pi's daemon.rb entry point.
	 * @description This should default to the OS's default installation of /server/ruby/bin/daemon.rb
	 * 				if not set.
	 */
	public daemonLauncherPath(): string | null {
		return this.getConfiguration(this.section).remote.daemonLauncherPath
	}
	/**
	 * @returns overriden path to the ~/.sonic-pi directory stored in userhome which should contain user data.
	 * @description This is the directory where logs can be found to read port numbers, etc.
	 * 				This should default to ~/.sonic-pi otherwise (where ~/ is `os.homedir()`)
	 */
	public sonicPiUserPath(): string | null {
		return this.getConfiguration(this.section).remote.sonicPiUserPath
	}
	/**
	 * @returns overriden ip address of the Sonic Pi server.
	 * @description This should default to 127.0.0.1 if not set.
	 */
	public serverHostIp(): string | null {
		return this.getConfiguration(this.section).remote.serverHostIp
	}

	/*
		The following configs are pertaining to ruby interpreter settings (ruby extension)
		_________________________________________________________________________________
	*/

	public commandPath(): string {
		return this.getConfiguration(this.rubySection).commandPath
	}
}
