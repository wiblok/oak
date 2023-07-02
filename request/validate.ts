import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { Joi } from "https://deno.land/x@v1.9/djwt/mod.ts";

const router = new Router();

router.post("/users", async (context) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  });

  const { value, error } = schema.validate(await context.request.body().value);

  if (error) {
    context.response.status = 400;
    context.response.body = { error: error.details[0].message };
    return;
  }

  const { name, age } = value;

  // バリデーションが成功した場合の処理
  context.response.body = { message: "User created successfully", name, age };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Server is running on port 3000");
