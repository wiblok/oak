import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (context) => {
  // JSONレスポンスの生成
  const jsonResponse = {
    message: "This is a JSON response",
  };
  context.response.body = jsonResponse;

  // HTMLレスポンスの生成
  const htmlResponse = "<h1>This is an HTML response</h1>";
  context.response.headers.set("Content-Type", "text/html");
  context.response.body = htmlResponse;

  // レスポンスヘッダーの設定
  context.response.headers.set("Custom-Header", "Custom Value");

  // ステータスコードの設定
  context.response.status = 201;

  // エラーレスポンスの生成
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
