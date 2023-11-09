function getData() {
    const urlBase = "https://corsproxy.io/?https://www.takproject.net/magelo/character.php?char=";
    var characters = ['Oogok', 'Baeras'];
    var data = {}

    Promise.all(characters.map(character =>
        fetch(urlBase + character, {
            method: "GET"
        })
        .then(function (response) {
            return response.text();
        }).then(function (html) {
            const items = getItemListFromHtml(html);
            data[character] = items;
        })
    ))
    .then(() => {
        outputDataToPage(data);
    });
}

function getItemListFromHtml(html) {
    var el = document.createElement('html');
    el.innerHTML = html;
    
    var itemList = {};
    var items = el.getElementsByClassName('ItemTitleMid');

    for (var i = 0; i < items.length; i++) {
        var item = items[i].getElementsByTagName('a')[0];
        let itemName = item.innerHTML;
        if (!itemName.startsWith('Spell: ')) {
            if (itemList[itemName]) {
                itemList[itemName].count++;
            }
            else {
                itemList[item.innerHTML] = {
                    itemName: itemName,
                    url: item.href,
                    count: 1
                };
            }
        }
    }

    return itemList;
}

function outputDataToPage(data) {
    let wrapper = document.getElementById("content");
    for(let character in data) {
        wrapper.innerHTML += '<h2 class="characterName">' + character + '</h2>';

        for(let item in data[character]) {
            var x = '<p class="item"><a href="' + data[character][item].url + '">' + data[character][item].itemName + "</a> (" + data[character][item].count + ")" + '</p>'
            wrapper.innerHTML += x;
        }
    }
}