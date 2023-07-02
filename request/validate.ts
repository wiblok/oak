import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.post("/users", async (context) => {
  const requestBody = await context.request.body().value;
  console.log(requestBody);
  if (
    !requestBody.name ||
    typeof requestBody.name !== "string" ||
    !requestBody.age ||
    typeof requestBody.age !== "number"
  ) {
    context.response.status = 400;
    context.response.body = { error: "Invalid request body" };
    return;
  }

  const { name, age } = requestBody;

  // バリデーションが成功した場合の処理
  context.response.body = { message: "User created successfully", name, age };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Server is running on port 3000");
