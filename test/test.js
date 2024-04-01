const assert = require("assert");
const createHelloWorld = require("../create-hello-world-function");
const createCounter = require("../counter");
const expect = require("../to-be-or-not-to-be");
const createCounter2 = require("../counter-2");

describe("Test", () => {
  describe("Test createHelloWorld function", () => {
    // Test case 1: Function always returns "Hello World" when no arguments are passed
    it('Function always returns "Hello World" when no arguments are passed', () => {
      // Arrange
      const expected = "Hello World";
      // Act
      const f = createHelloWorld();
      const result = f();
      // Assert
      assert.strictEqual(result, expected);
    });

    // Test case 2: Function always returns "Hello World" when arguments are passed
    it('Function always returns "Hello World" when arguments are passed', () => {
      // Arrange
      const expected = "Hello World";
      // Act
      const f = createHelloWorld();
      const result = f({}, null, 42);
      // Assert
      assert.strictEqual(result, expected);
    });
  });

  describe("Test createCounter function", () => {
    it("Function returns n and then returns 1 more than the previous value every subsequent time it is called", () => {
      // Test case 1: Testing with n = 10
      // Arrange
      const expected1 = 10;
      const expected2 = 11;
      const expected3 = 12;
      // Act
      const counter1 = createCounter(10);
      const result1 = counter1();
      const result2 = counter1();
      const result3 = counter1();
      // Assert
      assert.strictEqual(result1, expected1);
      assert.strictEqual(result2, expected2);
      assert.strictEqual(result3, expected3);
    });

    it("Function returns n and then returns 1 more than the previous value every subsequent time it is called", () => {
      // Test case 1: Testing with n = -2
      // Arrange
      const expected1 = -2;
      const expected2 = -1;
      const expected3 = 0;
      const expected4 = 1;
      const expected5 = 2;
      // Act
      const counter1 = createCounter(-2);
      const result1 = counter1();
      const result2 = counter1();
      const result3 = counter1();
      const result4 = counter1();
      const result5 = counter1();
      // Assert
      assert.strictEqual(result1, expected1);
      assert.strictEqual(result2, expected2);
      assert.strictEqual(result3, expected3);
      assert.strictEqual(result4, expected4);
      assert.strictEqual(result5, expected5);
    });
  });

  describe("Test expect function", () => {
    it("should pass when using toBe method with equal values", () => {
      assert(expect(5).toBe(5) === true);
    });

    it("should pass when using notToBe method with unequal values", () => {
      assert(expect(5).notToBe(10) === true);
    });

    it("should throw error when using toBe method with unequal values", () => {
      assert.throws(() => {
        expect(5).toBe(10);
      }, Error);
    });

    it("should throw error when using notToBe method with equal values", () => {
      assert.throws(() => {
        expect(5).notToBe(5);
      }, Error);
    });
  });

  describe("Test createCounter2 function", () => {
    it('Scenario 1: init = 5, calls = ["increment","reset","decrement"]', () => {
        const counter = createCounter2(5);
        const expectedOutput = [6, 5, 4];
        const actualOutput = [];
        actualOutput.push(counter.increment()); // 6
        actualOutput.push(counter.reset());     // 5
        actualOutput.push(counter.decrement()); // 4
        assert.deepStrictEqual(actualOutput, expectedOutput);
    });

    it('Scenario 2: init = 0, calls = ["increment","increment","decrement","reset","reset"]', () => {
        const counter = createCounter2(0);
        const expectedOutput = [1, 2, 1, 0, 0];
        const actualOutput = [];
        actualOutput.push(counter.increment()); // 1
        actualOutput.push(counter.increment()); // 2
        actualOutput.push(counter.decrement()); // 1
        actualOutput.push(counter.reset());     // 0
        actualOutput.push(counter.reset());     // 0
        assert.deepStrictEqual(actualOutput, expectedOutput);
    });
  });
});
