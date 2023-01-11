//This is the file that we use to produce the random folders 
//We are going to produce the random sizes of the folders and we are going to 
//save them to a text file 

//The process will be done 10 times for different sample sizes 
//N = 100 , N = 500 , N = 1000
import fs from 'fs';

//The prompt module doesn't seem to want to cooparate
// const prompt  = require("prompt-async")();


let folders = [];
let textOutput = "";

//This is the code that was written so that the user can choose the sample size


// let sampleSize = parseInt(prompt("Press 1 for sample size of 100, 2 for sample size of 500 and 3 for sample size of 1000"));
// if(sampleSize !== 1 && sampleSize !== 2 && sampleSize !== 3 )
// {
//     sampleSize = parseInt(prompt("The only valid choices are 1 or 2 or 3 "));
// }


//Since the prompt module doesn't seem to work we will assign values to sample size by hand

let sampleSize = 3 ;


let N ;

if( sampleSize == 1 )
{
    N = 100 ;
}
else if( sampleSize == 2 )
{
    N = 500 ;
}
else {
    N = 1000;
}


for ( let i = 0 ; i < N ; i ++)
{
    folders.push(Math.ceil(Math.random(0,1)* 10**6));

}


//Preparing the values for extraction to a text file
folders.forEach( i => {
    textOutput += `${i} \n`;
});


//Writing the values that are located in the correct format in textOutput 
//into a file 

fs.writeFile(`Folders-SampleSize-${N}.txt`,textOutput,(err) => {
    if (err) throw err;
});


//Now we have produced the 30 text files with the random folder capacities 




