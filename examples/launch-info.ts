/**
 * pons v1 launch-token intelligence — read-only, on-chain.
 * Run: npx tsx examples/launch-info.ts <token-address>
 */
import { ponsLaunchInfo } from "@ponsmcp/sdk";

const token = process.argv[2] ?? "0x39dBED3a2bd333467115dE45665cC57F813C4571"; // PONS
const info = await ponsLaunchInfo(token);
console.log(info);
