class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}
