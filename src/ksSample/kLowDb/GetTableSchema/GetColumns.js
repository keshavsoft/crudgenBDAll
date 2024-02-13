import Configjson from '../../../Config.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFileName = fileNameJson.fileName;

    LocalReturnData.KTF = false;
    let LocalTableColumns = Configjson.jsonConfig.tableAndColumns;

    if ("children" in LocalTableColumns === false) {
        return false;
    };

    let LocalFindColumns = LocalTableColumns.children.find(element => {
        return element.name === LocalFileName;
    });

    return LocalFindColumns.fileData;
};

export { StartFunc };