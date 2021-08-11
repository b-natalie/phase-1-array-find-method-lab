function superbowlWin(arrayOfObjects) {
    function isWin(element) {
        return (element["result"] === "W");
    }
    // return arrayOfObjects.find(isWin)["year"];
    if (arrayOfObjects.find(isWin)) {
        return arrayOfObjects.find(isWin)["year"];
    } else {
        return undefined;
    }
}