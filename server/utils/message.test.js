var expect = require('expect'); // make an assertion

var {generateMessage} = require('./message');

// describe flag function
describe('generateMessage', () => {

  it('should generate correct message object', () => {
    // store res in var
    // assert from match
    // assert text match
    //  assert createdAt is number 

    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
