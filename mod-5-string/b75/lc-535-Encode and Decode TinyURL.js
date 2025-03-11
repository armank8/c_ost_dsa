// 535. Encode and Decode TinyURL

class TinyURL{
    constructor(){
        this.urlMap = new Map();
        this.baseURL = "http://tinyurl.com/";
    }

    encode(longUrl){
        let uniqueKey = Math.random().toString(36).substr(2,6);
        let shortUrl = this.baseURL + uniqueKey;

        this.urlMap.set(shortUrl,longUrl);

        console.log(uniqueKey);
        console.log(shortUrl);
        console.log(this.urlMap);
        return shortUrl;
    }

    decode(shortURL){
        return this.urlMap.get(shortURL);
    }

}

const tinyUrl= new TinyURL();
let originalURL = "https://leetcode.com/problems/design-tinyURL";
let shortURL = tinyUrl.encode(originalURL);
console.log(shortURL);

let decodedUrl = tinyUrl.decode(shortURL);
console.log(decodedUrl);