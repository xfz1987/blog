const fs = require('fs')//file system
const path = require('path')

fs.readdir('./markdown/', (error, files) => {
	fs.readdir('./html/', (err, _files) => {
		let _fileNames = new Set(_files.map((item) => item.replace(/\.html/g, '')))
		let difference = new Set([...files].filter(x => !_fileNames.has(x)))
		for(let outPut of difference){
			let o = path.join('./markdown/', outPut)
			let markdown = fs.readFileSync(o).toString()
			let template = fs.readFileSync('./template.html').toString()
			let result = template.replace(/%content%/, markdown)
			fs.writeFileSync('./html/' + outPut + '.html', result)
		}
	});
});
