export default class Page {
  tiles(tile) {
    let tile, selectedTile;
  
    tiles = {
      'leadCenter':  () => { return $('.src-client-containers-HomePage-___HomePage__leads___1Hryg src-client-containers-HomePage-___HomePage__tile___3j3ES'); },
    }
    selectedTile = tiles[tile];

    return selectedTile();
  }
  open (path) {
    browser.url(path)
  }
  openTile(tile) {
    this.tiles(tile).click()
    browser.pause(1000);
  }
  checkLanding(tile) {
    return this.tiles(tile)
  }
}
