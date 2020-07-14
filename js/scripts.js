
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
// document.querySelector('.subZip').innerHTML = zipcode;

