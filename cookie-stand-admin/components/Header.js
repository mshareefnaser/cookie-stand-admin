import { useAuth } from '../contexts/auth';

export default function Header() {

    const { user, logout } = useAuth();
    
    return (
        <header className="flex items-center justify-around p-4 bg-green-500 text-black-50">
            <h1 className="text-4xl">Cookie Stand Admin</h1>
            <div >
                <button className="px-4 py-2 mx-4 bg-green-100 rounded">{user.email}</button>
                <button onClick={logout} className="px-4 py-2 mx-4 bg-green-100 rounded">Sign Out</button>
            </div>
        </header>
    );
}