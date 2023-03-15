/*import "mocha";
import { expect } from "chai";
import { Lista } from "../../src/ejercicio-2/lista";

const test = new Lista(["a", "b", "c"]);
const test2 = new Lista(["d", "e", "f"]);
const test3 = new Lista(["g", "h", "i"]);
const test4 = new Lista([1, 2, 3, 4, 5]);
const test5 = new Lista([6, 7, 8]);
const test6 = new Lista([1, 2, 3]);
const test7 = new Lista([4, 5, 6]);
const test8 = new Lista(["a", "b"]);
const test9 = new Lista(["c", "d"]);
const test10 = new Lista(["e", "f"]);
const test11 = new Lista([9, 10]);
const test12 = new Lista([1, 2, 3]);
const test13 = new Lista(["b", "c", "d"]);
const test14 = new Lista(["uno", "dos", "tres", "cuatro"]);
const test15 = new Lista([74, 12, 35]);


describe("length() function tests", () => {
  const acc = 0;
  const acc2 = "";
  
  it("test13.reduce() returns 'cuatro'", () => {    
    expect(test14.reduce("", acc2, function(acc2, item) {      
      if (item.length > acc2.length) {
        return item;
      } else {
        return acc2;
      }      
    })).to.be.eqls('cuatro');
  });
  
  it("test12.forEach() returns true", () => {
    expect(test6.forEach(function(item) {
      return item * item;
    })).to.be.eqls(true);
  });

  it("test4.reduce() returns 15", () => {
    expect(test4.reduce(0, acc, function(acc, item) {
      return acc + item;
    })).to.be.eql(15);
  });

  it("test14.reverse() returns ['cuatro', 'tres', 'dos', 'uno']", () => {    
    expect(test14.reverse()).to.be.eqls(new Lista(['cuatro', 'tres', 'dos', 'uno']));
  });

  it("test15.reverse() returns [5, 4, 3, 2, 1]", () => {
    expect(test4.reverse()).to.be.eql(new Lista([5, 4, 3, 2, 1]));
  });  

  it("test.length() returns 3", () => {
    expect(test.length()).to.be.eql(3);
  });
  
  it("test.length() returns 5", () => {
    expect(test4.length()).to.be.eql(5);
  });  

  it("test2.append(test3) returns ['d', 'e', 'f', 'g', 'h', 'i']", () => {    
    expect(test2.append(test3)).to.be.eqls(new Lista(['d', 'e', 'f', 'g', 'h', 'i']));
  });

  it("test6.append(test7) returns [1, 2, 3, 4, 5, 6]", () => {
    expect(test6.append(test7)).to.be.eql(new Lista([1, 2, 3, 4, 5, 6]));
  });  

  it("test5.concatenate(test11) returns [6, 7, 8, 1, 2, 3, 4, 5]", () => {    
    expect(test5.concatenate(test4)).to.be.eqls(new Lista([6, 7, 8, 1, 2, 3, 4, 5]));
  });

  it("test8.concatenate(test9, test10) returns ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    expect(test8.concatenate(test9, test10)).to.be.eql(new Lista(['a', 'b', 'c', 'd', 'e', 'f']));
  });  

  it("test8.filter() returns ['d', 'e', 'f']", () => {    
    expect(test8.filter(function(item) {
      return item > "c";
    })).to.be.eqls(new Lista(['d', 'e', 'f']));
  });

  it("test4.filter() returns [4, 5]", () => {
    expect(test4.filter(function(item) {
      return item > 3;
    })).to.be.eqls(new Lista([4, 5]));
  });

  it("test13.map() returns ['eq', 'fq']", () => {    
    expect(test10.map(function(item) {      
        return item + "q";
      
    })).to.be.eqls(new Lista(['eq', 'fq']));

  it("test12.map() returns [1, 4, 9]", () => {
    expect(test7.map(function(item) {
      return item * item;
    })).to.be.eqls(new Lista([1, 4, 9]));
  });
});
});
*/