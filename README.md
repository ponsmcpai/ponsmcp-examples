# PonsMCP examples

Runnable patterns for autonomous agent payments with `@ponsmcp/sdk` on Robinhood Chain (4663), settled in USDG.

## Examples

| File | What it shows |
|---|---|
| quote.ts | Convert USD to USDG base units without executing |
| pay.ts | Policy-checked settlement with receipt verification |
| launch-info.ts | Read a pons v1 launch token onchain |
| merchant-402.ts | Merchant resource that answers 402 until a verified intent unlocks it |

## Install

```bash
npm install @ponsmcp/sdk
export PONSMCP_PRIVATE_KEY=0x...   # only needed for pay examples
```

## Safety

All payment examples enforce the SDK policy caps. Read-only examples never need a private key. Set caps before funding any agent wallet.
