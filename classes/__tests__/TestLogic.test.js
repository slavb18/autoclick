import TestLogic from '../TestLogic'

const tl = new TestLogic();
test('2+2=4', () => {
  expect(tl.add(2, 2)).toStrictEqual(4)
});
