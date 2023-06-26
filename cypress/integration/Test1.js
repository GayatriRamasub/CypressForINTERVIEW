describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
     cy.get('.search-keyword').type('ca');

      cy.wait(4000);
cy.wait

      cy.get('.product:visible').as('ProductVisible');


     cy.get('.product:visible').should('have.length',4);

     cy.get('.products').find('.product').eq(2).contains('ADD TO CART');

     //cy.get('.products').should(have.text, 'gdgf');


     cy.get('.products').find('.product').each(($el,index,$list) =>{

        const textveg=$el.find('h4.product-name').text();

        if(textveg.includes("Cashews"))


        {
           $el.find('button').click();
         
         //  if($el.get(':nth-child(4) > .product-action > button').includes("ADDED"))

           


        }

     });
      



       

                  
     cy.get('.cart-icon > img').click({ multiple: true }).then(($btn) => {

     //cy.get('.cart-icon > img').click().then(($btn) => {

       // cy.get('a[class="cart-icon"]>img[alt="Cart"]').click;

       // cy.wait(1000);




 // cy.get('button[type="button"]').click({ multiple: true });
   // cy.get('button').as('btn').click()
   cy.wait(1000);

  // cy.get('button').find('button').contains('ADD TO CART');








  //cy.get('.button').each(($el,index,$list) =>{

  // if( $el.css('display') == 'none' && $el.find('a').attr('data-state') == 'clicked')


  // {

   // $el.css('display', 'block');
  // }

     
     //  if($el.get(':nth-child(4) > .product-action > button').includes("ADDED"))

    //   });

  






    //cy.get('div.modal').invoke('css', 'overflow-x', 'visible').should('have.css', 'overflow-x', 'visible')
     
cy.get('button[class=" "]').contains("PROCEED TO").click();


 //if(a.eq=="PROCEED TO CHECKOUT")
 //{
  // cy.get('.button').as('btn');

//cy.get('@btn').click({ multiple: true });


   //cy.wait(2000);



   cy.get('div[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"]>button').click();

   //cy.get('button[class=" "]').click({ multiple: true }).then(($btn)=> {

   

  // cy.get('.button').contains('Place Order').click().then(($btn) => {


        

  cy.get('select[style="width: 200px;"]').select('Andorra');


 //cy.get('selectselect[style="width: 200px;"]>option[value="Andorra"]').click;
        
  // })

    //  })
    //cy.wait(2000);
    
  // if((':nth-child(4) > .product-action > button').includes("ADDED"))
   
   
   
   

 
  //  cy.wait(4000);

   // cy.get('.cart-icon > img').click;


  

    //cy.get('.button').contains('PROCEED TO CHECKOUT').click;

    //cy.get('.button').contains('Place Order').click;



  //  cy.get('select').click;


 //   cy.get('select>option[value="Andorra"]').click;
//   })

 
     })

    })





})
  





  
  