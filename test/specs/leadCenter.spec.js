import leadCenterPage       from '../pageobjects/leadCenter.page';
import Page                 from '../pageobjects/page';
import assert               from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Lead center', () =>{
  it('Navigates into lead center', function() {
    Page.openTile('leadCenter');
    assert.strictEqual(Page.checkLanding('leadCenter'))
  })
})