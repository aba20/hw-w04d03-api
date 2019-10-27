// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
// We loaded axios library in our html file
// Lets make an ajax call with axios


/*         -------- This is kinda work but the 
                            text would not show up          */

const img = document.createElement('img');
const name = document.createElement('h4');
const gender = document.createElement('h4');
const status = document.createElement('h4');
const button = document.querySelector('button');
const apiUrl = `https://rickandmortyapi.com/api/character/[1,2,3,4,5]`;

const mortySmith = () => {
    axios({
        url: apiUrl,
        method: 'get',
    }
    )
        .then(res => {
            console.log(res)
            
            img.src=res.data[0,1,2,3,4].image
            name.innerText=res.data[0,1,2,3,4].name
            gender.innerText=res.data[0,1,2,3,4].gender
            status.innerText=res.data[0,1,2,3,4].status
            document.body.append(img)
            document.body.append(name)
            document.body.append(gender)
            document.body.append(status)
        })
        .catch(err => {
            console.log(err)
        })
    }
 button.addEventListener('click', mortySmith);

