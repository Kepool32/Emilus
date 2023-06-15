import React, { useState, useRef } from 'react';

const Board = () => {
    const [objects, setObjects] = useState([]);
    const [draggedObject, setDraggedObject] = useState(null);
    const boardRef = useRef(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const objectData = event.dataTransfer.getData('object');
        const { offsetX, offsetY } = event.nativeEvent;
        const draggedObject = JSON.parse(objectData);
        const updatedObject = { ...draggedObject, x: offsetX, y: offsetY };
        setObjects((prevObjects) => {
            const filteredObjects = prevObjects.filter((obj) => obj.id !== draggedObject.id);
            return [...filteredObjects, updatedObject];
        });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragStart = (event, object) => {
        setDraggedObject(object);
        event.dataTransfer.setData('object', JSON.stringify(object));
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        setDraggedObject(null);
    };

    const handleDrag = (event) => {
        if (!draggedObject) return;
        const { clientX, clientY } = event;
        const boardRect = boardRef.current.getBoundingClientRect();
        const offsetX = clientX - boardRect.left;
        const offsetY = clientY - boardRect.top;
        setObjects((prevObjects) =>
            prevObjects.map((obj) => (obj.id === draggedObject.id ? { ...obj, x: offsetX, y: offsetY } : obj))
        );
    };

    const handleSave = () => {
        const data = JSON.stringify(objects);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'placement.json';
        link.click();
    };

    const handleImport = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const data = JSON.parse(reader.result);
            setObjects(data);
        };
        reader.readAsText(file);
    };

    const handleDeleteAll = () => {
        setObjects([]);
    };

    return (
        <div>
            <div
                ref={boardRef}
                style={{ width: '500px', height: '500px', border: '1px solid black', position: 'relative' }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDrag={handleDrag}
            >
                {objects.map((object) => (
                    <img
                        key={object.id}
                        src={object.image}
                        alt={object.name}
                        draggable
                        style={{
                            position: 'absolute',
                            left: object.x,
                            top: object.y,
                            transform: 'scale(0.2)',
                            transformOrigin: 'top left',
                            cursor: 'move',
                        }}
                        onDragStart={(event) => handleDragStart(event, object)}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </div>
            <div>
                <button onClick={handleSave}>Сохранить</button>
                <input type="file" accept=".json" onChange={handleImport} />
                <button onClick={handleDeleteAll}>Удалить все</button>
            </div>
        </div>
    );
};

export default Board;
