import fs from "fs-extra";
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecondLevel => {
        fs.writeFileSync(LoopSecondLevel.path.replace("FromTableColumns", ConfigJson.ToDataDetails.DataPath), JSON.stringify([]));
    });
};

export { StartFunc };
