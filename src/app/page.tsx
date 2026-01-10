import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC()

  trpc.hell.queryOptions({text: 
    ''
  })
  return (
    <div>
    </div>
  );
}
