var Eagle = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("eagleDancer");
};

Eagle.prototype = Object.create(Dancer.prototype);
Eagle.prototype.constructor = Eagle;
Eagle.prototype.oldStep = Dancer.prototype.step;

Eagle.prototype.step = function() {

  this.oldStep.call(this);

  //this.$node.toggle(); // move across the top of the screen back and forth
  // this.$node.animate({ // eagle should bounce up and down and move
  //       marginLeft: "-=500px",
  //   }, 1000 );
  // this.$node.animate({ // eagle should bounce up and down and move
  //       marginLeft: "+=500px",
  //   }, 5000 );
};

Eagle.prototype.lineUp = function() {
  this.$node.toggleClass("eagleDancer");
  this.$node.toggleClass("lineUp");
};