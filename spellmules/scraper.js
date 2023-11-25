function getTradeskillData() {
    const characters = [
        'Nagalchpoistink', 'Nagbaker', 'Nagbows', 'Nagbrew', 'Nagclothes', 'Nagpottery', 'Nagshinystuff', 'Nagsmith',
        'Gemsdaddy', 'Incharge', 'Overflow', 'Overflowtwo', 'Overflowthree', 'Overflowfour', 'Overflowfive', 'Slushfund'];

    getData(characters, document.getElementById('tradeskill-btn'));
}

function getSpellData() {
    const characters = [
        'Beastlordgirl', 'Shadoknightgirl', 'Enchantergirl', 'Magiciangirl', 'Necromancergirl', 'Rangergirl', 'Wizardgirl',
        'Bardboy', 'Clericboy', 'Druidboy', 'Enchanterboy', 'Magicianboy', 'Necromancerboy', 'Paladinboy', 'Shamanboy',
        'Miscone', 'Misctwo', 'Miscthree', 'Miscfour', 'Miscfive', 'Miscsix', 'Miscseven', 'Misceight', 'Armourgirl'];

    getData(characters, document.getElementById('spell-data-btn'));
}

function getData(characters, clickedBtn) {
    clickedBtn.disabled = true;
    setTimeout(() => {
        clickedBtn.disabled = false;
    }, 30000)

    const urlBase = "https://corsproxy.io/?https://www.takproject.net/magelo/character.php?char=";
    const wrapper = document.getElementById("content");
    wrapper.innerHTML = '<h2>Loading, Please wait...</h2>'
    
    let data = {}
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
    let el = document.createElement('html');
    el.innerHTML = html;
    
    const allItems = el.getElementsByClassName('ItemOuter');
    let items = [];
    for (let i = 0 ; i < allItems.length; i++) {
        const slotNum = parseInt(allItems[i].id.split('slot')[1]);

        // get items not currently equipped
        if (slotNum && slotNum > 21) {
            items.push(allItems[i].getElementsByClassName('ItemTitleMid')[0]);
        }
    }

    let itemDict = {};
    for (let i = 0; i < items.length; i++) {
        let item = items[i].getElementsByTagName('a')[0];
        let itemName = item.innerHTML;
        if (itemName == 'Deluxe Toolbox')
            continue;

        if (itemDict[itemName]) {
            itemDict[itemName].count++;
        }
        else {
            itemDict[item.innerHTML] = {
                itemName: itemName,
                url: item.href,
                count: 1
            };
        }
    }
    return itemDict;
}

function outputDataToPage(characterData) {
    const wrapper = document.getElementById("content");
    wrapper.innerHTML = '';

    sortedCharacters = Object.entries(characterData).sort();
    for (let i = 0 ; i < sortedCharacters.length ; i++) {
        const data = sortedCharacters[i][1];
       
        const itemCount = Object.entries(data)
            .flatMap(d => d[1].count)
            .reduce((x, y) => {
                return x + y;
            }, 0);

        wrapper.innerHTML += '<h2 class="characterName">' + sortedCharacters[i][0] + ' (' + (160 - itemCount) + ' empty slots)</h2>';
        
        const sortedInventory = Object.entries(data).sort();
        for(let j = 0 ; j < sortedInventory.length ; j++) {
            wrapper.innerHTML += '<p class="item"><a href="' + sortedInventory[j][1].url + '">' + sortedInventory[j][1].itemName + "</a> (" + sortedInventory[j][1].count + ")" + '</p>'
        }
    }
}