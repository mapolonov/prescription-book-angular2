import { RepairAction } from 'src/app/shared/repair-action.model';

export class Breakdown {
    constructor(
        public name: string,
        public description: string,
        public picturePath: string,
        public repairActions: RepairAction[]) {}
}
