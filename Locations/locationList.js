// ~Data Imports
import {getlocationCollectionData} from "./locationData.js"
// ~Html Imports
import { locationCard } from "./locationHtml.js";

//  Adding to the Dom

export const addLocationDom = () => {
    const locationElement = document.querySelector("#locations")
    let locationHTMLRep = "<h3>locations</h3>";
    const locationArray= getlocationCollectionData();
    for(const location of locationArray) {
        locationHTMLRep += locationCard(location)
    }
        locationElement.innerHTML = locationHTMLRep;


}