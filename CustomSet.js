//Set and Map are same but both have indexing as diff
/*
Set has elememts and index as key or same
or
Map has elememts and index as different
*/
class CustomSet{
    constructor(){
        this.items=new Map();
    }
    add(elt){
        if(this.items.has(elt)){
            return false;
        }
        this.items.set(elt,elt);
        return false;
    }
    has(elt){
        return this.items.has(elt);
    }
    remove(elt){
        return this.items.delete(elt);
    }
    size(){
        return this.items.size;
    }
    values(){
        return[...this.items.keys()];
    }
    union(otherSet){
        const unionSet=new CustomSet();
        this.values().forEach(value=>unionSet.add(value));
        otherSet.values().forEach(value=>unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet){
        const intersectionSet=new CustomSet();
        const smallerSet=this.size()<otherSet.size()?this:otherSet;
        const largerSet=this.size()<otherSet.size()?otherSet:this;
        smallerSet.values().forEach(value=>{
            if(largerSet.has(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
}

//TEST
const setA=new CustomSet();
setA.add(2);
setA.add(4);
setA.add(6);
setA.add(8);
setA.add(10);
const setB=new CustomSet();
setB.add(1);
setB.add(4);
setB.add(7);
setB.add(8);
console.log("Printing Set A:--")
console.log(setA);
console.log("Printing Set B:--")
console.log(setB);
setC=setA.union(setB);
console.log("Printing Set After Union:--")
console.log(setC);
setD=setA.intersection(setB);
console.log("Printing Set After Intersection:--")
console.log(setD);
console.log("Printing Set After remove an element:--")
setA.remove(2);
console.log(setA);