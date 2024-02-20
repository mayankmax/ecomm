
// import Trie from './Trie';

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
export function autoSuggest(trie, input) {
    let node = trie.root; 

    if(node === null)
    return "I am null";

    // console.log("sds",node.root.children);
    
    const suggestions = [];
    
    // Traverse the trie till the end of input
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!node.children[char]) {
          break;
        }
        node = node.children[char];
    }
    
    // Check if the input prefix exists in the trie
    if (node.isEndOfWord) {
        suggestions.push(input);
    }

    // Find suggestions based on the input prefix
    findSuggestions(node, input, suggestions);

    return suggestions; // Return the suggestions array
}

function findSuggestions(node, prefix, suggestions) {
    if (node.isEndOfWord) {
        suggestions.push(prefix); // Push prefix if it's a complete word
    }
    for (const [char, child] of Object.entries(node.children)) {
        findSuggestions(child, prefix + char, suggestions); // Recursively find suggestions
    }
}

// Test auto-suggestion with an input prefix
const Trie = require('./Trie');
const trie = new Trie();

// Insert categories into the trie
categories.forEach((title) => trie.insert(title.toLowerCase()));

console.log("Auto-suggestions for prefix 'shir':");
console.log(autoSuggest(trie, "shir"));

export {trie}