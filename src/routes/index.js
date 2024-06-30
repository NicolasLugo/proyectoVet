import { Router } from "express"; //se importa la caracteristica router de express

const router = Router();

const users = {
  user1: "password1",
  user2: "password2",
};

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("index", {
      user: req.session.user,
    });
  } else {
    res.render("login");
  }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
      req.session.user = username;
      res.redirect('/');
    } else {
      res.send('Invalid username or password');
    }
  });

router.get("/logout", (req, res) => {
  //se establece la ruta http://localhost:3000/logout
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.redirect("/");
  });
});

router.get("/index", (req, res) => {
  //se establece la ruta http://localhost:3000/index
  res.render("index");
});

router.get("/about", (req, res) => {
  //se establece la ruta http://localhost:3000/about
  res.render("about");
});

router.get("/contact", (req, res) => {
  //se establece la ruta http://localhost:3000/contact
  res.render("contact");
});

router.get("/adopt", (req, res) => {
  //se establece la ruta http://localhost:3000/adopt
  res.render("adopt");
});

router.get("/services", (req, res) => {
  //se establece la ruta http://localhost:3000/services
  res.render("services");
});

export default router; //se exporta la caracteristica router
