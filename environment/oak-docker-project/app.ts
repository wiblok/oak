import { Application } from "https://deno.land/x/oak@v8.0.0/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello, Oak!";
});

await app.listen({ port: 3000 });
