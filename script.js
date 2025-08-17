//get all the elements
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output= document.getElementById('output');




async function fetchdata(){

            const url = input.value.trim();
            if (!url) {
             output.textContent = 'Bro I thought you were smart, you forgot to paste the API like Jay \uD83D\uDE02';

              return;
            }

            output.textContent = 'Loading...';

            try {
              const request = await fetch(url);
              if (!request.ok) throw new Error('Invalid API or network issue');

              const response = await request.json();
              console.log(response);
              output.textContent = response.slip?.advice || 'No advice found!';
            } catch (error) {
              output.textContent = "Wear your specs and paste it carefully again";
            }


}

//when button is clicked this function should get called
submit.addEventListener('click',fetchdata);



