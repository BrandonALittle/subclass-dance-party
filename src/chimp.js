var Chimp = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("chimpDancer");
};

Chimp.prototype = Object.create(Dancer.prototype);
Chimp.prototype.constructor = Chimp;
Chimp.prototype.oldStep = Dancer.prototype.step;

Chimp.prototype.step = function() {
  this.oldStep.call(this);
};

Chimp.prototype.lineUp = function() {
  this.$node.toggleClass("chimpDancer");
  this.$node.toggleClass("lineUp");
};