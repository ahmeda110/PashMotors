function Main(){
    return {
       displayLanding(req, res) {
        res.render('main', { page: 'landing', active: '' })
       },
       displayP(req, res) {
        res.render('main', { page: 'preliminary', active: 'preliminary' })
       },
       displayVH(req, res){
        res.render('main', { page: 'veichle-history', active: 'veichle-history' })
       },
       displayVDEB(req, res){
        res.render('main', { page: 'veichle-damagesEB', active: 'veichle-damages|body' })
       },
       displayVDEL(req, res){
        res.render('main', { page: 'veichle-damagesEL', active: 'veichle-damages|lights' })
       },
       displayVDI(req, res){
        res.render('main', { page: 'veichle-damagesI', active: 'veichle-damages|interior' })
       },
       displayVDGP(req, res){
        res.render('main', { page: 'veichle-damagesGP', active: 'veichle-damages|glass' })
       },
       displayVDW(req, res){
        res.render('main', { page: 'veichle-damagesW', active: 'veichle-damages|wheels' })
       },
       displayVDU(req, res){
        res.render('main', { page: 'veichle-damagesU', active: 'veichle-damages|chasis' })
       },
       displayTC(req, res){
        res.render('main', { page: 'tires-condition', active: 'tires-condition' })
       },
       displayWL(req, res){
        res.render('main', { page: 'warning-lights', active: 'warning' })
       },
       displayMDL(req, res){
        res.render('main', { page: 'Mdoor-locks', active: 'mechanical|locks' })
       },
       displayMSB(req, res){
        res.render('main', { page: 'Mseat-belts', active: 'mechanical|belts' })
       },
       displayMWM(req, res){
        res.render('main', { page: 'Mwindows-mirrors', active: 'mechanical|windowsM' })
       },
       displayMAS(req, res){
        res.render('main', { page: 'Maudio-system', active: 'mechanical|audio' })
       },
       displayMA(req, res){
        res.render('main', { page: 'Maccesories', active: 'mechanical|accesories' })
       },
       displayMLS(req, res){
        res.render('main', { page: 'Mlights-signals', active: 'mechanical|signals' })
       },
       displayMTC(req, res){
        res.render('main', { page: 'Mtrunk-comp', active: 'mechanical|trunk' })
       },
       displayMAC(req, res){
        res.render('main', { page: 'Mair-con', active: 'mechanical|airC' })
       },
       displayMAB(req, res){
        res.render('main', { page: 'Mair-bag', active: 'mechanical|airB' })
       },
       displayMSW(req, res){
        res.render('main', { page: 'Msteering-wheel', active: 'mechanical|steeringW' })
       },
       displayMCS(req, res){
        res.render('main', { page: 'Mclutch-sus', active: 'mechanical|clutchS' })
       },
       displayMEC(req, res){
        res.render('main', { page: 'Mengine-com', active: 'mechanical|engineCom' })
       },
       displayMB(req, res){
        res.render('main', { page: 'Mbrake', active: 'mechanical|brake' })
       },
       displayFE(req, res){
        res.render('main', { page: 'Mfuel-exhaust', active: 'mechanical|fuelE' })
       },
       displayCF(req, res){
        res.render('main', { page: 'Mchassis-frame', active: 'mechanical|chassisF' })
       },
       displayEC(req, res){
        res.render('main', { page: 'Mengine-control', active: 'mechanical|engineControl' })
       },
       displayRT(req, res){
        res.render('main', { page: 'road-test', active: 'roadT' })
       },


    }
}

module.exports = Main