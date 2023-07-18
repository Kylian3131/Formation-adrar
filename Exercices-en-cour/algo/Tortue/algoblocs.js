
// ---------------------------------------Ex A1 --------------------------------------

// A1
// Initialisation
// setPos(300,300);
// faceDown();
// changeColor(color.red);
// setLineWidth(10);

// Réalisation
// forward(200);
// faceRight();
// forward(100);

// ---------------------------------------Ex A2 --------------------------------------

// A2
// Initialisation
// setPos(300,300);
// faceLeft();
// changeColor(color.yellow);
// setLineWidth(10);

// Réalisation
// forward(100);
// faceDown();
// forward(100);
// faceRight();
// forward(200);
// faceUp();
// forward(200);

// ---------------------------------------Ex A3--------------------------------------

// A3 
// Initialisation
// setPos(300,300);
// faceLeft();
// changeColor(color.yellow);
// setLineWidth(10);

// Réalisation
// forward(200);
// faceRight();
// forward(200);
// faceRight();
// forward(200);
// faceLeft()
// forward(200);
// faceUp();
// forward(200);
// faceDown();
// forward(400);

// ---------------------------------------Ex B1--------------------------------------

// B1
// Initialisation
// setPos(100,100);
// faceRight();
// changeColor(color.green);
// setLineWidth(10);


// Réalisation

// for(let i=0; i<4; i++) {
//     forward(100);
//     faceDown();
//     forward(100);
//     faceRight();
// }


// ---------------------------------------Ex B2--------------------------------------

// B2
// Initialisation
// setPos(70,300);
// faceUp();
// changeColor(color.fuchsia);
// setLineWidth(10);

// Réalisation
// for(let i=0; i<5; i++) {
//     forward(100);
//     faceRight();
//     forward(100);
//     faceDown();
//     forward(100);
//     faceUp()
// }

// ---------------------------------------Ex B3-------------------------------------

// B3
// Initialisation
// setPos(300,300);
// faceRight();
// changeColor(color.fuchsia);
// setLineWidth(10);

// Réalisation

// for(let i=0; i<1; i++) {
//     forward(100);
//     faceDown();
//     forward(100);
//     faceLeft();
//     forward(100);
//     faceUp();
//     forward(100);
// }




// ---------------------------------------Ex B4-----------------------------------

// B4
// Initialisation
// setPos(300,300);
// faceRight();
// changeColor(color.aqua)
// setLineWidth(10);

// Réalisation

// for(let i=0; i<3; i++) {
//     forward(100);
//     left(180-60);
//     forward(100);
// }


// ---------------------------------------Ex B5-----------------------------------

// B5
// Initialisation
// setPos(200,500)
// faceUp();
// changeColor(color.red)
// setLineWidth(10);

// Réalisation

// forward(300);
// for(let i=0; i<3; i++) {
//     changeColor(color.yellow);
//     forward(100);
//     right(180-60);
//     forward(100);
// }




// ---------------------------------------Ex B6-----------------------------------

// B6
// Initialisation
// setPos(200,300);
// faceRight();
// changeColor(color.red)
// setLineWidth(10);

// Réalisation
// for(let i=0; i<2; i++) {
//     forward(50);
//     faceUp();
//     forward(50);
//     faceRight(50);
// }

// for(let i=0; i<3; i++) {
//     changeColor(color.green)
//     faceRight();
//     forward(50);
//     faceDown();
//     forward(50);
// }



// ---------------------------------------Ex C1---------------------------------

// C1
// Initialisation
// setPos(100,300);
// faceRight();
// setLineWidth(5);

// Réalisation

// for(let i = 0 ; i < 4 ; i++) {
//     for(let j = 0 ; j < 3 ; j++) {
//         forward(100);
//         right(180-60);
//     }
//     forward(100);
// }


// ---------------------------------------Ex C2---------------------------------

// C2
// Initialisation

// setPos(220, 500);
// faceUp();
// setLineWidth(10);

// Réalisation

// for (let j = 0; j < 5; j++) {
//     for (let i = 0; i < 4; i++) {
//         forward(50);
//         right(90);
//     }
//     up();
//     forward(100)
//     down();

// }

// ---------------------------------------Ex C3---------------------------------

// C3
// Initialisation

// setPos(10, 300);
// faceRight();
// setLineWidth(10);

// Réalisation

// for(let i=0; i<5; i++) {
//     for(let j=0; j<8; j++) {
//         forward(50);
//         left(180-45);
//     }
//     up();
//     forward(132);
//     down();
// }


// ---------------------------------------Ex C4--------------------------------

// C4
// Initialisation

// setPos(10, 300);
// faceRight();
// setLineWidth(10);

// Réalisation

// for(let i=0; i<5; i++) {
//     for(let a=0; a<3; a++) {
//         changeColor(color.red);
//         forward(100);
//         left(180-60);
//     }
//     for(let b=0; b<4; b++) {
//         changeColor(color.yellow);
//         forward(100);
//         right(180-90);
//     }
//     up();
//     forward(120);
//     down();
// }


// ---------------------------------------Ex C5----------------------------

// C5
// Initialisation

// setPos(200, 400);
// faceRight();
// setLineWidth(10);

// Réalisation

// for(let i=0; i<8; i++) {
//     for(let a=0; a<8; a++) {
//         forward(200);
//         left(180-60);
//     }
//     right(180-90);
//     shiftColor(0.45);;
// }


// ---------------------------------------Ex C6--------------------------

// C6
// Initialisation
// setPos(270, 450);
// faceRight();
// setLineWidth(10);

// Réalisation

// for(let i=0; i<3; i++) {
//     for(let a=0; a<4; a++) {
//         forward(200);
//         left(180-60);
//     }
// forward(200);
// }

// ---------------------------------------Ex C7-------------------------

// C7
// Initialisation
// setPos(300, 300);
// faceRight();
// setLineWidth(10);

// Réalisation
// for(let i=0; i<8; i++) {

//     for(let a=0; a<3; a++) {
//         forward(50);
//         right(180-60);
//     }
//     forward(50);
//     left(180-135);
// }


// ---------------------------------------Ex D10-------------------------

// D10
// Initialisation
setPos(300, 300);
faceRight();
setLineWidth(10);

// Réalisation
let longueur = 50;
for(let i=0; i<10; i++){
    forward(longueur);
    right(90);
    longueur = longueur+50;
}


// ---------------------------------------Ex D11-------------------------

// D11
// Initialisation