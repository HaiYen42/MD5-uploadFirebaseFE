import {Category} from "./Category";

export class Song {
  private name?: string;
  private avatar?:string;
  private lyrics?:string;
  private mp3Url?:string;
  private category?:Category;

  constructor(name: string, avatar: string, lyrics: string, mp3Url: string, category: Category) {
    this.name = name;
    this.avatar = avatar;
    this.lyrics = lyrics;
    this.mp3Url = mp3Url;
    this.category = category;
  }
}
