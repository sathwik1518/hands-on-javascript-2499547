import Card from './Card.js';

const CardlistItem = (imgData) => {
    return `<li class = "cardlist__item">
        ${Card(imgData)}
    </li>`
}

const Cardlist = (data) => {
    return `<section class = "cardlist">
        <link href="components/cardlist.css" rel="stylesheet" />
        <ul class="cardlist__list">
            ${data.map((imgData => CardlistItem(imgData))).join("")}
        </ul>
    </section>`
}

export default Cardlist;