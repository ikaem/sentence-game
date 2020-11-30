// src\tests\example.test.ts

const addTwo = (num: number) => {
  const two = 2;
  return two + num;
};

test("see if true is true", () => {
  // expect(true).toBe(false);
  const num = 4;
  expect(addTwo(num)).toBe(6);
});

export {};
