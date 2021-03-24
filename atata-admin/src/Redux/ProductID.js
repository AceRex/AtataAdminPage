export function CATE1(value) {
    return {
        type: "CATE1",
        payload: value,
    };
}
export function CATE2(value) {
    return {
        type: "CATE2",
        payload: value,
    };
}
export function CATE3(value) {
    return {
        type: "CATE3",
        payload: value,
    };
}
export function CATE4(value) {
    return {
        type: "CATE4",
        payload: value,
    };
}
export function CATE5(value) {
    return {
        type: "CATE5",
        payload: value,
    };
}
export function CATE6(value) {
    return {
        type: "CATE6",
        payload: value,
    };
}
export function CATE7(value) {
    return {
        type: "CATE7",
        payload: value,
    };
}
export function CATE8(value) {
    return {
        type: "CATE8",
        payload: value,
    };
}
export function CATE9(value) {
    return {
        type: "CATE9",
        payload: value,
    };
}
export function CATE10(value) {
    return {
        type: "CATE10",
        payload: value,
    };
}
export function CATE11(value) {
    return {
        type: "CATE11",
        payload: value,
    };
}
export function CATE12(value) {
    return {
        type: "CATE12",
        payload: value,
    };
}
export function CATE13(value) {
    return {
        type: "CATE13",
        payload: value,
    };
}
export function CATE14(value) {
    return {
        type: "CATE14",
        payload: value,
    };
}
export function CATE15(value) {
    return {
        type: "CATE15",
        payload: value,
    };
}
export function CATE16(value) {
    return {
        type: "CATE16",
        payload: value,
    };
}
export function CATE17(value) {
    return {
        type: "CATE17",
        payload: value,
    };
}


  export function productIDChange(value) {
    return {
      type: value,
      payload: value,
    };
  }

const initialState = {
    defaultValue: {
        categoryName: "Abstract Art",
        LastItemNum: "0",
    },
};

function productIDReducer(productID = initialState, action) {
    switch (action.type) {
        case "CATE1":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Abstract Art",
                    LastItemNum: "0",
                },
            };
        case "CATE2":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "African Figures",
                    LastItemNum: "0",
                },
            };
        case "CATE3":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "African Heads",
                    LastItemNum: "0",
                },
            };
        case "CATE4":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Animal Skin",
                    LastItemNum: "0",
                },
            };
        case "CATE5":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Antiques",
                    LastItemNum: "0",
                },
            };
        case "CATE6":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Bead And wire Works",
                    LastItemNum: "0",
                },
            };
        case "CATE7":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Craft",
                    LastItemNum: "0",
                },
            };
        case "CATE8":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Gemstones",
                    LastItemNum: "0",
                },
            };
        case "CATE9":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Horns & Skulls",
                    LastItemNum: "0",
                },
            };
        case "CATE10":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Masks",
                    LastItemNum: "0",
                },
            };
        case "CATE11":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Paintings",
                    LastItemNum: "0",
                },
            };
        case "CATE12":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Pottery And Ceramic",
                    LastItemNum: "0",
                },
            };
        case "CATE13":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Stones Ware",
                    LastItemNum: "0",
                },
            };
        case "CATE14":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Textiles",
                    LastItemNum: "0",
                },
            };
        case "CATE15":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Metal Works",
                    LastItemNum: "0",
                },
            };
        case "CATE16":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Woven Items",
                    LastItemNum: "0",
                },
            };
        case "CATE17":
            return {
                ...productID,
                defaultValue: {
                    categoryName: "Zulu Shields & Spears",
                    LastItemNum: "0",
                },
            };

        default:
            return productID;
    }
}

export default productIDReducer;
