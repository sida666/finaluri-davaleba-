import User from "../fixtures/userdata.json"


describe("რეგისტრაცია ვალიდური ინფორმაციით",()=>{
    it("Case 1",()=>{

        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(User.info.Name)
        cy.get(':nth-child(2) > .imail').type(User.info.Email)
        cy.get('.ipir').type(User.info.PersonaID)
        cy.get(':nth-child(4) > .itel').type(User.info.MobileNumber)
        cy.get(':nth-child(5) > .ipass').type(User.info.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(User.info.Password)
        cy.get('.etx > svg').click() 
        cy.get('.regsub').click()
        cy.get('a').click()
        cy.contains('ჩემი გვერდი').should('be.visible')

    })
})


describe("რეგისტრაცია ვალიდური ინფორმაციით , არ ვნიშნავთ  „ვეთანხმები წესებსა და პირობებს“ ",()=>{
    it("Case 2",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(User.info.Name)
        cy.get(':nth-child(2) > .imail').type(User.info.Email)
        cy.get('.ipir').type(User.info.PersonaID)
        cy.get(':nth-child(4) > .itel').type(User.info.MobileNumber)
        cy.get(':nth-child(5) > .ipass').type(User.info.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(User.info.Password)
        cy.get('.regsub').click()
        cy.get('.etx > svg').should('have.css','color','rgb(17, 17, 17)')
    })
})


describe("ავტორიზაცია არსებული იუზერით",()=>{
    it("Case 3/11",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get(':nth-child(5) > .imail').type(User.info2.CorrectEmail)
        cy.get('.ipass').type(User.info2.Password)
        cy.get(':nth-child(1) > .redinput').should('have.value','sida1')
        cy.get(':nth-child(2) > .redinput').should('have.value','123213213131')
        cy.get(':nth-child(3) > .redinput').should('have.value','sida1@sida.sida')
        cy.get(':nth-child(4) > .redinput').should('have.value','1321432142142141')
        cy.get(':nth-child(2) > .redinput').should('have.value','2345678899')
        cy.get(':nth-child(3) > .redinput').should('have.value','test@test1.test')
        cy.get(':nth-child(4) > .redinput').should('have.value','592666680')
    })
})


describe("პროდუქტის დამატება კალატაში ",()=>{
    it("Case 4/16",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.burger > .burger-span').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','1')
        cy.get(':nth-child(5) > .price-cart > .product-cart').click()
        cy.get(':nth-child(5) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','2')
        cy.get('.icart').click()
        cy.get('.main-cart').should('be.visible')
        cy.get('.cart-list').should('be.visible')
        
    })
})

describe("კალატიდან პროდუქის წაშლა",()=>{
    it("Case 5/17",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.burger > .burger-span').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','1')
        cy.get('.icart').click()
        cy.get('.main-cart').should('be.visible')
        cy.get('.cart-list').should('be.visible')
        cy.get('.clear > a > svg').click({multiple: true})
        cy.get('.empty').should('have.class','empty active')
    
    })
})