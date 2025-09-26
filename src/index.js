import { powerOfN } from "./power_of_n";
import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    powerOfN,
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};