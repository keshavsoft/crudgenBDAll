import { StartFunc as StartFuncInitializeSequelize } from "./RetSeqWithTableNames.js";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    sequelize.sync({ force: true });
};

StartFunc();