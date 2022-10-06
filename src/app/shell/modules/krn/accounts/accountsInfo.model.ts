export class AccountsInfoModel {
  constructor(
    public accountKey: number,
  public accountName: string,
  public clientFirstName: string,
  public clientLastName: string,
  public amount: number) {}
}
