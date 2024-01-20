const router = require('express').Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const token = await userManager.login(email, password);

      res.cookie(TOKEN_KEY, token);
      res.redirect("/");
    } catch (err) {
      res.render("users/login", { error: getErrorMessage(err) });
    }
  });