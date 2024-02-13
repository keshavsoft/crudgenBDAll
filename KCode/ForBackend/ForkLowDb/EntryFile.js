import fs from 'fs';
import path from 'path';

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = "kLowDb";
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFuncForreadFile({
        inFilesArray: LocalFirstLevelFolders,
        inTo: LocalTo, inTypeName: LocalTypeName, inSampleString: LocalSampleString
    });
};

let LocalFuncForreadFile = ({ inFilesArray, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "fileName.json";
    let LocalFilesArray = inFilesArray;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    LocalFilesArray.forEach(LoopFile => {
        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);
        let LocalfileNameJsonData = JSON.parse(LocalFileData);
        LocalfileNameJsonData.fileName = LoopFile.name;

        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalfileNameJsonData));
    });
};

export { StartFunc };