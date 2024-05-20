import { validateValue } from "../ui/Card";

test("Validate value", () => {
  expect(validateValue(50)).toBe(true);
});
