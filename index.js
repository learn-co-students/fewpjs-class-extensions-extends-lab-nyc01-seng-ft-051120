// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let num = 0
        for(let i = 0; i < this.sides.length; i++){
            num += this.sides[i]
        }
        return num
    }

}


class Triangle extends Polygon {

    get isValid() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)){
          return true
      }
      else 
      return false 
    }
  }
  

class Square extends Polygon {

    get isValid (){
        let yo = this.sides[0]
        let oy = this.sides[1]
        let ok = this.sides[2]
        let ko = this.sides[3]
        if ((yo === oy) && (yo === ok) && (yo === ko)){
            return true
        }
        else 
        return false 
    }
    
      get area() {
        return this.sides[0] * this.sides[0]
    }
}