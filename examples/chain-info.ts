/**
 * Live read snapshot — no wallet needed.
 * Run: npx tsx examples/chain-info.ts
 */
import { PonsMCPClient } from "@ponsmcp/sdk";

const client = new PonsMCPClient();

// USDG metadata straight from chain 4663
const usdg = await client.tokenInfo("0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168");
console.log("settlement token:", usdg.name, `(${usdg.symbol})`, "-", usdg.decimals, "decimals");

// PONS market snapshot (DexScreener-backed)
const price = await client.price();
if (price) {
  console.log("PONS market: $" + price.priceUsd, "· liquidity $", Math.round(price.liquidityUsd ?? 0));
} else {
  console.log("PONS market: no pairs right now");
}
