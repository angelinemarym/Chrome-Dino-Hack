const autoPlayLoop = function () {
  const JUMP_SPEED = 10;
  const DISTANCE_BEFORE_JUMP = 90;

  const instance = window.Runner.instance_;
  const tRex = instance.tRex;

  if (tRex.jumping) {
    requestAnimationFrame(autoPlayLoop);
    return;
  }

  const tRexPos = tRex.xPos;
  const obstacles = instance.horizon.obstacles;

  const nextObstacle = obstacles.find((o) => o.xPos > tRexPos);

  if (nextObstacle && nextObstacle.xPos - tRexPos <= DISTANCE_BEFORE_JUMP) {
    tRex.startJump(JUMP_SPEED);
  }

  requestAnimationFrame(autoPlayLoop);
};

requestAnimationFrame(autoPlayLoop);
