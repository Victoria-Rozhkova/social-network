export type FieldValidatorType = (value: string) => string | undefined;

export const maxLength =
  (maxLength: number): FieldValidatorType =>
  (value) => {
    return value && value.length > maxLength
      ? `Must be ${maxLength} characters or less`
      : undefined;
  };

export const required: FieldValidatorType = (value) =>
  value || typeof value === "number" ? undefined : "Field is required";

export const minLength =
  (minLength: number): FieldValidatorType =>
  (value) =>
    value && value.length < minLength
      ? `Must be ${minLength} characters or more`
      : undefined;
export const email = (value: string): string | undefined =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
