const Main = require("../controllers/Main");


function initRoutes(app) {

    app.get("/", Main().displayLanding)
    app.get("/preliminary", Main().displayP)
    app.get("/veichle-history", Main().displayVH)
    app.get("/exterior-body", Main().displayVDEB)
    app.get("/exterior-lights", Main().displayVDEL)
    app.get("/interior", Main().displayVDI)
    app.get("/glass-parts", Main().displayVDGP)
    app.get("/wheels", Main().displayVDW)
    app.get("/underbody", Main().displayVDU)
    app.get("/tires-condition", Main().displayTC)
    app.get("/warning-lights", Main().displayWL)
    app.get("/door-locks", Main().displayMDL)
    app.get("/seat-belts", Main().displayMSB)
    app.get("/windows-mirrors", Main().displayMWM)
    app.get("/audio-system", Main().displayMAS)
    app.get("/accesories", Main().displayMA)
    app.get("/lights-signals", Main().displayMLS)
    app.get("/trunk-comp", Main().displayMTC)
    app.get("/air-con", Main().displayMAC)
    app.get("/air-bag", Main().displayMAB)
    app.get("/steering-wheel", Main().displayMSW)
    app.get("/clutch-sus", Main().displayMCS)
    app.get("/engine-com", Main().displayMEC)
    app.get("/brake", Main().displayMB)
    app.get("/fuel-exhaust", Main().displayFE)
    app.get("/chassis-frame", Main().displayCF)
    app.get("/engine-control", Main().displayEC)
    app.get("/road-test", Main().displayRT)
   
}

module.exports = initRoutes;