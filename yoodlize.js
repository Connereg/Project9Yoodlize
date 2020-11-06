var pageObject
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.obKLesson9()
        pageObject
            .navigate()
            .maximizeWindow()

    },
    after: browser => {
        pageObject
            .end()
    },
    'Yoodalize See All Functions': browser => {
        pageObject
        .pause(1000)
        .click('@seeallButton1')
        .verify.containsText('@checkCatagory', "Recreational Vehicles")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton2')
        .verify.containsText('@checkCatagory', "Outdoor Gear")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton3')
        .verify.containsText('@checkCatagory', "Electronics")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton4')
        .verify.containsText('@checkCatagory', "Party & Wedding Equipment")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton5')
        .verify.containsText('@checkCatagory', "Tools")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton6')
        .verify.containsText('@checkCatagory', "Clothing")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton7')
        .verify.containsText('@checkCatagory', "Home and Kitchen")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton8')
        .verify.containsText('@checkCatagory', "Toys and Games")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton9')
        .verify.containsText('@checkCatagory', "Lawn and Garden")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton10')
        .verify.containsText('@checkCatagory', "Sporting Equipment")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton11')
        .verify.containsText('@checkCatagory', "DVDs")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton12')
        .verify.containsText('@checkCatagory', "Venues")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton13')
        .verify.containsText('@checkCatagory', "Music")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton14')
        .verify.containsText('@checkCatagory', "Business Equipment")
        .api.back()
        pageObject
        .pause(1000)
        .click('@seeallButton15')
        .verify.containsText('@checkCatagory', "Misc")
        .api.back()
        pageObject




        //Now Testing buttons on bottom of Home Screen
        .click('@bottomscreenLink1')
        .verify.containsText('@checkCatagory', "Tools")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink2')
        .verify.containsText('@checkCatagory', "Outdoor Gear")
        .api.back()
        pageObject
        .click('@bottomscreenLink3')
        .verify.containsText('@checkCatagory', "Electronics")
        .api.back()
        pageObject
        .click('@bottomscreenLink4')
        .verify.containsText('@checkCatagory', "Party & Wedding Equipment")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink5')
        .verify.containsText('@checkCatagory', "Recreational Vehicles")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink6')
        .verify.containsText('@checkCatagory', "Clothing")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink7')
        .verify.containsText('@checkCatagory', "Home and Kitchen")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink8')
        .verify.containsText('@checkCatagory', "Toys and Games")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink9')
        .verify.containsText('@checkCatagory', "Lawn and Garden")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink10')
        .verify.containsText('@checkCatagory', "Sporting Equipment")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink11')
        .verify.containsText('@checkCatagory', "DVDs")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink12')
        .verify.containsText('@checkCatagory', "Venues")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink13')
        .verify.containsText('@checkCatagory', "Music")
        .api.back()
        pageObject
        .pause(500)
        .click('@bottomscreenLink14')
        .verify.containsText('@checkCatagory', "Misc")
        .api.back()
        pageObject
        .pause(500)

    }
}