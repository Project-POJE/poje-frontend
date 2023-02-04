const keys = {
  TOKEN: 'token',
  TEST: '123',
} as const;

type KeysType = typeof keys;


interface LocalStorage {
	get<R>(key: keyof KeysType) => R | null;

  set<R>(key: keyof KeysType, value: R) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: keyof KeysType) {
    return localStorage.removeItem(key);
  }
}


export default class LocalStorage {
  get<R>(key: keyof KeysType): R | null {
    const result = localStorage.getItem(keys[key]);
    console.log(result);
    return result ? JSON.parse(result) : null;
  }

  set<R>(key: keyof KeysType, value: R) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: keyof KeysType) {
    return localStorage.removeItem(key);
  }
}

console.log(JSON.parse('{"asd":"asd"}'));
