import level1_image from "./images/level1/level1.jpg";
import level2_image from "./images/level2/level2.jpg";
import level3_image from "./images/level3/level3.jpg";
import level4_image from "./images/level4/level4.jpg";
import level5_image from "./images/level5/level5.jpg";
import level1character1 from "./images/level1/characters/character_1.png";
import level1character2 from "./images/level1/characters/character_2.png";
import level1character3 from "./images/level1/characters/character_3.png";
import level2character1 from "./images/level2/characters/character_1.png";
import level2character2 from "./images/level2/characters/character_2.png";
import level2character3 from "./images/level2/characters/character_3.png";
import level3character1 from "./images/level3/characters/character_1.png";
import level3character2 from "./images/level3/characters/character_2.png";
import level3character3 from "./images/level3/characters/character_3.png";
import level4character1 from "./images/level4/characters/character_1.png";
import level4character2 from "./images/level4/characters/character_2.png";
import level4character3 from "./images/level4/characters/character_3.png";
import level5character1 from "./images/level5/characters/character_1.png";
import level5character2 from "./images/level5/characters/character_2.png";
import level5character3 from "./images/level5/characters/character_3.png";

const levels = {
    level1: {
        name: "Level 1", 
        image: level1_image, 
        characters: [
            {name: "character1", image: level1character1, found: false},
            {name: "character2", image: level1character2, found: false},
            {name: "character3", image: level1character3, found: false}
        ]
    },
    level2: {
        name: "Level 2",
        image: level2_image,
        characters: [
            {name: "character1", image: level2character1, found: false},
            {name: "character2", image: level2character2, found: false},
            {name: "character3", image: level2character3, found: false}
        ]
    },
    level3: {
        name: "Level 3",
        image: level3_image,
        characters: [
            {name: "character1", image: level3character1, found: false},
            {name: "character2", image: level3character2, found: false},
            {name: "character3", image: level3character3, found: false}
        ]
    },
    level4: {
        name: "Level 4",
        image: level4_image,
        characters: [
            {name: "character1", image: level4character1, found: false},
            {name: "charcater2", image: level4character2, found: false},
            {name: "character3", image: level4character3, found: false}
        ]
    },
    level5: {
        name: "Level 5", 
        image: level5_image, 
        characters: [
            {name: "character1", image: level5character1, found: false},
            {name: "character2", image: level5character2, found: false},
            {name: "character3", image: level5character3, found: false}
        ]
    }, 
}

export default levels;
