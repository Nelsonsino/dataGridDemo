

var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    createTable(superHeroes);
    //showHeroes(superHeroes);
    $('#table_id_example').DataTable({
        data: superHeroes['members'],
        columns: [
            {data: 'name'},
            {data: 'age'},
            {data: 'secretIdentity'},
            {data: 'powers'}
        ]
    });
}
function populateHeader(jsonObj) {
    //createTable(heroes);
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
    // function showHeroes(jsonObj) {
    //   var heroes = jsonObj['members'];
    //   for(var i = 0; i < heroes.length; i++) {
    //     var myArticle = document.createElement('article');
    //     var myH2 = document.createElement('h2');
    //     var myPara1 = document.createElement('p');
    //     var myPara2 = document.createElement('p');
    //     var myPara3 = document.createElement('p');
    //     var myList = document.createElement('ul');
    //     myH2.textContent = heroes[i].name;
    //     myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    //     myPara2.textContent = 'Age: ' + heroes[i].age;
    //     myPara3.textContent = 'Superpowers:';
    //     var superPowers = heroes[i].powers;
    //     for(var j = 0; j < superPowers.length; j++) {
    //       var listItem = document.createElement('li');
    //       listItem.textContent = superPowers[j];
    //       myList.appendChild(listItem);
    //     }
    //     myArticle.appendChild(myH2);
    //     myArticle.appendChild(myPara1);
    //     myArticle.appendChild(myPara2);
    //     myArticle.appendChild(myPara3);
    //     myArticle.appendChild(myList);
    //     section.appendChild(myArticle);
    //   }
    // }

function createTable(jsonObj) {
    var members = jsonObj['members']
    var table = document.createElement('table');
    var tBody = document.createElement('tbody');
    for (var i = 0; i < members.length; i++) {
        if (i == 0) {
            var member = members[i]
            var thead = document.createElement('thead');
            var colTr = document.createElement('tr');
            for (var j = 0; j < Object.keys(members[i]).length; j++) {
                colTr.appendChild(document.createElement('th'));
            }
            thead.appendChild(colTr);
            table.appendChild(thead);
            table.appendChild(tBody);
        }
        var row = document.createElement('tr');
        for (var k = 0; k < members.length; k++) {
            row.appendChild(document.createElement('td'));
        }
        tBody.appendChild(row);
    }
    table.id = 'table_id_example'
    section.appendChild(table);
}
