/**
 * Quote only — no wallet, no execution, no risk.
 * Run: npx tsx examples/quote.ts
 */
import { PonsMCPClient } from "@ponsmcp/sdk";

const client = new PonsMCPClient();

const quote = await client.quote("5.00");
console.log("USDG settlement quote");
console.log("  token     :", quote.token);
console.log("  symbol    :", quote.symbol);
console.log("  amountUsd :", quote.usd);
console.log("  baseUnits :", quote.amountBase.toString(), "(6 decimals)");
