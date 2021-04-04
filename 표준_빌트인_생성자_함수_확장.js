class MyArray extends Array{
    uniq(){
        return this.filter((v,i,self)=>self.indexOf(v)===i);
    }

    average(){
        console.log(this);
        return this.reduce((pre,cur) => pre+cur,0)/this.length;
    }
}

const myArray = new MyArray(1,1,2,3);
console.log(myArray);

console.log(myArray.uniq());

console.log(myArray.average());
