import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook'
import { SimpleList } from '../components/simpleList.component';
import { useParams } from 'react-router-dom';

export const VehiclesPage = () => {

    const {id} = useParams();

    const [dataList, setDataList] = useState([]);
    const [name, setName] = useState(null);

    const {request} = useHttp();

    const getData = useCallback(async () => {
        try {
            const people = await request(`/api/people/${id}/`, 'GET');
            setName(people.name);
            let vehicles = people.vehicles;
            vehicles.forEach(async vehicle => {
                let url = vehicle.replace('http://swapi.dev', '');
                const data = await request(url, 'GET');
                setDataList(dataList => [...dataList, data]);
            });
        } catch (e) {
            console.log(e);
        }
    }, [request, id]);

    useEffect(() => {
        getData();
    }, [getData]);
    
    return (
        <div className="wrapper">
            <h2>Транспорт {name}</h2>
            <SimpleList data={dataList} />
        </div>
    )
}