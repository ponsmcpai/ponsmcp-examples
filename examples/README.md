# PonsMCP examples

Runnable patterns for autonomous agent payments on Robinhood Chain (4663), settled in USDG.

| File | Needs key? | What it shows |
|---|---|---|
| `chain-info.ts` | no | live chain snapshot |
| `quote.ts` | no | USD → USDG base units |
| `launch-info.ts` | no | pons v1 launch-token intelligence |
| `pay.ts` | **yes** | policy-checked settlement + receipt |
| `merchant-402-server.ts` | no | the 402 server side of the loop |

```bash
npm install @ponsmcp/sdk
npx tsx examples/quote.ts        # risk-free
PONSMCP_PRIVATE_KEY=0x… npx tsx examples/pay.ts 0xrecipient 0.01
```

Safety: read-only examples never need a key. Payment examples enforce SDK policy caps (100 USDG/tx, 1,000/day default). Never commit keys.
