/*
http://nexusbug.com/
*/

function Field(speed) {
    this.x = random(50, width - 50); // x coordinate of starting point
    this.y = random(50, height - 50); //y coordinate of starting point
    this.radi = 4; //radius of the star
    this.dia = this.radi * 2; //diameter
    this.speed = speed; //speed of the animation
    this.cx = width / 2; //center x
    this.cy = height / 2; //center y



    this.update = function () {

        //check if the star is going outside of canvas
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            //take it back to somwhere around center of canvas
            this.x = random(this.cx - 250, this.cx + 250);
            this.y = random(this.cy - 250, this.cy + 250);
        }

        this.dist();
        this.move();
        this.calcDia();
    }

    //display the star
    this.disp = function () {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.dia, this.dia);
    }

    //distance of x and y coordinates to center
    this.dist = function () {
        this.sx = this.x - this.cx;
        this.sy = this.y - this.cy;
    }

    //cumulative increment from center to sides
    this.move = function () {
        this.x = this.x + (this.sx / this.cx) * this.speed;
        this.y = this.y + (this.sy / this.cy) * this.speed;
    }

    // calculates diameter according to the distance to center
    this.calcDia = function () {
        this.d = dist(this.x, this.y, this.cx, this.cy); //vectoral distance to center
        this.dia = map(this.d, 0, this.cx, 0, 8); //this mapping will result change in the diameter of the star, will be zero at the center and increase through to sides
    }

}
