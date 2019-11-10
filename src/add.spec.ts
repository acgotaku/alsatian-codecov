import { Expect, TestCase, Test } from "alsatian";
import { add } from './add';
export class AddestFixture {

  @TestCase(2, 2, 4)
  @TestCase(2, 3, 5)
  @TestCase(3, 3, 6)
  @Test("add tests")
  public exampleTest(a: number, b: number, sum: number) {
    Expect(add(a, b)).toBe(sum);
  }
}
