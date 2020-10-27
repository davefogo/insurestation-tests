import Page from './page';

class tilePage extends Page {
  
  tiles(tile) {
    let selectedTile, tileElements;

    tileElements = {
      'leadCenter':  () => { return $('#tile-leads-center'); },
    }
    selectedTile = tileElements[tile];

    return selectedTile();
  }
  
  openTile(tile) {
    this.tiles(tile).waitForDisplayed();
    this.tiles(tile).click();
    browser.pause(1000);
  }
}

export default new tilePage();
