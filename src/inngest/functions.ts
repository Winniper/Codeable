import { Agent, openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const summerizer = createAgent({
      name: "summerizer",
      system: "You are an expert summarizer. You write readable, concise, simple content.",
      model: openai({
        model: "llama-3.3-70b-versatile",
        baseUrl: "https://api.groq.com/openai/v1",
      }),
    });

    const { output } = await summerizer.run(`Summarize the following text:${event.data.value}`)

    return { output }
  },
);