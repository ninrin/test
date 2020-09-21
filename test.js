
let tableau = [];
const getUsers = async function () {
    try {
        let response = await fetch('fichier.json')
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                tableau.push(data[index].restaurantName);
                console.log(tableau);

            }
        } else {
            console.log('retour du serveur', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}
// fetch('https://jsonplaceholder.typicode.com/possts')
// .then(response => response.ok).then(data => console.log(data))
// .catch(err => console.warn(err.message));

console.log('object');
getUsers();
console.log(tableau.restaurantName);

const insert = async function (data) {
    let response = await fetch('fichier.json',
        {
            method: 'POST',
            headers: {
                'yo': 'rrprp'
            },
            body: JSON.stringify(data)
        } )
    let responseData = await response.json();
    console.log(responseData);
}

insert({
    restaurant: 'kebab',
    etoile: '5'
})




// promesse

// crée une fonction avec une promise
const calcul = (num1, num2) => {
    return new Promise((resolve, reject) => {
        const resulte = num1 * num2;
        if (resulte < 1000) {
            resolve(resulte);

        } else {
            reject('fail');
        }

    });
}

calcul(10, 10).then((result) => {
    console.log('resultat est:' + result);
}).catch((err) => {
    console.log('erreur est:' + err);
});