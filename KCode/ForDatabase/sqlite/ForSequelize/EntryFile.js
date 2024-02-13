import { Sequelize, DataTypes } from "sequelize";
import path from "path";
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    let LocalFirstLevelFolders = LocalFilesArray.children.filter(element => {
        return "children" in element === false;
    });

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}/${ConfigJson.ToDataDetails.DbName}` // You can specify the path for your SQLite database file
    });

    LocalFirstLevelFolders.forEach(element => {
        Object.entries(element.fileData).forEach(
            ([key, value]) => {
                if (value.type === "STRING") {
                    value.type = DataTypes.STRING;
                };

                if (value.type === "NUMBER") {
                    value.type = DataTypes.NUMBER;
                };
            }
        );

        sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });
    });

    sequelize.sync({ force: true });
};

export { StartFunc };