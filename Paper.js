class Paper{
    constructor(x, y, radius){
      var options={
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, 10, options, maxSides)
      this.radius = radius
    }

    display();

}
