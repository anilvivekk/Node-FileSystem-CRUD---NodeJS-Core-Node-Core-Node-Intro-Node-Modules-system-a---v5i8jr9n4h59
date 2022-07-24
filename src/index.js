const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	try {
		await fs.writeFile(fileName, fileContent)
	}catch (err){
		console.log(err);
	}
	
	// write code here
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	await fs.readFile(fileName)
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName, fileContent);
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	await fs.rmdir(fileName)
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }