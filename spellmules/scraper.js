const TurninItems = Object.freeze({
    EP: 'Ethereal Parchment (61-62)',
    SP: 'Spectral Parchment (63-64)',
    Rune: 'Glyphed Rune Word (65)'
});

const TurninResults = Object.freeze({
    EP: ['Song: Silent Song of Quellious', 'Song: Tuyen\'s Chant of the Plague', 'Song: Dreams of Thule', 'Song: Druzzil\'s Disillusionment', 'Song: Melody of Mischief', 'Song: Warsong of Zek', 'Song: Wind of Marr', 'Spell: Spirit of Arag', 'Spell: Infusion of Spirit', 'Spell: Healing of Sorsha', 'Spell: Scorpion Venom', 'Spell: Spiritual Vigor', 'Spell: Faith', 'Spell: Symbol of Kazad', 'Spell: Ward of Gallantry', 'Spell: Tarnation', 'Spell: Sermon of Penitence', 'Spell: Petrifying Earth', 'Spell: Greater Immobilize', 'Spell: Virtue', 'Spell: Blessing of Reverence', 'Spell: Supernal Elixir', 'Spell: Condemnation', 'Spell: Catastrophe', 'Spell: Pacification', 'Spell: Earthen Roots', 'Spell: Storm\'s Fury', 'Spell: Hand of Ro', 'Spell: Winter\'s Storm', 'Spell: Catastrophe', 'Spell: Flight of Eagles', 'Spell: Immolation of Ro', 'Spell: Karana\'s Rage', 'Spell: Nature\'s Might', 'Spell: Ro\'s Illumination', 'Spell: Greater Fetter', 'Spell: Shield of the Arcane', 'Spell: Arcane Rune', 'Spell: Boggle', 'Spell: Howl of Tashan', 'Spell: Rune of Zebuxoruk', 'Spell: Pacification', 'Spell: Speed of Vallon', 'Spell: Guard of Druzzil', 'Spell: Strangle', 'Spell: Beckon', 'Spell: Word of Morell', 'Spell: Aeldorb\'s Animation', 'Spell: Belt of Magi\'Kot', 'Spell: Blade of Walnan', 'Spell: Flameshield of Ro', 'Spell: Summon Platinum Choker', 'Spell: Summon Runed Mantle', 'Spell: Summon Sapphire Bracelet', 'Spell: Summon Spiked Ring', 'Spell: Summon Glowing Bauble', 'Spell: Shield of the Arcane', 'Spell: Ward of Xegony', 'Spell: Elemental Barrier', 'Spell: Xegony\'s Phantasmal Guard', 'Spell: Fist of Ixiblat', 'Spell: Talisman of Return', 'Spell: Burnout V', 'Spell: Sun Storm', 'Spell: Servant of Marr', 'Spell: Greater Immobilize', 'Spell: Touch of Mujaki', 'Spell: Neurotoxin', 'Spell: Shield of the Arcane', 'Spell: Legacy of Zek', 'Spell: Petrifying Earth', 'Spell: Rune of Death', 'Spell: Saryrn\'s Kiss', 'Spell: Greater Immobilize', 'Spell: Touch of Nife', 'Spell: Crusader\'s Touch', 'Spell: Force of Akilae', 'Spell: Ward of Nife', 'Spell: Deny Undead', 'Spell: Earthen Roots', 'Spell: Call of the Rathe', 'Spell: Strength of Tunare', 'Spell: Festering Darkness', 'Spell: Aura of Darkness', 'Spell: Touch of Volatis', 'Spell: Zevfeer\'s Bite', 'Spell: Deny Undead', 'Spell: True Spirit', 'Spell: Agility of the Wrulan', 'Spell: Spear of Torment', 'Spell: Cloud of Grummus', 'Spell: Greater Immobilize', 'Spell: Tnarg\'s Mending', 'Spell: Focus of Soul', 'Spell: Ancestral Guard', 'Spell: Endurance of the Boar', 'Spell: Talisman of the Wrulan', 'Spell: Talisman of the Tribunal', 'Spell: Petrifying Earth', 'Spell: Greater Fetter', 'Spell: Shield of the Arcane', 'Spell: Tears of Ro', 'Spell: Resistant Armor', 'Spell: Teleport', 'Spell: Elemental Barrier', 'Spell: Draught of Ro', 'Spell: Lure of Ro'],
    SP: ['Song: Psalm of Veeshan', 'Song: Tuyen\'s Chant of Venom', 'Song: Tuyen\'s Chant of Ice', 'Song: Rizlona\'s Call of Flame', 'Song: Dreams of Terris', 'Song: Call of the Banshee', 'Song: Chorus of Marr', 'Song: Requiem of Time', 'Spell: Arag\'s Celerity', 'Spell: Spirit of Rellic', 'Spell: Frost Spear', 'Spell: Spiritual Dominion', 'Spell: Spirit of Sorsha', 'Spell: Kazad\'s Mark', 'Spell: Hammer of Damnation', 'Spell: Supernal Light', 'Spell: Sound of Might', 'Spell: Destroy Undead', 'Spell: Mark of Kings', 'Spell: Word of Replenishment', 'Spell: Protection of the Nine', 'Spell: Destroy Summoned', 'Spell: Blessing of Replenishment', 'Spell: E\'ci\'s Frosty Breath', 'Spell: Nature\'s Infusion', 'Spell: Command of Tunare', 'Spell: Swarming death', 'Spell: Shield of Bracken', 'Spell: Karana\'s Renewal', 'Spell: Protection of Seasons', 'Spell: Savage Roots', 'Spell: Summer\'s Flame', 'Spell: Brackencoat', 'Spell: Night\'s Dark Terror', 'Spell: Torment of Scio', 'Spell: Tranquility', 'Spell: Uproar', 'Spell: Sleep', 'Spell: Shield of Maelin', 'Spell: Insanity', 'Spell: Command of Druzzil', 'Spell: Bliss', 'Spell: Blade of The Kedge', 'Spell: Summon Jewelry Bag', 'Spell: Black Steel', 'Spell: Child of Ro', 'Spell: Malosinia', 'Spell: Elemental Silence', 'Spell: Maelstrom of Ro', 'Spell: Girdle of Magi\'Kot', 'Spell: Destroy Summoned', 'Spell: Planar Renewal', 'Spell: Shield of Maelin', 'Spell: Maelstrom of Thunder', 'Spell: Force Shield', 'Spell: Death\'s Silence', 'Spell: Embracing Darkness', 'Spell: Saryrn\'s Companion', 'Spell: Shield of Maelin', 'Spell: Seduction of Saryrn', 'Spell: Touch of Death', 'Spell: Destroy Undead', 'Spell: Pious Might', 'Spell: Light of Nife', 'Spell: Aura of the Crusader', 'Spell: Quellious\' Word of Serenity', 'Spell: Supernal Cleansing', 'Spell: Frozen Wind', 'Spell: Nature\'s Rebuke', 'Spell: Spirit of the Predator', 'Spell: Brushfire', 'Spell: Shroud of Chaos', 'Spell: Aura of Pain', 'Spell: Terror of Thule', 'Spell: Blood of Hate', 'Spell: Pact of Hate', 'Spell: Spear of Decay', 'Spell: Tears of Saryrn', 'Spell: Malicious Decay', 'Spell: Malosinia', 'Spell: Strength of the Diaku', 'Spell: Talisman of the Boar', 'Spell: Blessing of Replenishment', 'Spell: Velium Strike', 'Spell: Talisman of the Diaku', 'Spell: Tiny Terror', 'Spell: Breath of Ultor', 'Spell: Talisman of Alacrity', 'Spell: Force Shield', 'Spell: Draught of Thunder', 'Spell: Agnarr\'s Thunder', 'Spell: Iceflame of E\'ci', 'Spell: Tears of Arlyxir', 'Spell: Shield of Maelin', 'Spell: Telekin', 'Spell: Draught of E\'ci'],
    Rune: ['Song: Tuyen\'s Chant of Fire', 'Song: Harmony of Sound', 'Song: Lullaby of Morell', 'Spell: Sha\'s Revenge', 'Spell: Ferocity', 'Spell: Yaulp VI', 'Spell: The Silent Command', 'Spell: Armor of the Zealot', 'Spell: Mark of the Righteous', 'Spell: Hand of Virtue', 'Spell: Legacy of Bracken', 'Spell: Blessing of the Nine', 'Spell: Winter\'s Frost', 'Spell: Mask of the Forest', 'Spell: Illusion Froglok', 'Spell: Vallon\'s Quickening', 'Spell: Voice of Quellious', 'Spell: Rathe\'s Son', 'Spell: Sun Vortex', 'Spell: Call of the Arch Mage', 'Spell: Blood of Thule', 'Spell: Child of Bertoxxulous', 'Spell: Word of Terris', 'Spell: Shackles of Tunare', 'Spell: Wave of Marr', 'Spell: Brell\'s Stalwart Shield', 'Spell: Protection of the Wild', 'Spell: Cry of Thunder', 'Spell: Voice of Thule', 'Spell: Aura of Hate', 'Spell: Touch of Innoruuk', 'Spell: Cloak of Luclin', 'Spell: Malos', 'Spell: Blood of Saryrn', 'Spell: Focus of the Seventh', 'Spell: Quiescence', 'Spell: Ferine Avatar', 'Spell: Shock of Magic', 'Spell: Greater Decession', 'Spell: Tears of Marr', 'Spell: Strike of Solusek']
});

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

    const urlBase = "https://api.cors.lol/?url=https://www.takproject.net/magelo/character.php?char=";
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
            data[character] = {};
            data[character].items = items;
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
        if (itemName === 'Deluxe Toolbox')
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
    let characterHtml = '';

    sortedCharacters = Object.entries(characterData).sort();
    let spellCounts = initializeSpellCounts();

    for (let i = 0 ; i < sortedCharacters.length ; i++) {
        const data = sortedCharacters[i][1];
       
        const itemCount = Object.entries(data.items)
            .flatMap(d => d[1].count)
            .reduce((x, y) => {
                return x + y;
            }, 0);

        characterHtml += '<h2 class="characterName">' + sortedCharacters[i][0] + ' (' + (160 - itemCount) + ' empty slots)</h2>';
        characterHtml += '<div class="items-list">';

        const sortedInventory = Object.entries(data.items).sort();
        for(let j = 0 ; j < sortedInventory.length ; j++) {
            if (spellCounts[sortedInventory[j][1].itemName]) {
                spellCounts[sortedInventory[j][1].itemName].count += sortedInventory[j][1].count;
            }
            characterHtml += '<p class="item"><a href="' + sortedInventory[j][1].url + '">' + sortedInventory[j][1].itemName + "</a> (" + sortedInventory[j][1].count + ")" + '</p>'
        }
        characterHtml += '</div>';
    }

    const content = document.getElementById("content");
    content.innerHTML = '';
    if (Object.entries(spellCounts).some(c => c[1].count > 0)) {
        content.innerHTML += getSpellCountsHtml(spellCounts);;
    }
    content.innerHTML += characterHtml;
}

function initializeSpellCounts() {
    let spellCounts = {};
    TurninResults.EP.forEach(spell => spellCounts[spell] = {item: TurninItems.EP, count: 0 });
    TurninResults.SP.forEach(spell => spellCounts[spell] = {item: TurninItems.SP, count: 0 });
    TurninResults.Rune.forEach(spell => spellCounts[spell] = {item: TurninItems.Rune, count: 0 });

    return spellCounts
}

function getSpellCountsHtml(spellCounts) {
    let epSpellCounts = {};
    let spSpellCounts = {};
    let runeSpellCounts = {};
    
    Object.entries(spellCounts).forEach(spellCount => {
        switch(spellCount[1].item) {
            case TurninItems.EP:
                epSpellCounts[spellCount[0]] = spellCount[1].count;
                break;
            case TurninItems.SP:
                spSpellCounts[spellCount[0]] = spellCount[1].count;
                break;
            case TurninItems.Rune:
                runeSpellCounts[spellCount[0]] = spellCount[1].count;
                break;
        }
    });

    let countsHtml = '<button type="button" class="collapsible" onclick="toggleContent(this)">Click to Toggle Turnin Spell Counts (61-65)</button>';
    countsHtml += '<div class="collapsible-content">';

    countsHtml += '<h3 class="turnin-item">' + TurninItems.EP + '</h3>';
    countsHtml += '<ul>';
    Object.entries(epSpellCounts).sort().forEach(ep => countsHtml += '<li>' + ep[0] + ' (' + epSpellCounts[ep[0]] + ')</li>');
    countsHtml += '</ul>';

    countsHtml += '<h3 class="turnin-item">' + TurninItems.SP + '</h3>';
    countsHtml += '<ul>';
    Object.entries(spSpellCounts).sort().forEach(sp => countsHtml += '<li>' + sp[0] + ' (' + spSpellCounts[sp[0]] + ')</li>');
    countsHtml += '</ul>';

    countsHtml += '<h3 class="turnin-item">' + TurninItems.Rune + '</h3>';
    countsHtml += '<ul>';
    Object.entries(runeSpellCounts).sort().forEach(rune => countsHtml += '<li>' + rune[0] + ' (' + runeSpellCounts[rune[0]] + ')</li>');
    countsHtml += '</ul>';

    countsHtml += '</div>'

    return countsHtml;
}

function toggleContent(event) {
    event.classList.toggle('active');
    let content = event.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}