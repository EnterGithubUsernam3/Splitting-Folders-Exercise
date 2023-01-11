import { Disk } from './Disk.js';
import readerFromText from './FileReaderFunction.js';
//Here you need to use the correct relative path so that the program
//can locate the text file with the random folder values


//Here we initialize the variable that will receive the data from the text 
//file as an empty array. This array will store those data as strings 
let foldersListString = [];

//So we need this array to store the data as numbers 
let foldersListNumbers = [];


//We also need a list that we are going to store all the disks that we have
//created 
//We initiatialize it as an empty array for obvious reasons
let disksList = [];



foldersListString = readerFromText('./folders-SampleSizes/Folders-SampleSize-1000-1.txt');

foldersListNumbers = foldersListString.map((a) => Number(a));


split(disksList, foldersListNumbers);








//Dividing folders to disks algorithm

export default function split(disksList, foldersListNumbers) {

    let sumOfFoldersAfterSplit = 0;
    let indicatorOfSuccess = 0;
    //This is the output that the function will return 
    let outputField = "";

    if (disksList.length == 0) {
        let disk1 = new Disk(disksList.length);

    }
    for (let i = 0; i < foldersListNumbers.length; i++) {
        indicatorOfSuccess = 0;

        //This iterator is checking if our available disks have the required free space 
        for (let j = 0; j < disksList.length; j++) {

            if (foldersListNumbers[i] <= disksList[j].totalDiskSpace - disksList[j].folders.reduce((a, b) => a + b, 0) && indicatorOfSuccess == 0) {
                disksList[j].folders.push(foldersListNumbers[i]);
                indicatorOfSuccess = 1;
            }
        }
        //If none of our available disks have the required free space then we will create a new disk to pass this folder       
        if (indicatorOfSuccess == 0) {
            let newDisk = new Disk(disksList.length);
            newDisk.folders.push(foldersListNumbers[i]);
            disksList.push(newDisk);
        }


    }

    outputField += `Sum of all folders is ${foldersListNumbers.reduce((a, b) => a + b, 0) / (10 ** 6)} TB`;
    outputField += `\n Total number of disks used  = ${disksList.length}`;
    disksList.forEach((value) => {
        outputField += `\n ID : ${value.id} freeSpace : ${value.totalDiskSpace - value.folders.reduce((a, b) => a + b, 0)} and folders : ${value.folders}`
    });




    //This is a testing snippet that checks that the folders after the split have the same capacity as before
    disksList.forEach((value) => {
        sumOfFoldersAfterSplit += value.folders.reduce((a, b) => a + b, 0);

    });

    // console.log(disksList);
    console.log(outputField);
    console.log(`Total capacity of folders in disks : ${sumOfFoldersAfterSplit / 10 ** 6} TB`);

    return disksList.length;

}



