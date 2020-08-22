    // NUMBER 1
describe("replaceWith", function(){
    it("returns a string", function(){
        expect(replaceWith("awesome")).toEqual(jasmine.any(String))
    });
    it("takes in a string,a character and a character to replace it with", function(){
        expect(replaceWith("awesome")).toEqual("awesome","e","z")
    });
    it("returns the string with replacements", function(){
        expect(replaceWith("awesome","e","z")).toEqual("awzsomz")
    });
    it("is case sensitive", function(){
        expect(replaceWith("Foo","F","B")).toEqual("Boo")
    });
})

        // NUMBER 2
describe("expand", function(){
    it("returns an array", function(){
        expect(expand([1,2,3])).toEqual(jasmine.any(Array))
    });
    it("takes an array and a number and returns a copy of the array", function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
    });
    it("itakes an array and a number and returns a copy of the array", function(){
        expect(expand(["foo", "test"],1)).toEqual(["foo", "test"])
    });
})

    // NUMBER 3
describe("acceptNumbersOnly", function(){
    it("returns a boolean",function(){
        expect(acceptNumbersOnly(1,2,3,4,5)).toEqual(jasmine.any(Boolean))
    });
    it("it takes in any number as arguments and return true if all of them are numbers", function(){
        expect(acceptNumbersOnly(1,2,3,4,5)).toBe(true)
    });
    it("and returns false if all of them are not numbers", function(){
        expect(acceptNumbersOnly(1,2,3,NaN)).toBe(false)
    });
})

    // NUMBER 4
describe("mergeArrays", function(){
    it("returns an array", function(){
        expect(mergeArrays([2,1],[3,4])).toEqual(jasmine.any(Array))
    });
    it("takes in two arrays and returns one array with values sorted", function(){
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
    });
})

    // NUMBER 5
describe("mergeObjects", function(){
    it("returns a object", function(){
        var obj1= {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        };
        expect(mergeObjects(obj1,obj2)).toEqual(jasmine.any(Object));
    });
    it("takes in two objects and return a object with the keys and values combined", function(){
        expect(mergeObjects(obj1,obj2)).toEqual({name:"Foo",num:55,test:"thing"});
    });
})
    