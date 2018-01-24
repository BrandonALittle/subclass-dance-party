var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blinkyDancer");
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function() {

  this.oldStep.call(this);

  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {
  this.$node.toggleClass("blinkyDancer");
  this.$node.toggleClass("lineUp");
};

