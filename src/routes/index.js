import { Router } from "express"; //se importa la caracteristica router de express

const router = Router();

router.get("/", (req, res) => { //se establece la ruta raíz http://localhost:3000/
    res.render("index");
});

router.get("/about", (req, res) => { //se establece la ruta http://localhost:3000/about
    res.render("about");
});

router.get("/contact", (req, res) => { //se establece la ruta http://localhost:3000/contact
    res.render("contact");
});

router.get("/adopt", (req, res) => { //se establece la ruta http://localhost:3000/adopt
    res.render("adopt");
});

router.get("/services", (req, res) => { //se establece la ruta http://localhost:3000/services
    res.render("services");
});

export default router; //se exporta la caracteristica router