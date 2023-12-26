const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
const PageSection = require('./pageSections');

class ContentBySection{
    constructor(){
        self.baseUrl = process.env.URL;
        self.pageSection = new PageSection();
    }
    async getContent(section){
        try {
            const browser = await puppeteer.launch(),
                  page    = await browser.newPage(),
                  response= await page.goto(process.env.URL + section),
                  body    = await response.text();
            const { window: { document } } = new jsdom.JSDOM(body);
            self.html = document;
            return document;
        } catch (error) {
            console.log(error);
            return '';
        }
    }
    async getItems(section){
        const sectionClass = section.split('/').pop()
        const document = await this.getContent(section);
        if(document == '')
            return [];
        const items = Array.from(document.querySelectorAll(`div.${sectionClass}`));
        return items.map(item => this.getItemContent(item)) || [];
    }
    async getItemContent(content){
        return Array.from(content.childNodes)
        .map( child => child.textContent.replaceAll('\n','').trim())
        .filter( child => child)
        .reduce((itm, current, index)=>{
            if(index == 0){
                itm.name = current;
                return itm;
            }
        
            if(index == 1 && current.includes('ATK:')){
                let statusValues = current.replace('ATK:','').trim().split(' ');
                itm.attack = Number(statusValues[0] || 0);
                if(statusValues.some( item => item == 'DEF:'))
                    itm.defense = Number(statusValues[2] || 0);
                return itm;
            }
            if(index == 2 && current.includes('DEF:')){
                itm.defense = Number(current.replace('DEF:','').trim() || 0);
            }
            if(index == 2 && current){
                itm.description = current.replace('Notes: ','').trim();
                return itm;
            }
            itm.notes = current.trim();
        
        return itm;
        },{})
    }
    async getPets(){
        const document = await this.getContent(self.pageSection.pets);
        if(!document)
            return [];
        const petSkills = Array.from(document.querySelector('table.table.table-condensed.table-bordered.table-responsive').querySelectorAll('tr'));
        return petSkills.filter( i=> i.querySelector('td')).map(i => Array.from(i.querySelectorAll('td')).map( i=> i.textContent)).reduce((total, currentArray)=>{
            total = [...total, ...currentArray];
            return total;
            },[]).sort();
    }
    async getItemDetail(itemName){
        const document = await this.getContent(self.pageSection.ItemSection(itemName));
        if(document == '')
            return [];
        const itemContent = document.querySelector('.default_attr');
        if(!itemContent)
            return [];
        
    }
}

module.exports = ContentBySection;
