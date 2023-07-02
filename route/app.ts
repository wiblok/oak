import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/hello", (context) => {
  context.response.body = "Hello, Oak!";
});

router.post("/users", async (context) => {
  const user = await context.request.body().value;
  // ユーザーの作成処理など...
  context.response.body = { id: 1, name: user.name };
});

router.put("/users/:id", async (context) => {
  if (context.params && context.params.id && context.request.hasBody) {
    const userId = context.params.id;
    const user = await context.request.body().value;
    // ユーザーの更新処理など...
    context.response.body = { id: userId, name: user.name };
  }
});

router.delete("/users/:id", (context) => {
  if (context.params && context.params.id) {
    const userId = context.params.id;
    // ユーザーの削除処理など...
    context.response.body = { message: `User ${userId} has been deleted.` };
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
console.log("サーバーがポート3000で起動しました");
