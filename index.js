function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
  }
  
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    return blocks * 264; // 1 block = 264 feet
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; 
    } else if (distance <= 2000) {
      const fare = (distance - 400) * 0.02
      return parseFloat(fare.toFixed(2)); 
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }