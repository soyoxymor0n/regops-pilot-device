# regops-pilot-device

A tiny, **fictional** medical-device software component. It exists only as a
pilot source repository for [RegOps](https://regops.systems) RegBuild: real
pull requests, real CI runs, real releases with an SBOM and a test report, real
GitHub deployments and real dependency alerts for the GitHub adapter to read.
It is not a device and must not be used as one.

| Item | Where |
|---|---|
| Software item | `src/dose.ts` (weight-based dose, capped) |
| Requirements | `REQ-DOSE-001..003`, named in the test titles in `tests/dose.test.ts` |
| CI | `.github/workflows/ci.yml` (lint, tests with JUnit report, staging deployment) |
| Release | `.github/workflows/release.yml` on a `v*` tag (tests, SPDX SBOM, GitHub Release, production deployment) |
| Dependencies | Dependabot for npm and Actions |

Requirement `REQ-DOSE-004` (a unit check on the maximum) is deliberately
**not** implemented, so reports have a real gap to print.

`minimist@1.2.0` is a deliberately outdated runtime dependency so Dependabot has a real, known advisory to report. It is not used by the code.
