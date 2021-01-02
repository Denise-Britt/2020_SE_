/**
 * You are the captain of the USS Schwarzenegger,
 *  on a mission to destroy every last alien ship.
 *  Battle the aliens as you try to destroy them with your lasers.
 */
const ussSchwarz = {hull: 20, firepower: 5, accuracy: .7}; 
const aliens = [];

 class AlienShip {
     constructor(hull, firepower, accuracy){
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy;

        this.attack = () => {
            console.log('Attack them!');
        };


     }
 }

////// CREATES 6 ALIEN SHIPS (OBJECTS)
 function createShips() {  

     for(let i = 0; i < 6; i++) {
        
         let hullCalc = Math.floor(Math.random() * (6 - 3 + 1) + 3);  
         let firepowerCalc =  Math.floor(Math.random() * (4 - 2 + 1) + 2);
         let accuracyCalc = (Math.random() * (.8  - .6 + 1) + .6);   

         const ship = new AlienShip(hullCalc, firepowerCalc, accuracyCalc);
         aliens.push(ship);

     }
     

         console.log(aliens);
 }

 createShips();

aliens[0].attack();



/**  There are six alien ships. The aliens' weakness
 * is that they are too logical and attack one at a time:
 * they will wait to see the outcome of a battle before deploying another alien ship. 
 */

/**
 * . Your strength is that you have the initiative and get to attack first.
 *  However, you do not have targeting lasers and can only attack the aliens in order.
 *  After you have destroyed a ship, you have the option to make a hasty retreat
 */


 /**
  * You attack the first alien ship
  *  - If the ship survives, it attacks you
  *  - If you survive, you attack the ship again
  *  - If it survives, it attacks you again - Etc.
  *  - If you destroy the ship, you have the option to **attack** the next ship or to **retreat**
  *  - If you retreat, the game is over, perhaps leaving the game open for further developments or options.
  *  - You win the game if you destroy all of the aliens.
  *  - You lose the game if you are destroyed.
  */

  // Call Prompts

  // attack(){}
  // Retreat(){}


  /**Ship Properties:
   * **hull** is the same as hitpoints.
   *  If hull reaches `0` or less, the ship is destroyed.
   * 
   * **firepower** is the amount of damage done to the
   *  **hull** of the target with a successful hit.
   * 
   * **accuracy** is the chance between 0 and 1 that the ship will hit its target.
   *  - Every time the ship will attack, calculate the chance that the damage will hit
   *  the opposing ship using `Math.random()` - If the ship's accuracy is `0.8` - then
   *  if the number generated from `Math.random()` is less than or equal to `0.8` then
   *  the attack will be successful. If the value is greater than `0.8` then the attack has missed.
   *  - Adjust the accuracy based on the specs for each ship
   *
   * 
   * **Your spaceship, the USS Schwarzenegger** should have the following properties:
   *  * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7`
   * 
   * **The alien ships** should each have the following _ranged_ properties determined randomly:
   *  * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8`
   */


   /**
    * You could be battling six alien ships each with unique values. Example use of **accuracy** to determine a hit:
    *  ```javascript 
    * if (Math.random() < alien[0].accuracy) {
    *  console.log('You have been hit!');
    *  } ``
    */
