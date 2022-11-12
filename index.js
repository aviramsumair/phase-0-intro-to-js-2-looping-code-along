function writeCards(nameList, eventName) {
    
    const messageList = [];

    for (let i = 0; i < nameList.length; i++) {
    messageList.push(`Thank you, ${nameList[i]}, for the wonderful ${eventName} gift!`);
  }

  return messageList;
}


function countDown(startNumber){
    let currentNumber = startNumber;
    
    while (currentNumber >= 0 ){
        console.log(currentNumber)
        currentNumber--;
    }

}

