// getter = special method that makes a property
readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property


class Rectangle{

constructor(width, height){
this.width = width;
this.height = height;
}

set widht(newwidht){
    if(newwidht>0){
        this._width =newwidht;
    }
    else {
        console.error("width must be a positive number");
    }
}

set hight(newheight){
    if(newheight>0){
        this._height =newheight;
    }
    else {
        console.error("hight must be a positive number");
    }
}

get widht(){
    return this._width;
}

get height(){
    return this._height;
}


get area(){
    return this._height*this._width;
}
}


const rectangle = new Rectangle(3, 5);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);