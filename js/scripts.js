
    if(document.querySelector('.subBtn')){


        document.querySelector('.subBtn').addEventListener('click', () => {

            // subscribe form variables
        sessionStorage.setItem('firstName', document.getElementById('fName').value);
        sessionStorage.setItem('lastName', document.getElementById('lName').value);
        sessionStorage.setItem('months', document.getElementById('months').value);
        sessionStorage.setItem('address', document.getElementById('address').value);
        sessionStorage.setItem('city', document.getElementById('city').value);
        sessionStorage.setItem('state', document.getElementById('state').value);
        sessionStorage.setItem('zipcode', document.getElementById('zipcode').value);
        
        

    
        }); // end on click function



    } //end if subBtn exists

    if(document.getElementById('burgerSelect')){

                        //if the number of burger ordered is changed update the price
        document.getElementById('burgerSelect').addEventListener('change', () => {

            if(document.getElementById('burgerSelect') && document.getElementById('pizzaSelect') && document.getElementById('saladSelect')){

                if(document.querySelector('#burgerSelect').value > 0){
                    sessionStorage.setItem('burgerNum', document.getElementById('burgerSelect').value);
                }else{
                    sessionStorage.setItem('burgerNum', 0);
                }
                if(document.querySelector('#pizzaSelect').value > 0){
                    sessionStorage.setItem('pizzaNum', document.getElementById('pizzaSelect').value);
                }else{
                    sessionStorage.setItem('pizzaNum', 0);
                }
                if(document.querySelector('#saladSelect').value > 0){
                    sessionStorage.setItem('saladNum', document.getElementById('saladSelect').value);
                }else{
                    sessionStorage.setItem('saladNum', 0);
                }
        
                let totalPrice = (sessionStorage.getItem('burgerNum') * 8.99) + (sessionStorage.getItem('pizzaNum') * 6.99) + (sessionStorage.getItem('saladNum') * 4.99);
        
                if(document.querySelector('.totalPrice')){
                    document.querySelector('.totalPrice').innerHTML = totalPrice;
                }
        
            }

        }); // end event of burger change

    }

    if(document.getElementById('pizzaSelect')){

                    //event if number of pizzas change
        document.getElementById('pizzaSelect').addEventListener('change', () => {

            if(document.getElementById('burgerSelect') && document.getElementById('pizzaSelect') && document.getElementById('saladSelect')){

                if(document.querySelector('#burgerSelect').value > 0){
                    sessionStorage.setItem('burgerNum', document.getElementById('burgerSelect').value);
                }else{
                    sessionStorage.setItem('burgerNum', 0);
                }
                if(document.querySelector('#pizzaSelect').value > 0){
                    sessionStorage.setItem('pizzaNum', document.getElementById('pizzaSelect').value);
                }else{
                    sessionStorage.setItem('pizzaNum', 0);
                }
                if(document.querySelector('#saladSelect').value > 0){
                    sessionStorage.setItem('saladNum', document.getElementById('saladSelect').value);
                }else{
                    sessionStorage.setItem('saladNum', 0);
                }
        
                let totalPrice = (sessionStorage.getItem('burgerNum') * 8.99) + (sessionStorage.getItem('pizzaNum') * 6.99) + (sessionStorage.getItem('saladNum') * 4.99);
        
                if(document.querySelector('.totalPrice')){
                    document.querySelector('.totalPrice').innerHTML = totalPrice;
                }
        
            }

        }); //end event of number of pizzas

    }

    if(document.getElementById('saladSelect')){

                    //event for number of salads
        document.getElementById('saladSelect').addEventListener('change', () => {

            if(document.getElementById('burgerSelect') && document.getElementById('pizzaSelect') && document.getElementById('saladSelect')){

                if(document.querySelector('#burgerSelect').value > 0){
                    sessionStorage.setItem('burgerNum', document.getElementById('burgerSelect').value);
                }else{
                    sessionStorage.setItem('burgerNum', 0);
                }
                if(document.querySelector('#pizzaSelect').value > 0){
                    sessionStorage.setItem('pizzaNum', document.getElementById('pizzaSelect').value);
                }else{
                    sessionStorage.setItem('pizzaNum', 0);
                }
                if(document.querySelector('#saladSelect').value > 0){
                    sessionStorage.setItem('saladNum', document.getElementById('saladSelect').value);
                }else{
                    sessionStorage.setItem('saladNum', 0);
                }
        
                let totalPrice = (sessionStorage.getItem('burgerNum') * 8.99) + (sessionStorage.getItem('pizzaNum') * 6.99) + (sessionStorage.getItem('saladNum') * 4.99);
        
                if(document.querySelector('.totalPrice')){
                    document.querySelector('.totalPrice').innerHTML = totalPrice;
                }
        
            }

        }); //end event for number of salads

    }

    if(document.querySelector('.subFirstName')){
        document.querySelector('.subFirstName').innerHTML = sessionStorage.getItem('firstName');
    }

    if(document.querySelector('.subLastName')){
        document.querySelector('.subLastName').innerHTML = sessionStorage.getItem('lastName');
    }

    if(document.querySelector('.subMonths')){
        document.querySelector('.subMonths').innerHTML = sessionStorage.getItem('months');
    }

    if(document.querySelector('.subAddress')){
        document.querySelector('.subAddress').innerHTML = sessionStorage.getItem('address');
    }
    if(document.querySelector('.subCity')){
        document.querySelector('.subCity').innerHTML = sessionStorage.getItem('city');
    }
    if(document.querySelector('.subState')){
        document.querySelector('.subState').innerHTML = sessionStorage.getItem('state');
    }
    if(document.querySelector('.subZip')){
        document.querySelector('.subZip').innerHTML = sessionStorage.getItem('zipcode');
    }


