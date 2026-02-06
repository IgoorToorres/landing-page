
type UserListProps = {
    id: number;
    name: string
}

async function fetchUsers(): Promise<UserListProps[]>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: 'igor'},
                {id: 2, name: 'bob'},
            ])
        }, 2000)
    })
}

async function UserList(){
    const userList = await fetchUsers();
    return(
        <div>
            {userList.map((user) => (
                <div key={user.id} className="flex flex-col mt-20 text-white text-center">
                    <p>{`id: ${user.id}`}</p>
                    <p>{`nome: ${user.name}`}</p>
                </div>
            ))}
        </div>
    )
}

export default function UserListPage() {
    return (
        <div>
            <h2>user List</h2>
            <UserList />
        </div>
    )
}