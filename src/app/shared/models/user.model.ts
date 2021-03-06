export class User {
  constructor(public id?: string, public display?: string, public user?: any) {
    this.id = id ? id : "UnknownID";
    this.display = display ? display : "Unknown User";
    this.user = user;
  }
}


export interface IAuthInfo {
  id: string;
  password: string;
  saveSession: boolean;
}

export class AuthInfoFromUser implements IAuthInfo{
  constructor(public id: string, public password: string, public saveSession: boolean){
  }
}

export class VerifiedUser {
  constructor(
    public createdAt: string,
    public displayName: string,
    public email: string,
    public emailVerified: boolean,
    public isAnonymous: string,
    public lastLoginAt: string,
    public photoURL: string,
    public providerData: ProviderData[],
    public stsTokenManager: any,
    public tenantId: string,
    public uid: string,
    public phoneNumber: string,
    public inAppAliases: InAppAlias,
    public logins: number[]
  ) {
  }

}

export class InAppAlias {
  constructor(public alias: User) {
  }
}

export class ProviderData {
  constructor(
    public displayName: string,
    public email: string,
    public phoneNumber: string,
    public photoURL: string,
    public providerId: string,
    public uid: string,
  ) {

  }
}

export class AuthEmailCredential {
  constructor(public email: string) {
  }
}

export class FireUser {
  constructor(
    private _displayName: string,
    public email: string,
    public localId: string,  //local id
    public refreshToken: string,
    public registered: boolean,
    private _token: string,
    public _tokenExpireDate: Date,
    public _tokenExpireDateInMilli: number) {

    }

    get token(): string {
      if (this._tokenExpireDate && this._tokenExpireDate > new Date()) {
        return this._token;
      }
      return null;
    }

    get displayName(): string {
      return this._displayName ? this._displayName : this.email;
    }
}

export class FirebaseSignUpRestRequestBody {
  constructor(public email: string, public password: string,
    public returnSecureToken: boolean = true) {

  }
}
