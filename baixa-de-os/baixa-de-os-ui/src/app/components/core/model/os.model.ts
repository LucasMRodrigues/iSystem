
export class OsModel {
    cpf: string;
    contrato: string;
    oss: string;
    caId: string;
    smartCard: string;
    cidade: string;

    public constructor(init?: Partial<OsModel>) {
        Object.assign(this, init);
    }
}