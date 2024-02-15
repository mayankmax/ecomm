
import Trie from './Trie';

const categories = [
    "Shirt",
    "Jeans",
    "Top",
    "Joggers",
    "Hoodie",
    "Dress",
    "Skirt",
    "Trousers",
    "Blouse",
    "Shorts",
    "Coat",
    "Sweater",
    "Jacket",
    "Cardigan",
    "Suit",
    "T-shirt",
    "Pants",
    "Blazer",
    "Sweatshirt",
    "Pullover",
    "Tank Top",
    "Leggings",
    "Tunic",
    "Vest",
    "Parka",
    "Poncho",
    "Saree",
    "Kurta",
    "Kurti",
    "Dhoti",
    "Sherwani",
    "Lehenga",
    "Anarkali",
    "Salwar Kameez",
    "Choli",
    "Dupatta",
    "Gown",
    "Sweatpants",
    "Jumpsuit",
    "Romper",
    "Swimsuit",
    "Bikini",
    "Monokini",
    "Cover-Up",
    "Kaftan",
    "Kimono",
    "Blouse",
    "Cami",
    "Crop Top",
    "Bodysuit",
    "Peplum Top",
    "Tube Top",
    "Halter Top",
    "Off-the-Shoulder Top",
    "One-Shoulder Top",
    "Wrap Top",
    "Shirt Dress",
    "Maxi Dress",
    "Midi Dress",
    "Mini Dress",
    "Bodycon Dress",
    "A-line Dress",
    "Shift Dress",
    "Wrap Dress",
    "Slip Dress",
    "Empire Waist Dress",
    "Pencil Skirt",
    "Mini Skirt",
    "Midi Skirt",
    "Maxi Skirt",
    "Pleated Skirt",
    "A-line Skirt",
    "Wrap Skirt",
    "Denim Skirt",
    "Leather Skirt",
    "Flare Skirt",
    "Pencil Pants",
    "Wide-leg Pants",
    "Skinny Pants",
    "Cargo Pants",
    "Capri Pants",
    "Palazzo Pants",
    "Culottes",
    "Bootcut Pants",
    "Track Pants",
    "Chinos",
    "Cropped Pants",
    "Cigarette Pants",
    "Corduroy Pants",
    "Velvet Pants",
    "Pajama Pants",
    "High-waisted Pants",
    "Low-rise Pants",
    "Paperbag Waist Pants",
    "Sweatpants",
    "Tailored Pants"
];

const Trie = require('./Trie')

let trie = new Trie();

for(let cat of categories){
    for(let c of cat.toLowerCase()){
        trie.insert(c);
    }
}

//create the logic for autosuffestion based on input it should return all the possible suggestions
//eg if i type a it shoiuld retutn AnimationTimeline, apple apply, ass etc all the words which categories contain

export {trie};


