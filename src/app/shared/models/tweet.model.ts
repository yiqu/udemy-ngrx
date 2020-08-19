export class Tweet {
  constructor(public userName: string,
    public content: string,
    public date: number = 0,
    public id: string = null,
    public status: TweetStatus) {

  }
}


enum TweetStatus {
  NOT_SENT,
  IN_PROGRESS,
  PUBLISHED
}
