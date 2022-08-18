

let backpack = []

backpack.push('Jedi Robe')
backpack.push('Lightsaber')
backpack.push('Crippling sense of failure and guilt')
   // console.log(backpack)

backpack.splice(1, 1)

backpack.push('Wookie Coat')
   // console.log(backpack)

backpack.pop()

backpack.push('blue milk', 'baby yoda', 'a child named luke', 'com device', 'high ground', 'blaster')
   // console.log(backpack)

let stroller = backpack.splice(3, 2)

    console.log(backpack)
    console.log(stroller)

    console.log(backpack.length)

   
    for(let i=0; i < backpack.length; i++){
        console.log(backpack[i])
    }
    //Remember to put i in bracket notation

    //I is signifying which index we are grabbing

    //we want to get  the value of i out of the backpack array 
    //the value of i however is constantly changing b/c we are loopig over the code multiple times
    //Becuase it is a loop letting i=0 is just the first step of the loop start at 0 or the first position of the array. Then as the loop runs i = 1, i = 2, i = 3, etc.
    // when i =0 it check the first poisition of the array and console logs that value "Jedi Robe"
    //the for loop runs a second time and i = 1
    //when i = 1 the console log is still printing i but now the value of i is "crippling sense of failure and guilt" etc.
    