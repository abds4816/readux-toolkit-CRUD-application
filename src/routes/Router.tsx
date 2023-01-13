import { Routes, Route } from 'react-router-dom'
import AddUser from '../pages/AddUser'
import EditUser from '../pages/EditUser'
import NotFound from '../pages/NotFound'
import UsersList from '../pages/UsersList'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/add-user' element={<AddUser />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router