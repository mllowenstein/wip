/** General Utility Functions: */
import CryptoJS from 'crypto-js';

/** Generic-Type Clone */
const clone = <T>(object: T): T => {
  const cloned: T = JSON.parse(JSON.stringify(object));
  return cloned;
};

/** Custom grouping function for an input array. */
export const groupBy = function (array: any[], key: string): any[] {
  return array.reduce(function (obj, x) {
    (obj[x[key]] = obj[x[key]] || []).push(x);
    return obj;
  }, {});
};

export const padDigits = function (num: number, padding: number): string {
  return (num + 1).toString().padStart(padding, '0');
};

/** Custom duplicate-removal function for an input array. */
export const unique = function (array: any[]): any[] {
  let vals = '';
  let keys: string[];
  let newarray: any[];
  let unique: any;
  unique = {};
  newarray = [];
  array.forEach(item => {
    vals = '';
    keys = Object.keys(item);
    keys.forEach(key => {
      vals += item[key] + ' ';
    });
    if (!unique[vals]) {
      newarray.push(item);
    }
    unique[vals] = item;
  });
  return newarray;
};

/** Optimized duplicate-removal function for input array of any data-type */
export const uniqify = <T>(inputs: T[]): T[] => {
  const singleset = new Set<string>();
  const singles: T[] = [];
  inputs.forEach((elem: T) => {
    const datastring = JSON.stringify(elem);
    if (!singleset.has(datastring)) {
      singles.push(elem);
      singleset.add(datastring);
    }
  });
  return singles;
};

/**
* Combine an array of unlike objects into a single
* entity containing all properties and key-value
* pairs (e.g. multipart forms being aggregated).
*/
export const fuse = function (items: any[]): any {
  return Object.assign({}, ...items);
};

/** Another generic sorting function used for sorting an array
 * of units by an input parameter (property), which changes,
 * depending on the level at which a hierarchy field is
 * is situated in the tree. */
export const getSorted = function (prop: string) {
  return function (a: any, b: any) {
    if (a[prop] > b[prop]) { return 1; }
    if (a[prop] < b[prop]) { return -1; }
    return 0;
  };
};

/** Creates a random 4-char chunk which will be
 * concatenated with other chunks to make our
 * randomly-generated GUID for batch-posts. */
export const segment = function (): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

/** Creates a random 32-character GUID for
 * batch POST requests, requiring idrec +
 * idrecparent values. */
export const generate = function (): string {
  return (
    segment() + segment() + segment()
    + '4' + segment().substr(0, 3)
    + segment() + segment()
    + segment() + segment()
  ).toLowerCase();
};

/** Creates a random 16-character GUID for
 * interacting with firebase nosql db. */
export const genuid = function(): string {
  return (
    segment() + segment() + segment()
    + '4' + segment().substr(0, 3)
  ).toLowerCase();
};

/**
 * Smooth-scroll utility function for optional mark or top of page
 * @param spot Optional numeric input for specifying a scroll point
 */
export const scrollTo = (spot?: number): void => {
  window.scrollTo({
    top: spot ?? 0,
    behavior: 'smooth',
  });
};

/**
 * Simpler floor syntax for calculation logic
 * @param val Floating-point number to round down
 */
export const whole = (val: number): number => { return ~~val; };

/**
 * Log object in tuple-format
 * @elem Object with key-value pairs
 */
export const readme = (elem: any): void => {
  for (let [key, value] of Object.entries(elem)) {
    console.log(`${key}: ${value}`);
  }
};

/**
 * Base64-Encryption
 * @plaintext Input text to be encrypted
 */
export const enc64 = (plaintext: string): string => {
  return window.btoa(plaintext);
};

/**
 * Base64-Decryption
 * @enctext Text content to be decrypted
 */
export const dec64 = (enctext: string): string => {
  return window.atob(enctext);
};

/**
 * Symmetric Encryption/Decryption
 */
// Encryption
export const encryptAES = (message: string, secretKey: string): string => {
  const key = CryptoJS.enc.Utf8.parse(secretKey);
  const encrypted = CryptoJS.AES.encrypt(message, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
};

// Decrypt
export const decryptAES = (ciphertext: string, secretKey: string): string => {
  const key = CryptoJS.enc.Utf8.parse(secretKey);
  const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

/**
 * Asymmetric Encryption
 */
// Generate public and private keys

export const keyPair = window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]), // 65537
    hash: "SHA-256"
  },
  true,
  ["encrypt", "decrypt"]
);

// Encryption
export const encryptRSA = async (message: string, publicKey: CryptoKey): Promise<string> => {
  const encodedMessage = new TextEncoder().encode(message);
  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP"
    },
    publicKey,
    encodedMessage
  );
  return window.btoa(String.fromCharCode(...new Uint8Array(encrypted)));
};

//Decrypt
export const decryptRSA = async (ciphertext: string, privateKey: CryptoKey): Promise<string> => {
  const decodedCiphertext = Uint8Array.from(
    atob(ciphertext),
    c => c.charCodeAt(0)
  );
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP"
    },
    privateKey,
    decodedCiphertext
  );
  return new TextDecoder().decode(decrypted);
};

/**
 * Hash Encryption
 */
// Calculate MD5 Hash
export const md5hash = (message: string) => {
  return CryptoJS.MD5(message).toString();
};

// Calculate SHA-256 Hash
export const sha256hash = (message: string) => {
  return CryptoJS.SHA256(message).toString();
};

/**
 * Obfuscation Encryption (Semi-DIY)
 */
// String Substitution
export const replaceChars = (str: string) => {
  return str.replace(/a/g, "@").replace(/e/g, "3").replace(/i/g, "1");
};

// code Obfuscation
export const obfuscateCode = (code: string) => {
  //You can do this using your own encryption algorithm, but this is just an example
  return code.split("").reverse().join("");
};

/** Project Name Inverse Parser (Remove Matches) */
export const inverseParseProjectName = (patterns: {[key: string]: RegExp }, input: string) => {
  Object.values(patterns).forEach(pattern => {
    input = input.replace(pattern, '');
  });
  return input.replace(/^[^\w]+|[^\w]+$/g, '').trim();
};

/** Project Name Parser */
export const parseFromProjectName = (key: string, input: string) => {
  const patterns: {[key: string]: RegExp } = {
    'projectnum': /^(\d+)/,
    'poafenum': /(F\w\d+)/,
    'approvernum': /([A-Za-z]{1,3}\d{3,4})/,
    'parents': /(\(\))$/,
  };
  if (key === 'projectname') {
    return inverseParseProjectName(patterns, input);
  } else {
    const pattern = patterns[key];
    if (!pattern) return input;
    const match = input.match(pattern);
    return match ? match[1] : 'N/A';
  }
};

export const datep = function (date: Date): string {
  return date.toISOString().split('T')[0];
};

export const fom = function (date: Date): Date | string {
  const setfom = new Date(date.getFullYear(), date.getMonth(), 1);
  const datestring = formatDateParam(setfom);
  return normalizeDate(datestring);
};

export const lom = function (date: Date): Date | string {
  const setlom = new Date(date.getFullYear(), date.getMonth()+1, 0);
  const datestring = formatDateParam(setlom);
  return normalizeDate(datestring);
};

export const reformatdatestring = function (ds: string): string {
  const regex = /^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;
  const match = ds.match(regex);
  if (match) {
    const [, weekday, month, monthday, year] = match;
    return `${month} ${monthday} ${year}, ${weekday}`;
  } else  {
    return ds;
  }
}

export const formatDateParam = (input: Date | string): string => {
  const date = new Date(input);
  if (isNaN(date.getTime())) return input.toString();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const formatDate = (input: Date | string): string => {
  const date = new Date(input);
  if (isNaN(date.getTime())) return input.toString();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}

export const formatDateRange = (startDate: string, endDate: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  const start = new Date(startDate);
  const end = new Date(endDate);
  const formattedStartDate = start.toLocaleDateString('en-US', options);
  const formattedEndDate = end.toLocaleDateString('en-US', options);
  return `${formattedStartDate} to ${formattedEndDate}`;
}

export const processDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', options);
  return formattedDate;
}

export const normalizeDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  // Parse the date using UTC
  const dateObj = new Date(`${date}T00:00:00Z`);
  // Format the date using toLocaleDateString with UTC options
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    ...options,
    timeZone: 'UTC',
  });
  return formattedDate;
}

/** Array Subsetting Methods */
export const subsetOf = (initial: any[], from: number, to?: number): any[] => {
  return initial.slice(from, to || initial.length-1);
};

/** Remove duplicates based on specific key */
export const removeDuplicateProps = (data: any[], key: string): any[] => {
  const seen = new Set();
  const filtered = data.filter((item: any) => {
    const propvalue = item[key];
    if (seen.has(propvalue)) {
      return false;
    } else {
      seen.add(propvalue);
      return true;
    }
  });
  return filtered;
};
