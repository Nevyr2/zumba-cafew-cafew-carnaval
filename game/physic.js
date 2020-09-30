function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);
	
	
	for (z = 0; z < listEnemy.length; z++)
	{
		enemyMoves = Array("left","right","up","down");
		enemyMove = enemyMoves[Math.floor(Math.random()*enemyMoves.length)];

		if (enemyMove === "left")
			listEnemy[z].turnLeft(rotateAngle);
		if (enemyMove === "right")
			listEnemy[z].turnRight(rotateAngle);
		if (enemyMove === "up")
			listEnemy[z].accelerate(moveDistance);
		if (enemyMove === "down")
			listEnemy[z].decelerate(moveDistance);
		
		listEnemy[z].move();
		
	}
	

    player1.move();
    controls.update();
}