import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { User } from "../interfaces/user.interface";
import { AxiosAdapter } from "../services/axios";

class UserRepository {
  private httpRequest: HttpAdapter;
  private userPath = "users";
  constructor() {
    this.httpRequest = new AxiosAdapter();
  }

  async getUserById(id: string) {
    return await this.httpRequest.get<User>(`${this.userPath}/${id}`);
  }

  async createUser(user: User) {
    return await this.httpRequest.post<User>(`${this.userPath}`, user);
  }

  async updateUser(id: string, user: User) {
    return await this.httpRequest.patch<User>(`${this.userPath}/${id}`, user);
  }
}

export default new UserRepository();
