// ~Data Imports
import { getTipCollectionData } from "./tipData.js"
// ~Html Imports
import { tipCard } from "./tipHtml.js";

//  Adding to the Dom

export const addTipDom = () => {
    const tipElement = document.querySelector("#tips")
    let tipHTMLRep = "<h3>tips</h3>";
    const tipArray= getTipCollectionData();
    for(const tip of tipArray) {
        tipHTMLRep += tipCard(tip)
    }
        tipElement.innerHTML = tipHTMLRep;


}