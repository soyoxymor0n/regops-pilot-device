# Requirements

| ID | Statement | Verified by |
|---|---|---|
| REQ-DOSE-001 | The dose is weight times the per-kg rate. | tests/dose.test.ts |
| REQ-DOSE-002 | The dose never exceeds the configured maximum. | tests/dose.test.ts |
| REQ-DOSE-003 | A non-positive weight is rejected. | tests/dose.test.ts |
| REQ-DOSE-004 | The configured maximum is itself validated against a device ceiling. | (not yet verified) |
