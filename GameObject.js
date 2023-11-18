/**
 * GameObject handles out components of
 * things being drawn to the screen.
 *
 * This manages the different objects
 * on the screen.
 */
class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    //the sprites will have
    //a lot of state within themselves.
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || '/images/characters/people/hero.png',
    });
  }
}
