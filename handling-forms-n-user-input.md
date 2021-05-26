# Handling Forms and User Input

- What's complex about forms
- Hanlding inputs & forms with react
- Simplification

## What's complex about forms

- Forms and inputs can assume different states:

  - One or morein inputs are invalid:

    - Output input-specific error messages & highlight problematic inputs
    - Ensure form can't be submitted / saved

  - All inputs are valid
    - Allow form to be submitted saved

## When to validate

- When form is submitted

  - Allows the user to enter a valid value before warning him / her
  - Avoid unnecessary warnings but maybe present feedback "too late"

- When a input is losing focus

  - Allows the user to enter a valid value before warning him / her
  - Very useful for untouched forms

- When every keystrok

  - Warns user before he / she had a chance of entering valid values
  - If applied only on invalid inputs, has the potential of providing more direct feedback.

- 