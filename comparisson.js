import { Disk } from './Disk.js';
import readerFromText from './FileReaderFunction.js';
import split from './Greedy.js';
import bubbleSort from './Greedy-decreasing.js';



//These are the arrays of data for each method at each sample size
let noOfDisksUsedFor100Greedy = [];
let noOfDisksUsedFor100GreedyDecreasing = [];
let noOfDisksUsedFor500Greedy = [];
let noOfDisksUsedFor500GreedyDecreasing = [];
let noOfDisksUsedFor1000Greedy = [];
let noOfDisksUsedFor1000GreedyDecreasing = [];



//These are the lists that we use for splitting the folders to disks 
let foldersListString = [];
let foldersListNumbers = [];
let disksList = [];



//Loop for the 100 folders 
for (let i = 1; i < 11; i++) {
    foldersListString = [];
    foldersListNumbers = [];
    disksList = [];


    foldersListString = readerFromText(`./folders-SampleSizes/Folders-SampleSize-100-${i}.txt`);

    foldersListNumbers = foldersListString.map((a) => Number(a));


    let x = split(disksList, foldersListNumbers);
    noOfDisksUsedFor100Greedy.push(x);

    disksList = [];

    bubbleSort(foldersListNumbers);
    let y = split(disksList, foldersListNumbers);
    noOfDisksUsedFor100GreedyDecreasing.push(y);


}
//Loop for the 500 folders 
for (let i = 1; i < 11; i++) {
    foldersListString = [];
    foldersListNumbers = [];
    disksList = [];


    foldersListString = readerFromText(`./folders-SampleSizes/Folders-SampleSize-500-${i}.txt`);

    foldersListNumbers = foldersListString.map((a) => Number(a));


    let w = split(disksList, foldersListNumbers);
    noOfDisksUsedFor500Greedy.push(w);

    disksList = [];

    bubbleSort(foldersListNumbers);
    let c = split(disksList, foldersListNumbers);
    noOfDisksUsedFor500GreedyDecreasing.push(c);


}

//Loop for the 1000 folders 
for (let i = 1; i < 11; i++) {
    foldersListString = [];
    foldersListNumbers = [];
    disksList = [];


    foldersListString = readerFromText(`./folders-SampleSizes/Folders-SampleSize-1000-${i}.txt`);

    foldersListNumbers = foldersListString.map((a) => Number(a));


    let k = split(disksList, foldersListNumbers);
    noOfDisksUsedFor1000Greedy.push(k);

    disksList = [];

    bubbleSort(foldersListNumbers);
    let z = split(disksList, foldersListNumbers);
    noOfDisksUsedFor1000GreedyDecreasing.push(z);


}


console.log(`\n Number of disks used for random 100 folders with the greedy method 10 times : ${noOfDisksUsedFor100Greedy}`);
console.log(`Number of disks used for random 100 folders with the greedy decreasing method 10 times : ${noOfDisksUsedFor100GreedyDecreasing}`);

console.log(`Number of disks used for random 500 folders with the greedy method 10 times : ${noOfDisksUsedFor500Greedy}`);
console.log(`Number of disks used for random 500 folders with the greedy decreasing method 10 times : ${noOfDisksUsedFor500GreedyDecreasing}`);

console.log(`Number of disks used for random 1000 folders with the greedy method 10 times : ${noOfDisksUsedFor1000Greedy}`);
console.log(`Number of disks used for random 1000 folders with the greedy decreasing method 10 times : ${noOfDisksUsedFor1000GreedyDecreasing}\n\n\n`);

console.log(`Mean number of disks used for 100 folders with the greedy method :${noOfDisksUsedFor100Greedy.reduce((a,b)=> a + b,0)/10}\n Mean number of disks used for 100 folders with the greedy decreasing method :${noOfDisksUsedFor100GreedyDecreasing.reduce((a,b)=> a + b,0)/10}`);

console.log(`Mean number of disks used for 500 folders with the greedy method :${noOfDisksUsedFor500Greedy.reduce((a,b)=> a + b,0)/10}\n Mean number of disks used for 500 folders with the greedy decreasing method :${noOfDisksUsedFor500GreedyDecreasing.reduce((a,b)=> a + b,0)/10}`);

console.log(`Mean number of disks used for 1000 folders with the greedy method :${noOfDisksUsedFor1000Greedy.reduce((a,b)=> a + b,0)/10}\n Mean number of disks used for 1000 folders with the greedy decreasing method :${noOfDisksUsedFor1000GreedyDecreasing.reduce((a,b)=> a + b,0)/10}`);