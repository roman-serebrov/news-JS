import AppLoader from './appLoader';


class AppController extends AppLoader {
    getSources(callback: Function) {
        console.log(callback)
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: PointerEvent, callback: () => void ) {

        let target = <HTMLElement>e.target;
        console.log(target.classList, 'target')
        const newsContainer = <HTMLElement>e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id')!;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    console.log('sourceId', sourceId)
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target!.parentNode;
        }
    }
}

export default AppController;
