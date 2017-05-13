import { globalConfig } from '../config'
import * as configDataDentasol from './dentasol/data'
import * as configDataIsar from './isar/data'
import * as configDataNzo from './nzo/data'
import * as configDataZcor from './zcor/data'

const setTheme = (name) => {
    switch (name) {
        case 'dentasol': {
            return configDataDentasol;
        }
        case 'isar': {
            return configDataIsar;
        }
        case 'nzo': {
            return configDataNzo;
        }
        case 'zcor': {
            return configDataZcor;
        }
        default: {
            return configDataDentasol;
        }
    }
};
const configData = setTheme(globalConfig.theme);
export { configData }
