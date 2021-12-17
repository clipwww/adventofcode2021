
function day6() {
  console.time();

  const puzzle = `2,1,2,1,5,1,5,1,2,2,1,1,5,1,4,4,4,3,1,2,2,3,4,1,1,5,1,1,4,2,5,5,5,1,1,4,5,4,1,1,4,2,1,4,1,2,2,5,1,1,5,1,1,3,4,4,1,2,3,1,5,5,4,1,4,1,2,1,5,1,1,1,3,4,1,1,5,1,5,1,1,5,1,1,4,3,2,4,1,4,1,5,3,3,1,5,1,3,1,1,4,1,4,5,2,3,1,1,1,1,3,1,2,1,5,1,1,5,1,1,1,1,4,1,4,3,1,5,1,1,5,4,4,2,1,4,5,1,1,3,3,1,1,4,2,5,5,2,4,1,4,5,4,5,3,1,4,1,5,2,4,5,3,1,3,2,4,5,4,4,1,5,1,5,1,2,2,1,4,1,1,4,2,2,2,4,1,1,5,3,1,1,5,4,4,1,5,1,3,1,3,2,2,1,1,4,1,4,1,2,2,1,1,3,5,1,2,1,3,1,4,5,1,3,4,1,1,1,1,4,3,3,4,5,1,1,1,1,1,2,4,5,3,4,2,1,1,1,3,3,1,4,1,1,4,2,1,5,1,1,2,3,4,2,5,1,1,1,5,1,1,4,1,2,4,1,1,2,4,3,4,2,3,1,1,2,1,5,4,2,3,5,1,2,3,1,2,2,1,4`
  // const puzzle2 = `0`;
  
  const puzzleArr = puzzle.split(',').map(Number);
  
  function part1() {
    let lanternfishArr = [...puzzleArr]
    
    let day = 0;
    while(day < 80) {
      let newFish = 0;
      

      lanternfishArr = lanternfishArr.map(timer => {
        const after = timer - 1;

        if (after < 0) {
          newFish++;
          return 6;
        }

        return after;
      })



      lanternfishArr = lanternfishArr.concat(Array(newFish).fill(8));
      // console.log(lanternfishArr.join(','))
      
      day++;
    }

    console.log('part1', lanternfishArr.length)
  }

  part1();

  function part2() {
    let lanternfishArr = [...puzzleArr]
    const fishData = Array(9).fill(0n);

    lanternfishArr.forEach(timer => {
      fishData[timer] += 1n;
    })
    console.log(fishData)

    let day = 0;
    while (day < 256) {
      const newFish = fishData[0]
      fishData[0] = fishData[1]
      fishData[1] = fishData[2]
      fishData[2] = fishData[3]
      fishData[3] = fishData[4]
      fishData[4] = fishData[5]
      fishData[5] = fishData[6]
      fishData[6] = fishData[7] + newFish
      fishData[7] = fishData[8]
      fishData[8] = newFish

      day++;
    }

    
    console.log('part2', fishData.reduce((sum , cur) => sum + cur, 0n))
  }

  
  part2();

  console.timeEnd();
}

day6()