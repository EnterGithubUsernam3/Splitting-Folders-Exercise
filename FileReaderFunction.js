import fs from 'fs';


//This function takes as an input the relative path name of the textfile
//that we want to read 
export default function readerFromText(filename) {

    const sth = fs.readFileSync(filename, 'utf-8');
    const arr = sth.split(/\r?\n/);
    
    return arr;

}

