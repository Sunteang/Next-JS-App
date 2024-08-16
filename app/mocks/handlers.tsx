import { rest } from "msw";

export const handlers = [
  rest.post("/api/register", (req, res, ctx) => {
    const { email } = req.body;

    if (email === "test@alreadyexists.com") {
      return res(ctx.status(400), ctx.json({ message: "User already exists" }));
    }

    return res(
      ctx.status(201),
      ctx.json({ message: "User registered successfully!" })
    );
  }),
];
