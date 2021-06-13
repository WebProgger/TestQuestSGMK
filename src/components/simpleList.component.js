import React, {useState, useEffect} from 'react';
import {formatDateTime} from '../engine/functions';

export const SimpleList = ({data}) => {

    const [records, setRecords] = useState(data);

    useEffect(() => {
        setRecords(data);
    }, [data]);

    if(!records.length) {
        return <p>Записей не обнаружено</p>;
    }

    const displayRecords = records
        .map((record, key) => {
            return (
                <div key={key} className="item">
                    <div className="title">{record.name}</div>
                    <div className="content">
                        <div className="side">
                            <div className="option">
                                <span>Model</span>
                                <p>{record.model}</p>
                            </div>
                            <div className="option">
                                <span>Manufacturer</span>
                                <p>{record.manufacturer}</p>
                            </div>
                            <div className="option">
                                <span>Const in credits</span>
                                <p>{record.const_in_credits}</p>
                            </div>
                            <div className="option">
                                <span>length</span>
                                <p>{record.length}</p>
                            </div>
                            <div className="option">
                                <span>Max atmosphering speed</span>
                                <p>{record.max_atmosphering_speed}</p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="option">
                                <span>Crew</span>
                                <p>{record.crew}</p>
                            </div>
                            <div className="option">
                                <span>Passengers</span>
                                <p>{record.passengers}</p>
                            </div>
                            <div className="option">
                                <span>Cargo capacity</span>
                                <p>{record.cargo_capacity}</p>
                            </div>
                            <div className="option">
                                <span>Consumables</span>
                                <p>{record.consumables}</p>
                            </div>
                            <div className="option">
                                <span>Vehicle class</span>
                                <p>{record.vehicle_class}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <span>{formatDateTime(record.edited)}</span>
                    </div>
                </div>
            )
        });

    return (
        <div>
            <div className="items">
                {displayRecords}
            </div>
        </div>
    )
}