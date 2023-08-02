import { Main } from './main'
import os = require('os')
import fs = require('fs')

export class Paths {
	sonicPiInstallation: string
	ruby: string
	daemonLauncher: string
	daemonLog: string
	sample: string
	spUser: string
	spUserTmp: string
	logsDirectory: string
	serverErrorLog: string
	serverOutputLog: string
	guiLog: string
	processLog: string
	scsynthLog: string

	constructor(main: Main) {
		if (main.platform === 'win32') {
			this.sonicPiInstallation = 'C:/Program Files/Sonic Pi'
			this.ruby = this.sonicPiInstallation + '/app/server/native/ruby/bin/ruby.exe'
		} else if (main.platform === 'darwin') {
			this.sonicPiInstallation = '/Applications/Sonic Pi.app/Contents/Resources'
			this.ruby = '/usr/bin/ruby' // was this.rootPath + '/app/server/native/ruby/bin/ruby'
		} else {
			this.sonicPiInstallation = '/home/user/sonic-pi'
			this.ruby = 'ruby'
		}

		// Override default root path if found in settings
		this.sonicPiInstallation = main.config.sonicPiRootDirectory() || this.sonicPiInstallation

		this.ruby = main.config.rubyPath() || main.config.commandPath() || this.ruby

		main.debugLog('Using Sonic Pi root directory: ' + this.sonicPiInstallation)
		main.debugLog('Using ruby: ' + this.ruby)

		{
			let path = main.config.daemonLauncherPath()
			if (path) {
				if (!path.match(/^(\/|[A-Z]:)/)) {
					// assume path is relative to sonic pi installation
					path = '/' + path
					this.daemonLauncher = this.sonicPiInstallation + path
				} else {
					// assume absolute path
					this.daemonLauncher = path
				}
			} else if (main.platform === 'win32') {
				this.daemonLauncher = this.sonicPiInstallation + '/app/server/ruby/bin/daemon.rb'
			} else {
				this.daemonLauncher = this.sonicPiInstallation + '/server/ruby/bin/daemon.rb'
			}
		}
		main.debugLog('Using daemon launcher: ' + this.daemonLauncher)

		this.spUser = main.config.sonicPiUserPath() || os.homedir() + '/.sonic-pi'
		this.daemonLog = this.spUser + '/log/daemon.log'

		main.debugLog('Using user path: ' + this.spUser)
		main.debugLog('Using daemon log path: ' + this.daemonLog)

		this.sample = this.sonicPiInstallation + '/etc/samples'
		this.spUserTmp = this.spUser + '/.writableTesterPath'
		this.logsDirectory = this.spUser + '/log'

		this.serverErrorLog = this.logsDirectory + '/server-errors.log'
		this.serverOutputLog = this.logsDirectory + '/server-output.log'

		this.guiLog = this.logsDirectory + '/gui.log'

		this.processLog = this.logsDirectory + '/processes.log'
		this.scsynthLog = this.logsDirectory + '/scsynth.log'

		// attempt to create log directory
		if (!fs.existsSync(this.logsDirectory)) {
			fs.mkdirSync(this.logsDirectory, { recursive: true })
		}
	}
}
