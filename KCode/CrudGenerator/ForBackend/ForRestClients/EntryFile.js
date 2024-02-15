import { StartFunc as StartFuncCommonFuncs } from './CommonFuncs.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTypeName = "restClients/crud";
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    StartFuncCommonFuncs({
        inFilesCollection: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http",
        inFrom: LocalFrom
    });

    StartFuncCommonFuncs({
        inFilesCollection: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http",
        inFrom: LocalFrom
    });

    StartFuncCommonFuncs({
        inFilesCollection: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http",
        inFrom: LocalFrom
    });

    StartFuncCommonFuncs({
        inFilesCollection: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http",
        inFrom: LocalFrom
    });

    StartFuncCommonFuncs({
        inFilesCollection: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http",
        inFrom: LocalFrom
    });
};

export { StartFunc };