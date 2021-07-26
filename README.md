# fv-dynatrace-lib

Natura lib to instrument RN applications with Dynatrace.

---
## Installing
Clone the repository in a directory of your preference.

Install node dependencies needed to the project execute:
```
yarn install
```
---

## Developing

It is important to follow some good practices when developing:

- All the work is done in the `src` directory via typescript files.
- All testing files must be placed in the `__test__` directory.
- All testing files must follow the same directory structure as the source files.
- If necessary to connect component, try always depending on typescript interfaces over concrete objects.
- Try to avoid using `any` type.

---
## Building

Before building, make sure to run the following commands:

```
yarn format
yarn lint
```

If, for some reason, the code did not pass the linting, correct the code and follow:

```
yarn build
```
