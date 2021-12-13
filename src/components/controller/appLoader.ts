import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f090954421c94e4ba857fca1cceb7517', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
