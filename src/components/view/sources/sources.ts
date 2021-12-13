import './sources.css';
interface DataSource {
    data: []
    forEach(param: (item: {name: string, id: string}) => void): void;
}

class Sources {
    draw(data: DataSource) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp:  HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;
        data.forEach((item) => {
            const sourceClone: HTMLSpanElement = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
