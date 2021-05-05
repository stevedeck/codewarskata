function bouncingBall(h,  bounce,  window) {
  // your code here
  var ballCount = 0;
  
  for (var ballHeight = h; ballHeight > window; ballHeight) {
    ballCount++;
    if (ballHeight * bounce > window){
      ballCount++
    }
   
    ballHeight *= bounce;
  }
  return ballCount;
}