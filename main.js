class Animal{
    constructor(type,species, color){
        this.legs = 4;
        this.type= type;
        this.species = species;
        this.color = color;
    }

    makeSound(){
        console.log('roar');
    }

    changeColor(color){
        this.color = color;
    }

}

let iguana = new Animal('iguana','reptile','green');
console.log(iguana);

iguana.changeColor('red');
console.log(iguana);