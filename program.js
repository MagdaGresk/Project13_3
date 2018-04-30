process.stdin.setEncoding('utf-8')
process.stdin.on('readable',function() {
	var input = process.stdin.read()
	if (input !== null) {
		var instruction = input.toString().trim()
		switch (instruction) {
			case 'node-version':
				process.stdout.write('This is node version: ' + process.versions.node)
				break
			case 'system-language':
				process.stdout.write('This is system language: ' + process.env.LANG)
				break
			case 'exit':
				process.stdout.write('Quitting app!\n')
				break
			default:
				process.stderr.write('Wrong instruction!\n')
		}
	}
})