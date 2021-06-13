import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook'
import { List } from '../components/list.component';

export const IndexPage = () => {

    const [dataList, setDataList] = useState([]);
    const [countList, setCountList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const {request} = useHttp();

    const getData = useCallback(async () => {
        try {
            const data = await request('/api/people/?page='+pageNumber, 'GET');
            setDataList(data.results);
            setCountList(data.count);
        } catch (e) {
            console.log(e);
        }
    }, [request, pageNumber]);

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        getData();
    }, [pageNumber, getData])
    
    return (
        <div className="wrapper">
            <h2>Список героев StarWars</h2>
            <List data={dataList} count={countList} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    )
}