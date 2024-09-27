function myEach(collection, callback) {
    // ตรวจสอบประเภทของ collection
    if (Array.isArray(collection)) {
        // ถ้าเป็นอาร์เรย์ (Array)
        for (let i = 0; i < collection.length; i++) {
            // เรียกใช้ callback function กับแต่ละสมาชิกในอาร์เรย์
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === "object" && collection !== null) {
        // ถ้าเป็นอ็อบเจกต์ (Object)
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                // เรียกใช้ callback function กับแต่ละสมาชิกในอ็อบเจกต์
                callback(collection[key], key, collection);
            }
        }
    }
    // คืนค่า collection เดิม
    return collection;
}

function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }

    return result;
}
function myReduce(collection, callback, acc) {
    let accumulator = acc;
    let keys = Array.isArray(collection) ? collection : Object.values(collection);

    if (accumulator === undefined) {
        accumulator = keys[0];
        keys = keys.slice(1);
    }

    for (let i = 0; i < keys.length; i++) {
        accumulator = callback(accumulator, keys[i], collection);
    }

    return accumulator;
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) return collection[i];
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) return collection[key];
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) result.push(collection[i]);
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) result.push(collection[key]);
        }
    }

    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === "object" && collection !== null) {
        return Object.keys(collection).length;
    }
    return 0;
}
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}
function mySortBy(array, callback) {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => {
        const valueA = callback(a);
        const valueB = callback(b);
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
}
