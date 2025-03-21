var expect = function (val) {
  return {
    toBe: function (expected) {
        if(val !== expected){
            throw new Error("Not Equal");
        }
        return true;
    },
    notToBe: function (expected) {
        if(val === expected){
            throw new Error("Equal");
        }
        return true;
    },
  };
};
console.log(expect(5).toBe(5));
console.log(expect(6).notToBe(6));
