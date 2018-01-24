var Frog = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("frogDancer");
};

Frog.prototype = Object.create(Dancer.prototype);
Frog.prototype.constructor = Frog;
Frog.prototype.oldStep = Dancer.prototype.step;

Frog.prototype.step = function() {
  this.oldStep.call(this);
};

Frog.prototype.lineUp = function() {
  this.$node.toggleClass("frogDancer");
  this.$node.toggleClass("lineUp");
};
