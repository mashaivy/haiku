import { Poem } from './../src/haiku.js';

describe('Lines', function() {

  it('should test whether the poem has three lines', function(){
    let userInput = "This is my line 1 \r\n this is my line 2 \r\n this is my line 3 ";
    let newPoem = new Poem(userInput);
    console.log(newPoem.entireP)
    console.log(newPoem.entireP.split(/\r\n|\r|\n/));
    console.log(newPoem.checkLines());
    expect(newPoem.checkLines()).toEqual(true);
  })
});
