class PageSection {
    constructor(){
        this.pets  = '/pets';
        this.recoveryItems = '/items/Recovery';
        this.recovery = '/Recovery'
        this.statusItems = '/items/Status';
        this.status = '/Status';
        this.itemTypes = ['Items','Monsters','Ores', 'Collectibles', 'Special', 'Swords', 'Claws', 'Canes', 'Rod', 'Armor', 'Bows', 'Throwing', 'Additional', 'Crystas', 'AlCrystas', 'RelicCrystas']
    }

    ItemSection  = itemName => `/item/${ itemName }`
    querySection = query    => `/search?search=${ query }`;
    skillSection = job      => `/skills/${ job }`;
}

module.exports = PageSection