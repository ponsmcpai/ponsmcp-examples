/**
 * Policy-checked settlement. REQUIRES:
 *   PONSMCP_PRIVATE_KEY=0x…        (agent wallet: gas ETH + USDG)
 * Run: npx tsx examples/pay.ts <recipient> <amountUsd>
 */
import { PonsMCPClient } from "@ponsmcp/sdk";

const [payTo, amountUsd] = [process.argv[2], process.argv[3] ?? "0.01"];
if (!payTo) { console.error("usage: tsx pay.ts <recipient> <amountUsd>"); process.exit(1); }

const client = new PonsMCPClient({
  privateKey: process.env.PONSMCP_PRIVATE_KEY as `0x${string}`,
  policy: { maxPerTx: 100_000_000n, dailyLimit: 1_000_000_000n }, // 100 / 1,000 USDG
});

const result = await client.pay({ payTo, amountUsd });
if (result.ok) {
  console.log("settled :", result.txHash);
  console.log("explorer:", result.explorer);
  for (const t of result.transfers ?? []) console.log("transfer:", t.symbol, t.amountHuman, "→", t.to);
} else {
  console.error("failed at", result.stage, "-", result.error);
}
