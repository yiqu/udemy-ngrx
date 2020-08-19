export interface FirebasePromiseError {
  code: string;
  name: string;
  toString(): string;
}

export class FirebaseSignUpRestRequestBody {
  constructor(public email: string, public password: string,
    public returnSecureToken: boolean = true) {

  }
}
