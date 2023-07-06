import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/json", (context) => {
  const jsonResponse = {
    message: "This is a JSON response",
  };
  context.response.body = jsonResponse;
});

router.get("/html", (context) => {
  const htmlResponse = "<h1>This is an HTML response</h1>";
  context.response.headers.set("Content-Type", "text/html");
  context.response.body = htmlResponse;
});

router.get("/header", (context) => {
  context.response.headers.set("Custom-Header", "Custom Value");
  context.response.body = { message: "Check the headers!" };
});

router.get("/error", (context) => {
  const errorResponse = {
    error: "An error occurred",
  };
  context.response.status = 500;
  context.response.body = errorResponse;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
