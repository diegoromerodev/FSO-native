import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:session`);
    return token || "";
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:session`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:session`);
  }
}

export default AuthStorage;