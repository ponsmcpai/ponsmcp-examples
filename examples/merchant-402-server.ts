/**
 * Minimal merchant: answers 402 until a verified payment intent unlocks it.
 * This is the server side of pons_pay_resource — a real 402 loop in ~40 lines.
 * Run: MERCHANT_ADDRESS=0x… npx tsx examples/merchant-402-server.ts
 */
import { createServer } from "node:http";

const MERCHANT = process.env.MERCHANT_ADDRESS ?? "0x0000000000000000000000000000000000000000";
const PRICE = "0.01"; // USDG

// Demo intent store — production uses the PonsMCP registry API (replay-safe).
const paid = new Set<string>();

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost:8787");

  if (!url.searchParams.get("tx")) {
    // 402 challenge — this is the shape pons_pay_resource parses
    res.writeHead(402, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      amount_usdg: PRICE,
      pay_to: MERCHANT,
      chain_id: 4663,
      instructions: "Settle with @ponsmcp/sdk pons_pay, then retry with ?tx=<hash>",
    }));
  }

  const tx = url.searchParams.get("tx")!;
  // Production: verify receipt on-chain (status, token, recipient, amount) — see docs/guides/merchant-integration.md
  paid.add(tx);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ unlocked: true, tx, note: "demo store; verify receipts yourself in production" }));
}).listen(8787, () => console.log("402 merchant on http://localhost:8787"));
