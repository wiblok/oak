import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/hello", (context) => {
    context.response.body = "Hello, Oak!";
  })
  .post("/users", async (context) => {
    const user = await context.request.body().value;
    // ユーザーの作成処理など...
    context.response.body = { id: 1, name: user.name };
  })
  .put("/users/:id", async (context) => {
    const userId = context.params.id;
    const user = await context.request.body().value;
    // ユーザーの更新処理など...
    context.response.body = { id: userId, name: user.name };
  })
  .delete("/users/:id", (context) => {
    const userId = context.params.id;
    // ユーザーの削除処理など...
    context.response.body = { message: `User ${userId} has been deleted.` };
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("サーバーがポート3000で起動しました");
