import { Sandbox } from "@e2b/code-interpreter";

export async function getSandbox(SandboxId: string) {
    const sandbox = await Sandbox.connect(SandboxId)
    return sandbox
}