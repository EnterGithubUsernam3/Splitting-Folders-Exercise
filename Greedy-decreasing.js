import { Disk } from './Disk.js';
import readerFromText from './FileReaderFunction.js';
import split from './Greedy.js';




let foldersListString = [];

let foldersListNumbers = [];

let disksList = [];


foldersListString = readerFromText('./folders-SampleSizes/Folders-SampleSize-100-1.txt');


foldersListNumbers = foldersListString.map((a) => Number(a));


// console.log(foldersListNumbers);
//Sorting the list of the folders capaccity decreasinggly 
bubbleSort(foldersListNumbers);
// console.log(foldersListNumbers);




split(disksList,foldersListNumbers);












export default function bubbleSort(arr){
   
    let i;
    let j;
   
     
    let isSwapped = false;
     
    for(i =0; i < arr.length ; i++){
       
      isSwapped = false;
       
      for(j = 0; j < arr.length; j++){
          if(arr[j] < arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
          }
      }
       
      // IF no two elements were swapped by inner loop, then break
       
      if(!isSwapped){
        break;
      }
    }
     
    
  }