const termImg = require('term-img');
const terminalImage = require('terminal-image');
const path = require('path');

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, 'lgtm.gif'));
	console.log(image);
};

termImg(path.join(__dirname, 'lgtm.gif'), {fallback});