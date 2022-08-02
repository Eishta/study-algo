// There are some house in a cicular street. something like in the below picture

// image

// each house is connected to its neighbours, on each house you are allowed to do the below operations:

// void openDoor()
// void closeDoor()
// boolean isDoorOpen()
// House moveRight()
// House moveLeft()
// Suppose Initially, it is given that all the House doors are closed. and you are standing at one random house.
// and you have to count the total number of houses in the Circle. (by moving to the right or left) . how will you count the number of houses?

function countHouses() {
    let count = 1;
    // open the door of first house only
    openDoor();
    moveRight();
    // keep moving to right until we found that house of which we openned the door initially
    while (!isDoorOpen()) {
        count++;
        moveRight();
    }
    return count;
}

// Now Suppose the House doors are randomly closed and open initialliy and you are standing 
// at one random house. you have given a max number, the total_number_of_houses <= max.
// now how will you count the total number of houses


function countHousesWithRandomOpenCloseDoors() {
    let count = 0;
    while (count < max) {
        closeDoor();
        moveRight();
        count++;
    }

    openDoor();
    moveRight();
    let ans = 1;

    while (!isDoorOpen()) {
        ans++;
        moveRight();
    }

    return ans;
}