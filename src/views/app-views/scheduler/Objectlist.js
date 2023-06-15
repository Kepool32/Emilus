import React, { useState } from 'react';
import chairImage from '../../../image/1.png';
import chairImage1 from '../../../image/2.png';
import chairImage2 from '../../../image/3.png';
import chairImage3 from '../../../image/4.png';
import table1 from '../../../image/5.jpg';
import table2 from '../../../image/6.jpg';
import partition from '../../../image/7.jpg';
import partition1 from '../../../image/8.jpg';

const ObjectList = () => {
    const [hiddenObjects, setHiddenObjects] = useState([]);

    const objects = [
        { id: 1, name: 'Стул', image: chairImage },
        { id: 2, name: 'Стул', image: chairImage1 },
        { id: 3, name: 'Стул', image: chairImage2 },
        { id: 4, name: 'Стул', image: chairImage3 },
        { id: 5, name: 'Стул', image: chairImage },
        { id: 6, name: 'Стул', image: chairImage1 },
        { id: 7, name: 'Стул', image: chairImage2 },
        { id: 8, name: 'Стул', image: chairImage3 },
        { id: 9, name: 'Стол', image: table1 },
        { id: 10, name: 'Стол', image: table2 },
        { id: 11, name: 'Стол', image: table1 },
        { id: 12, name: 'Стол', image: table2 },
        { id: 13, name: 'Перегородка', image: partition },
        { id: 14, name: 'Перегородка', image: partition1 },
        { id: 15, name: 'Перегородка', image: partition },
        { id: 16, name: 'Перегородка', image: partition1 },
    ];

    const handleDragStart = (event, object) => {
        event.dataTransfer.setData('object', JSON.stringify(object));
    };

    const handleDrop = (event, object) => {
        event.preventDefault();
        setHiddenObjects((prevHiddenObjects) => [...prevHiddenObjects, object]);
    };

    return (
        <div>
            <h2>Список объектов</h2>
            {objects.map((object) => {
                const isHidden = hiddenObjects.some((hiddenObject) => hiddenObject.id === object.id);

                if (isHidden) {
                    return null;
                }

                return (
                    <img
                        key={object.id}
                        src={object.image}
                        alt={object.name}
                        draggable="true"
                        style={{ width: '50px' }}
                        onDragStart={(event) => handleDragStart(event, object)}
                        onDragEnd={(event) => handleDrop(event, object)}
                    />
                );
            })}
        </div>
    );
};

export default ObjectList;
