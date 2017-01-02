//lokacje
function _Lokacja(){
    this.opis = arguments[0];
    this.kierunek = arguments[1];
    this.gfx = arguments[2];
    this.color = arguments[3];
    this.item = arguments[4];
}

var gra = {
    x: 3,
    y: 6,
    kierunek: ["NORTH","SOUTH","WEST","EAST"],
    lokacja: [
        [new _Lokacja("You are inside a brimstone mine", [0, 0, 0, 1], "gfx/11.gif", "rgb(235,211,64)", []),
            new _Lokacja("You are at the entrance to the mine", [0, 0, 1, 1], "gfx/12.gif", "rgb(89,93,87)", []),
            new _Lokacja("A hill", [0, 1, 1, 1], "gfx/13.gif", "rgb(117,237,243)", [31]),
            new _Lokacja("Some bushes", [0, 0, 1, 1], "gfx/14.gif", "rgb(202,230,51)", []),
            new _Lokacja("An old deserted hut", [0, 0, 1, 1], "gfx/15.gif", "rgb(220,204,61)", [27]),
            new _Lokacja("The edge of a forest", [0, 0, 1, 1], "gfx/16.gif", "rgb(167,245,63)", []),
            new _Lokacja("A dark forest", [0, 1, 1, 0], "gfx/17.gif", "rgb(140,253,99)", [14]),
        ],
        [new _Lokacja("A man nearby making tar", [0, 1, 0, 1], "gfx/21.gif", "rgb(255,190,99)", []),
            new _Lokacja("A timber yard", [0, 1, 1, 1], "gfx/22.gif", "rgb(255,190,99)", []),
            new _Lokacja("You are by a roadside shrine", [1, 1, 1, 1], "gfx/23.gif", "rgb(167,245,63)", [10]),
            new _Lokacja("You are by a small chapel", [0, 0, 1, 1], "gfx/24.gif", "rgb(212,229,36)", []),
            new _Lokacja("You are on a road leading to a wood", [0, 1, 1, 1], "gfx/25.gif", "rgb(167,245,63)", []),
            new _Lokacja("You are in a forest", [0, 0, 1, 1], "gfx/26 i 65.gif", "rgb(167,245,63)", []),
            new _Lokacja("You are in a deep forest", [1, 0, 1, 0], "gfx/27 i 67.gif", "rgb(140,253,99)", [18]),
        ],
        [new _Lokacja("You are by the Vistula River", [1, 0, 0, 1], "gfx/31.gif", "rgb(122,232,252)", []),
            new _Lokacja("You are by the Vistula River", [1, 0, 1, 0], "gfx/32.gif", "rgb(140,214,255)", [32]),
            new _Lokacja("You are on a bridge over river", [1, 1, 0, 0], "gfx/33.gif", "rgb(108,181,242)", []),
            new _Lokacja("You are by the old tavern", [0, 0, 0, 1], "gfx/34.gif", "rgb(255,189,117)", []),
            new _Lokacja("You are at the town's end", [1, 1, 1, 0], "gfx/35.gif", "rgb(255,190,99)", []),
            new _Lokacja("You are in a butcher's shop", [0, 1, 0, 0], "gfx/36.gif", "rgb(255,188,102)", []),
            new _Lokacja("You are in a cooper's house", [0, 1, 0, 0], "gfx/37.gif", "rgb(255,188,102)", []),
        ],
        [new _Lokacja("You are in the Wawel Castle", [0, 0, 0, 1], "gfx/41.gif", "rgb(255,176,141)", []),
            new _Lokacja("You are inside a dragon's cave", [0, 0, 1, 1], "gfx/42.gif", "rgb(198,205,193)", []),
            new _Lokacja("A perfect place to set a trap", [1, 0, 1, 0], "gfx/43.gif", "rgb(255,176,141)", []),
            new _Lokacja("You are by the water mill", [0, 0, 0, 1], "gfx/44.gif", "rgb(255,190,99)", [21]),
            new _Lokacja("You are at a main crossroad", [1, 1, 1, 1], "gfx/45.gif", "rgb(255,190,99)", []),
            new _Lokacja("You are on a town street", [1, 0, 1, 1], "gfx/46.gif", "rgb(255,190,99)", []),
            new _Lokacja("You are in a frontyard of your house", [1, 1, 1, 0], "gfx/47.gif", "rgb(255,190,99)", []),
        ],
        [new _Lokacja(),
            new _Lokacja(),
            new _Lokacja(),
            new _Lokacja("You are by a swift stream", [0, 0, 0, 1], "gfx/54.gif", "rgb(108,181,242)", []),
            new _Lokacja("You are on a street leading forest", [1, 1, 1, 0], "gfx/55.gif", "rgb(255,190,99)", [33]),
            new _Lokacja("You are in a woodcutter's backyard", [0, 1, 0, 0], "gfx/56.gif", "rgb(255,190,99)", []),
            new _Lokacja("You are in a shoemaker's house", [1, 0, 0, 0], "gfx/57.gif", "rgb(254,194,97)", []),
        ],
        [new _Lokacja(),
            new _Lokacja(),
            new _Lokacja(),
            new _Lokacja("You are in a bleak funeral house", [0, 0, 0, 1], "gfx/64.gif", "rgb(254,194,97)", [24]),
            new _Lokacja("You are on a path leading to the wood", [1, 0, 1, 1], "gfx/26 i 65.gif", "rgb(167,245,63)", []),
            new _Lokacja("You are at the edge of a forest", [1, 0, 1, 1], "gfx/66.gif", "rgb(167,245,63)", []),
            new _Lokacja("You are in a deep forest", [0, 0, 1, 0], "gfx/27 i 67.gif", "rgb(140,253,99)", []),
        ]
    ],
    komendy: [
        ["NORTH","N","",""],
        ["SOUTH","S","",""],
        ["EAST","E","",""],
        ["WEST","W","",""]
    ]
}
