import './App.css'
import Contacts from './components/Contacts'
import { Routes, Route } from 'react-router-dom'
import Edit from './components/Contacts/Edit'
import Error404 from './components/Error404'

function App() {
    return (
        <div className="App">
            <div id="container">
                <Routes>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
