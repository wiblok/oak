import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (context) => {
  // リクエストヘッダーの取得
  const headers = context.request.headers;

  // クエリパラメータの取得
  const queryParam = context.request.url.searchParams.get("param");

  const response = {
    headers: headers,
    queryParam: queryParam,
  };

  context.response.body = response;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Server is running on port 3000");
