import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { access, constants, readFile, writeFile } from 'fs/promises';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);
const jsonFile = join(__dirname, 'feeds.json');

console.log(jsonFile);

export async function getLinks(){
    try {
        await access(jsonFile, constants.F_OK);    
    } catch (error) {
        await writeFile(jsonFile, JSON.stringify([]));
    }
    const contents = await readFile(jsonFile,{encoding:'utf8'});
    return JSON.parse(contents);
}

    export async function saveLinks(links){
        await writeFile(jsonFile, JSON.stringify(links));
}

// console.log(import.meta.url);