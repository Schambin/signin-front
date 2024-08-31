import { DataGrid } from '@mui/x-data-grid';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';


export function UsersList() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        async function loadUsersData() {
            const token = localStorage.getItem('token');
            const { data } = await api.get('p/list-users', {
                headers: { Authorization: `Bearer ${token}` }
            });

            const formatedData = data.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
            }))
            setAllUsers(formatedData);
        }

        loadUsersData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 160 },
    ];

    return (
        <div className='h-dvh w-[100%] flex align-center justify-center p-1 rounded-md'>
            <DataGrid
                rows={allUsers}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 17 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ overflow: 'clip' }}
            />
        </div>
    );
}